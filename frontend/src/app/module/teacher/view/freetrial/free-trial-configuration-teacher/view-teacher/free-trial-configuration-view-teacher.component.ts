import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {FreeTrialConfigurationService} from 'src/app/controller/service/FreeTrialConfiguration.service';
import {FreeTrialConfigurationDto} from 'src/app/controller/model/FreeTrialConfiguration.model';
import {FreeTrialConfigurationCriteria} from 'src/app/controller/criteria/FreeTrialConfigurationCriteria.model';

@Component({
  selector: 'app-free-trial-configuration-view-teacher',
  templateUrl: './free-trial-configuration-view-teacher.component.html'
})
export class FreeTrialConfigurationViewTeacherComponent extends AbstractViewController<FreeTrialConfigurationDto, FreeTrialConfigurationCriteria, FreeTrialConfigurationService> implements OnInit {


    constructor(private freeTrialConfigurationService: FreeTrialConfigurationService){
        super(freeTrialConfigurationService);
    }

    ngOnInit(): void {
    }




}
