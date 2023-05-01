import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {FreeTrialStudentWhatsTemplateService} from 'src/app/controller/service/FreeTrialStudentWhatsTemplate.service';
import {FreeTrialStudentWhatsTemplateDto} from 'src/app/controller/model/FreeTrialStudentWhatsTemplate.model';
import {FreeTrialStudentWhatsTemplateCriteria} from 'src/app/controller/criteria/FreeTrialStudentWhatsTemplateCriteria.model';



@Component({
  selector: 'app-free-trial-student-whats-template-edit-teacher',
  templateUrl: './free-trial-student-whats-template-edit-teacher.component.html'
})
export class FreeTrialStudentWhatsTemplateEditTeacherComponent extends AbstractEditController<FreeTrialStudentWhatsTemplateDto, FreeTrialStudentWhatsTemplateCriteria, FreeTrialStudentWhatsTemplateService>   implements OnInit {






    constructor( private freeTrialStudentWhatsTemplateService: FreeTrialStudentWhatsTemplateService ) {
        super(freeTrialStudentWhatsTemplateService);
    }

    ngOnInit(): void {
}


    public setValidation(value : boolean){
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }







}
