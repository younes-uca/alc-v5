import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {TypeTeacherService} from 'src/app/controller/service/TypeTeacher.service';
import {TypeTeacherDto} from 'src/app/controller/model/TypeTeacher.model';
import {TypeTeacherCriteria} from 'src/app/controller/criteria/TypeTeacherCriteria.model';

@Component({
  selector: 'app-type-teacher-view-student',
  templateUrl: './type-teacher-view-student.component.html'
})
export class TypeTeacherViewStudentComponent extends AbstractViewController<TypeTeacherDto, TypeTeacherCriteria, TypeTeacherService> implements OnInit {


    constructor(private typeTeacherService: TypeTeacherService){
        super(typeTeacherService);
    }

    ngOnInit(): void {
    }




}
