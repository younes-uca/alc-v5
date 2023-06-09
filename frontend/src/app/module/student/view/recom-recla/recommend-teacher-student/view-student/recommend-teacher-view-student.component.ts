import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {RecommendTeacherService} from 'src/app/controller/service/RecommendTeacher.service';
import {RecommendTeacherDto} from 'src/app/controller/model/RecommendTeacher.model';
import {RecommendTeacherCriteria} from 'src/app/controller/criteria/RecommendTeacherCriteria.model';

import {ProfDto} from 'src/app/controller/model/Prof.model';
import {ProfService} from 'src/app/controller/service/Prof.service';
@Component({
  selector: 'app-recommend-teacher-view-student',
  templateUrl: './recommend-teacher-view-student.component.html'
})
export class RecommendTeacherViewStudentComponent extends AbstractViewController<RecommendTeacherDto, RecommendTeacherCriteria, RecommendTeacherService> implements OnInit {


    constructor(private recommendTeacherService: RecommendTeacherService, private profService: ProfService){
        super(recommendTeacherService);
    }

    ngOnInit(): void {
        this.prof = new ProfDto();
        this.profService.findAll().subscribe((data) => this.profs = data);
    }


    get prof(): ProfDto {
       return this.profService.item;
    }
    set prof(value: ProfDto) {
        this.profService.item = value;
    }
    get profs():Array<ProfDto> {
       return this.profService.items;
    }
    set profs(value: Array<ProfDto>) {
        this.profService.items = value;
    }


}
