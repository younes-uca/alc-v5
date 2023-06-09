import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {EtatEtudiantScheduleService} from 'src/app/controller/service/EtatEtudiantSchedule.service';
import {EtatEtudiantScheduleDto} from 'src/app/controller/model/EtatEtudiantSchedule.model';
import {EtatEtudiantScheduleCriteria} from 'src/app/controller/criteria/EtatEtudiantScheduleCriteria.model';



@Component({
  selector: 'app-etat-etudiant-schedule-edit-student',
  templateUrl: './etat-etudiant-schedule-edit-student.component.html'
})
export class EtatEtudiantScheduleEditStudentComponent extends AbstractEditController<EtatEtudiantScheduleDto, EtatEtudiantScheduleCriteria, EtatEtudiantScheduleService>   implements OnInit {


    private _validEtatEtudiantScheduleRef = true;




    constructor( private etatEtudiantScheduleService: EtatEtudiantScheduleService ) {
        super(etatEtudiantScheduleService);
    }

    ngOnInit(): void {
}


    public setValidation(value : boolean){
        this.validEtatEtudiantScheduleRef = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateEtatEtudiantScheduleRef();
    }
    public validateEtatEtudiantScheduleRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
            this.errorMessages.push('Ref non valide');
            this.validEtatEtudiantScheduleRef = false;
        } else {
            this.validEtatEtudiantScheduleRef = true;
        }
    }






    get validEtatEtudiantScheduleRef(): boolean {
        return this._validEtatEtudiantScheduleRef;
    }
    set validEtatEtudiantScheduleRef(value: boolean) {
        this._validEtatEtudiantScheduleRef = value;
    }

}
