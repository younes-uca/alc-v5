import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {EtatReponseService} from 'src/app/controller/service/EtatReponse.service';
import {EtatReponseDto} from 'src/app/controller/model/EtatReponse.model';
import {EtatReponseCriteria} from 'src/app/controller/criteria/EtatReponseCriteria.model';
@Component({
  selector: 'app-etat-reponse-create-teacher',
  templateUrl: './etat-reponse-create-teacher.component.html'
})
export class EtatReponseCreateTeacherComponent extends AbstractCreateController<EtatReponseDto, EtatReponseCriteria, EtatReponseService>  implements OnInit {



   private _validEtatReponseCode = true;
   private _validEtatReponseLibelle = true;

    constructor( private etatReponseService: EtatReponseService ) {
        super(etatReponseService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validEtatReponseCode = value;
        this.validEtatReponseLibelle = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateEtatReponseCode();
        this.validateEtatReponseLibelle();
    }

    public validateEtatReponseCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validEtatReponseCode = false;
        } else {
            this.validEtatReponseCode = true;
        }
    }
    public validateEtatReponseLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validEtatReponseLibelle = false;
        } else {
            this.validEtatReponseLibelle = true;
        }
    }






    get validEtatReponseCode(): boolean {
        return this._validEtatReponseCode;
    }

    set validEtatReponseCode(value: boolean) {
         this._validEtatReponseCode = value;
    }
    get validEtatReponseLibelle(): boolean {
        return this._validEtatReponseLibelle;
    }

    set validEtatReponseLibelle(value: boolean) {
         this._validEtatReponseLibelle = value;
    }



}
