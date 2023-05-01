import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {SkillService} from 'src/app/controller/service/Skill.service';
import {SkillDto} from 'src/app/controller/model/Skill.model';
import {SkillCriteria} from 'src/app/controller/criteria/SkillCriteria.model';

@Component({
  selector: 'app-skill-view-student',
  templateUrl: './skill-view-student.component.html'
})
export class SkillViewStudentComponent extends AbstractViewController<SkillDto, SkillCriteria, SkillService> implements OnInit {


    constructor(private skillService: SkillService){
        super(skillService);
    }

    ngOnInit(): void {
    }




}
