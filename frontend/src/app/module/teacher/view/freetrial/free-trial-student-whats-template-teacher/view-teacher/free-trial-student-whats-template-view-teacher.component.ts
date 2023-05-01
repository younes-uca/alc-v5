import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {FreeTrialStudentWhatsTemplateService} from 'src/app/controller/service/FreeTrialStudentWhatsTemplate.service';
import {FreeTrialStudentWhatsTemplateDto} from 'src/app/controller/model/FreeTrialStudentWhatsTemplate.model';
import {FreeTrialStudentWhatsTemplateCriteria} from 'src/app/controller/criteria/FreeTrialStudentWhatsTemplateCriteria.model';

@Component({
  selector: 'app-free-trial-student-whats-template-view-teacher',
  templateUrl: './free-trial-student-whats-template-view-teacher.component.html'
})
export class FreeTrialStudentWhatsTemplateViewTeacherComponent extends AbstractViewController<FreeTrialStudentWhatsTemplateDto, FreeTrialStudentWhatsTemplateCriteria, FreeTrialStudentWhatsTemplateService> implements OnInit {


    constructor(private freeTrialStudentWhatsTemplateService: FreeTrialStudentWhatsTemplateService){
        super(freeTrialStudentWhatsTemplateService);
    }

    ngOnInit(): void {
    }




}
