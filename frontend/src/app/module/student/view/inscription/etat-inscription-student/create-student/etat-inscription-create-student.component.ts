import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {EtatInscriptionService} from 'src/app/controller/service/EtatInscription.service';
import {EtatInscriptionDto} from 'src/app/controller/model/EtatInscription.model';
import {EtatInscriptionCriteria} from 'src/app/controller/criteria/EtatInscriptionCriteria.model';
@Component({
  selector: 'app-etat-inscription-create-student',
  templateUrl: './etat-inscription-create-student.component.html'
})
export class EtatInscriptionCreateStudentComponent extends AbstractCreateController<EtatInscriptionDto, EtatInscriptionCriteria, EtatInscriptionService>  implements OnInit {



   private _validEtatInscriptionRef = true;

    constructor( private etatInscriptionService: EtatInscriptionService ) {
        super(etatInscriptionService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validEtatInscriptionRef = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateEtatInscriptionRef();
    }

    public validateEtatInscriptionRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
        this.errorMessages.push('Ref non valide');
        this.validEtatInscriptionRef = false;
        } else {
            this.validEtatInscriptionRef = true;
        }
    }






    get validEtatInscriptionRef(): boolean {
        return this._validEtatInscriptionRef;
    }

    set validEtatInscriptionRef(value: boolean) {
         this._validEtatInscriptionRef = value;
    }



}
