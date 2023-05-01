import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {NiveauEtudeService} from 'src/app/controller/service/NiveauEtude.service';
import {NiveauEtudeDto} from 'src/app/controller/model/NiveauEtude.model';
import {NiveauEtudeCriteria} from 'src/app/controller/criteria/NiveauEtudeCriteria.model';



@Component({
  selector: 'app-niveau-etude-edit-admin',
  templateUrl: './niveau-etude-edit-admin.component.html'
})
export class NiveauEtudeEditAdminComponent extends AbstractEditController<NiveauEtudeDto, NiveauEtudeCriteria, NiveauEtudeService>   implements OnInit {


    private _validNiveauEtudeLibelle = true;
    private _validNiveauEtudeCode = true;




    constructor( private niveauEtudeService: NiveauEtudeService ) {
        super(niveauEtudeService);
    }

    ngOnInit(): void {
}


    public setValidation(value : boolean){
        this.validNiveauEtudeLibelle = value;
        this.validNiveauEtudeCode = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateNiveauEtudeLibelle();
        this.validateNiveauEtudeCode();
    }
    public validateNiveauEtudeLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validNiveauEtudeLibelle = false;
        } else {
            this.validNiveauEtudeLibelle = true;
        }
    }
    public validateNiveauEtudeCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validNiveauEtudeCode = false;
        } else {
            this.validNiveauEtudeCode = true;
        }
    }






    get validNiveauEtudeLibelle(): boolean {
        return this._validNiveauEtudeLibelle;
    }
    set validNiveauEtudeLibelle(value: boolean) {
        this._validNiveauEtudeLibelle = value;
    }
    get validNiveauEtudeCode(): boolean {
        return this._validNiveauEtudeCode;
    }
    set validNiveauEtudeCode(value: boolean) {
        this._validNiveauEtudeCode = value;
    }

}
