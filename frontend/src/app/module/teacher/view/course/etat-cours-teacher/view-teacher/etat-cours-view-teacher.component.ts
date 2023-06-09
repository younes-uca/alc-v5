import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {EtatCoursService} from 'src/app/controller/service/EtatCours.service';
import {EtatCoursDto} from 'src/app/controller/model/EtatCours.model';
import {EtatCoursCriteria} from 'src/app/controller/criteria/EtatCoursCriteria.model';

@Component({
  selector: 'app-etat-cours-view-teacher',
  templateUrl: './etat-cours-view-teacher.component.html'
})
export class EtatCoursViewTeacherComponent extends AbstractViewController<EtatCoursDto, EtatCoursCriteria, EtatCoursService> implements OnInit {


    constructor(private etatCoursService: EtatCoursService){
        super(etatCoursService);
    }

    ngOnInit(): void {
    }




}
