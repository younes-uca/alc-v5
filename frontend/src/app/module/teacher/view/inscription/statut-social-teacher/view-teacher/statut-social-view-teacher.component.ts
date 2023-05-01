import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {StatutSocialService} from 'src/app/controller/service/StatutSocial.service';
import {StatutSocialDto} from 'src/app/controller/model/StatutSocial.model';
import {StatutSocialCriteria} from 'src/app/controller/criteria/StatutSocialCriteria.model';

@Component({
  selector: 'app-statut-social-view-teacher',
  templateUrl: './statut-social-view-teacher.component.html'
})
export class StatutSocialViewTeacherComponent extends AbstractViewController<StatutSocialDto, StatutSocialCriteria, StatutSocialService> implements OnInit {


    constructor(private statutSocialService: StatutSocialService){
        super(statutSocialService);
    }

    ngOnInit(): void {
    }




}
