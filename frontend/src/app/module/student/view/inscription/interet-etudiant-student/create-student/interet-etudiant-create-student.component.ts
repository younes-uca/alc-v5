import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {InteretEtudiantService} from 'src/app/controller/service/InteretEtudiant.service';
import {InteretEtudiantDto} from 'src/app/controller/model/InteretEtudiant.model';
import {InteretEtudiantCriteria} from 'src/app/controller/criteria/InteretEtudiantCriteria.model';
@Component({
  selector: 'app-interet-etudiant-create-student',
  templateUrl: './interet-etudiant-create-student.component.html'
})
export class InteretEtudiantCreateStudentComponent extends AbstractCreateController<InteretEtudiantDto, InteretEtudiantCriteria, InteretEtudiantService>  implements OnInit {



   private _validInteretEtudiantCode = true;
   private _validInteretEtudiantLibelle = true;

    constructor( private interetEtudiantService: InteretEtudiantService ) {
        super(interetEtudiantService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validInteretEtudiantCode = value;
        this.validInteretEtudiantLibelle = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateInteretEtudiantCode();
        this.validateInteretEtudiantLibelle();
    }

    public validateInteretEtudiantCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validInteretEtudiantCode = false;
        } else {
            this.validInteretEtudiantCode = true;
        }
    }
    public validateInteretEtudiantLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validInteretEtudiantLibelle = false;
        } else {
            this.validInteretEtudiantLibelle = true;
        }
    }






    get validInteretEtudiantCode(): boolean {
        return this._validInteretEtudiantCode;
    }

    set validInteretEtudiantCode(value: boolean) {
         this._validInteretEtudiantCode = value;
    }
    get validInteretEtudiantLibelle(): boolean {
        return this._validInteretEtudiantLibelle;
    }

    set validInteretEtudiantLibelle(value: boolean) {
         this._validInteretEtudiantLibelle = value;
    }



}
