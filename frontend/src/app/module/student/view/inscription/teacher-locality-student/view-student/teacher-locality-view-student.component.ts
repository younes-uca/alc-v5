import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {TeacherLocalityService} from 'src/app/controller/service/TeacherLocality.service';
import {TeacherLocalityDto} from 'src/app/controller/model/TeacherLocality.model';
import {TeacherLocalityCriteria} from 'src/app/controller/criteria/TeacherLocalityCriteria.model';

@Component({
  selector: 'app-teacher-locality-view-student',
  templateUrl: './teacher-locality-view-student.component.html'
})
export class TeacherLocalityViewStudentComponent extends AbstractViewController<TeacherLocalityDto, TeacherLocalityCriteria, TeacherLocalityService> implements OnInit {


    constructor(private teacherLocalityService: TeacherLocalityService){
        super(teacherLocalityService);
    }

    ngOnInit(): void {
    }




}
