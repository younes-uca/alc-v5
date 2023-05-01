import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {FaqTypeService} from 'src/app/controller/service/FaqType.service';
import {FaqTypeDto} from 'src/app/controller/model/FaqType.model';
import {FaqTypeCriteria} from 'src/app/controller/criteria/FaqTypeCriteria.model';

@Component({
  selector: 'app-faq-type-view-teacher',
  templateUrl: './faq-type-view-teacher.component.html'
})
export class FaqTypeViewTeacherComponent extends AbstractViewController<FaqTypeDto, FaqTypeCriteria, FaqTypeService> implements OnInit {


    constructor(private faqTypeService: FaqTypeService){
        super(faqTypeService);
    }

    ngOnInit(): void {
    }




}
