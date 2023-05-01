import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {StatutFreeTrialService} from 'src/app/controller/service/StatutFreeTrial.service';
import {StatutFreeTrialDto} from 'src/app/controller/model/StatutFreeTrial.model';
import {StatutFreeTrialCriteria} from 'src/app/controller/criteria/StatutFreeTrialCriteria.model';

@Component({
  selector: 'app-statut-free-trial-view-student',
  templateUrl: './statut-free-trial-view-student.component.html'
})
export class StatutFreeTrialViewStudentComponent extends AbstractViewController<StatutFreeTrialDto, StatutFreeTrialCriteria, StatutFreeTrialService> implements OnInit {


    constructor(private statutFreeTrialService: StatutFreeTrialService){
        super(statutFreeTrialService);
    }

    ngOnInit(): void {
    }




}
