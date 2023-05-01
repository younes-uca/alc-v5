import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {FreeTrialTeacherWhatsTemplateService} from 'src/app/controller/service/FreeTrialTeacherWhatsTemplate.service';
import {FreeTrialTeacherWhatsTemplateDto} from 'src/app/controller/model/FreeTrialTeacherWhatsTemplate.model';
import {FreeTrialTeacherWhatsTemplateCriteria} from 'src/app/controller/criteria/FreeTrialTeacherWhatsTemplateCriteria.model';
@Component({
  selector: 'app-free-trial-teacher-whats-template-create-teacher',
  templateUrl: './free-trial-teacher-whats-template-create-teacher.component.html'
})
export class FreeTrialTeacherWhatsTemplateCreateTeacherComponent extends AbstractCreateController<FreeTrialTeacherWhatsTemplateDto, FreeTrialTeacherWhatsTemplateCriteria, FreeTrialTeacherWhatsTemplateService>  implements OnInit {




    constructor( private freeTrialTeacherWhatsTemplateService: FreeTrialTeacherWhatsTemplateService ) {
        super(freeTrialTeacherWhatsTemplateService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }










}
