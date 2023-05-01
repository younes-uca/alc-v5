import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {FreeTrialStudentWhatsTemplateService} from 'src/app/controller/service/FreeTrialStudentWhatsTemplate.service';
import {FreeTrialStudentWhatsTemplateDto} from 'src/app/controller/model/FreeTrialStudentWhatsTemplate.model';
import {FreeTrialStudentWhatsTemplateCriteria} from 'src/app/controller/criteria/FreeTrialStudentWhatsTemplateCriteria.model';
@Component({
  selector: 'app-free-trial-student-whats-template-create-student',
  templateUrl: './free-trial-student-whats-template-create-student.component.html'
})
export class FreeTrialStudentWhatsTemplateCreateStudentComponent extends AbstractCreateController<FreeTrialStudentWhatsTemplateDto, FreeTrialStudentWhatsTemplateCriteria, FreeTrialStudentWhatsTemplateService>  implements OnInit {




    constructor( private freeTrialStudentWhatsTemplateService: FreeTrialStudentWhatsTemplateService ) {
        super(freeTrialStudentWhatsTemplateService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }










}
