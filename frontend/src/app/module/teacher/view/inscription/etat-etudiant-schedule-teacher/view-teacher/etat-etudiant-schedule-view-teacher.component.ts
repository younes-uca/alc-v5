import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {EtatEtudiantScheduleService} from 'src/app/controller/service/EtatEtudiantSchedule.service';
import {EtatEtudiantScheduleDto} from 'src/app/controller/model/EtatEtudiantSchedule.model';
import {EtatEtudiantScheduleCriteria} from 'src/app/controller/criteria/EtatEtudiantScheduleCriteria.model';

@Component({
  selector: 'app-etat-etudiant-schedule-view-teacher',
  templateUrl: './etat-etudiant-schedule-view-teacher.component.html'
})
export class EtatEtudiantScheduleViewTeacherComponent extends AbstractViewController<EtatEtudiantScheduleDto, EtatEtudiantScheduleCriteria, EtatEtudiantScheduleService> implements OnInit {


    constructor(private etatEtudiantScheduleService: EtatEtudiantScheduleService){
        super(etatEtudiantScheduleService);
    }

    ngOnInit(): void {
    }




}
