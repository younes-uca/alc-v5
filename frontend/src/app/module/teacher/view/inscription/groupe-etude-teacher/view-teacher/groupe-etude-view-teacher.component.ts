import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {GroupeEtudeService} from 'src/app/controller/service/GroupeEtude.service';
import {GroupeEtudeDto} from 'src/app/controller/model/GroupeEtude.model';
import {GroupeEtudeCriteria} from 'src/app/controller/criteria/GroupeEtudeCriteria.model';

@Component({
  selector: 'app-groupe-etude-view-teacher',
  templateUrl: './groupe-etude-view-teacher.component.html'
})
export class GroupeEtudeViewTeacherComponent extends AbstractViewController<GroupeEtudeDto, GroupeEtudeCriteria, GroupeEtudeService> implements OnInit {


    constructor(private groupeEtudeService: GroupeEtudeService){
        super(groupeEtudeService);
    }

    ngOnInit(): void {
    }




}
