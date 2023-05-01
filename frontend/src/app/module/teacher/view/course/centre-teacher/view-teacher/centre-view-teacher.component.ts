import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {CentreService} from 'src/app/controller/service/Centre.service';
import {CentreDto} from 'src/app/controller/model/Centre.model';
import {CentreCriteria} from 'src/app/controller/criteria/CentreCriteria.model';

import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {EtudiantService} from 'src/app/controller/service/Etudiant.service';
import {ParcoursDto} from 'src/app/controller/model/Parcours.model';
import {ParcoursService} from 'src/app/controller/service/Parcours.service';
import {CoursDto} from 'src/app/controller/model/Cours.model';
import {CoursService} from 'src/app/controller/service/Cours.service';
@Component({
  selector: 'app-centre-view-teacher',
  templateUrl: './centre-view-teacher.component.html'
})
export class CentreViewTeacherComponent extends AbstractViewController<CentreDto, CentreCriteria, CentreService> implements OnInit {

    parcourss = new ParcoursDto();
    parcoursss: Array<ParcoursDto> = [];

    constructor(private centreService: CentreService, private parcoursService: ParcoursService){
        super(centreService);
    }

    ngOnInit(): void {
    }




}
