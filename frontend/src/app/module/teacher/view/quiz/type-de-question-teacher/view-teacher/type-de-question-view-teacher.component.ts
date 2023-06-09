import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {TypeDeQuestionService} from 'src/app/controller/service/TypeDeQuestion.service';
import {TypeDeQuestionDto} from 'src/app/controller/model/TypeDeQuestion.model';
import {TypeDeQuestionCriteria} from 'src/app/controller/criteria/TypeDeQuestionCriteria.model';

@Component({
  selector: 'app-type-de-question-view-teacher',
  templateUrl: './type-de-question-view-teacher.component.html'
})
export class TypeDeQuestionViewTeacherComponent extends AbstractViewController<TypeDeQuestionDto, TypeDeQuestionCriteria, TypeDeQuestionService> implements OnInit {


    constructor(private typeDeQuestionService: TypeDeQuestionService){
        super(typeDeQuestionService);
    }

    ngOnInit(): void {
    }




}
