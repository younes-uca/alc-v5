import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {FonctionService} from 'src/app/controller/service/Fonction.service';
import {FonctionDto} from 'src/app/controller/model/Fonction.model';
import {FonctionCriteria} from 'src/app/controller/criteria/FonctionCriteria.model';
@Component({
  selector: 'app-fonction-create-teacher',
  templateUrl: './fonction-create-teacher.component.html'
})
export class FonctionCreateTeacherComponent extends AbstractCreateController<FonctionDto, FonctionCriteria, FonctionService>  implements OnInit {



   private _validFonctionCode = true;
   private _validFonctionLibelle = true;

    constructor( private fonctionService: FonctionService ) {
        super(fonctionService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validFonctionCode = value;
        this.validFonctionLibelle = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateFonctionCode();
        this.validateFonctionLibelle();
    }

    public validateFonctionCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validFonctionCode = false;
        } else {
            this.validFonctionCode = true;
        }
    }
    public validateFonctionLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validFonctionLibelle = false;
        } else {
            this.validFonctionLibelle = true;
        }
    }






    get validFonctionCode(): boolean {
        return this._validFonctionCode;
    }

    set validFonctionCode(value: boolean) {
         this._validFonctionCode = value;
    }
    get validFonctionLibelle(): boolean {
        return this._validFonctionLibelle;
    }

    set validFonctionLibelle(value: boolean) {
         this._validFonctionLibelle = value;
    }



}
