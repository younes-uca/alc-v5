import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {LangueService} from 'src/app/controller/service/Langue.service';
import {LangueDto} from 'src/app/controller/model/Langue.model';
import {LangueCriteria} from 'src/app/controller/criteria/LangueCriteria.model';

@Component({
  selector: 'app-langue-view-student',
  templateUrl: './langue-view-student.component.html'
})
export class LangueViewStudentComponent extends AbstractViewController<LangueDto, LangueCriteria, LangueService> implements OnInit {


    constructor(private langueService: LangueService){
        super(langueService);
    }

    ngOnInit(): void {
    }




}
