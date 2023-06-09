import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {EtatReponseService} from 'src/app/controller/service/EtatReponse.service';
import {EtatReponseDto} from 'src/app/controller/model/EtatReponse.model';
import {EtatReponseCriteria} from 'src/app/controller/criteria/EtatReponseCriteria.model';



@Component({
  selector: 'app-etat-reponse-edit-teacher',
  templateUrl: './etat-reponse-edit-teacher.component.html'
})
export class EtatReponseEditTeacherComponent extends AbstractEditController<EtatReponseDto, EtatReponseCriteria, EtatReponseService>   implements OnInit {


    private _validEtatReponseCode = true;
    private _validEtatReponseLibelle = true;




    constructor( private etatReponseService: EtatReponseService ) {
        super(etatReponseService);
    }

    ngOnInit(): void {
}


    public setValidation(value : boolean){
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
