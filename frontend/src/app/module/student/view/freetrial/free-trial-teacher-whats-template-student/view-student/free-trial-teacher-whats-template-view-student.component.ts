import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {FreeTrialTeacherWhatsTemplateService} from 'src/app/controller/service/FreeTrialTeacherWhatsTemplate.service';
import {FreeTrialTeacherWhatsTemplateDto} from 'src/app/controller/model/FreeTrialTeacherWhatsTemplate.model';
import {FreeTrialTeacherWhatsTemplateCriteria} from 'src/app/controller/criteria/FreeTrialTeacherWhatsTemplateCriteria.model';

@Component({
  selector: 'app-free-trial-teacher-whats-template-view-student',
  templateUrl: './free-trial-teacher-whats-template-view-student.component.html'
})
export class FreeTrialTeacherWhatsTemplateViewStudentComponent extends AbstractViewController<FreeTrialTeacherWhatsTemplateDto, FreeTrialTeacherWhatsTemplateCriteria, FreeTrialTeacherWhatsTemplateService> implements OnInit {


    constructor(private freeTrialTeacherWhatsTemplateService: FreeTrialTeacherWhatsTemplateService){
        super(freeTrialTeacherWhatsTemplateService);
    }

    ngOnInit(): void {
    }




}
