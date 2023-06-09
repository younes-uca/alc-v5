import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {TypeReclamationProfService} from 'src/app/controller/service/TypeReclamationProf.service';
import {TypeReclamationProfDto} from 'src/app/controller/model/TypeReclamationProf.model';
import {TypeReclamationProfCriteria} from 'src/app/controller/criteria/TypeReclamationProfCriteria.model';
@Component({
  selector: 'app-type-reclamation-prof-create-student',
  templateUrl: './type-reclamation-prof-create-student.component.html'
})
export class TypeReclamationProfCreateStudentComponent extends AbstractCreateController<TypeReclamationProfDto, TypeReclamationProfCriteria, TypeReclamationProfService>  implements OnInit {



   private _validTypeReclamationProfCode = true;
   private _validTypeReclamationProfLibelle = true;

    constructor( private typeReclamationProfService: TypeReclamationProfService ) {
        super(typeReclamationProfService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validTypeReclamationProfCode = value;
        this.validTypeReclamationProfLibelle = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateTypeReclamationProfCode();
        this.validateTypeReclamationProfLibelle();
    }

    public validateTypeReclamationProfCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validTypeReclamationProfCode = false;
        } else {
            this.validTypeReclamationProfCode = true;
        }
    }
    public validateTypeReclamationProfLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validTypeReclamationProfLibelle = false;
        } else {
            this.validTypeReclamationProfLibelle = true;
        }
    }






    get validTypeReclamationProfCode(): boolean {
        return this._validTypeReclamationProfCode;
    }

    set validTypeReclamationProfCode(value: boolean) {
         this._validTypeReclamationProfCode = value;
    }
    get validTypeReclamationProfLibelle(): boolean {
        return this._validTypeReclamationProfLibelle;
    }

    set validTypeReclamationProfLibelle(value: boolean) {
         this._validTypeReclamationProfLibelle = value;
    }



}
