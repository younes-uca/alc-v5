import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {LangueService} from 'src/app/controller/service/Langue.service';
import {LangueDto} from 'src/app/controller/model/Langue.model';
import {LangueCriteria} from 'src/app/controller/criteria/LangueCriteria.model';

@Component({
  selector: 'app-langue-view-teacher',
  templateUrl: './langue-view-teacher.component.html'
})
export class LangueViewTeacherComponent extends AbstractViewController<LangueDto, LangueCriteria, LangueService> implements OnInit {


    constructor(private langueService: LangueService){
        super(langueService);
    }

    ngOnInit(): void {
    }




}
