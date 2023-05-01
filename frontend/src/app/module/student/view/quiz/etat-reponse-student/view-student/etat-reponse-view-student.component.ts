import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {EtatReponseService} from 'src/app/controller/service/EtatReponse.service';
import {EtatReponseDto} from 'src/app/controller/model/EtatReponse.model';
import {EtatReponseCriteria} from 'src/app/controller/criteria/EtatReponseCriteria.model';

@Component({
  selector: 'app-etat-reponse-view-student',
  templateUrl: './etat-reponse-view-student.component.html'
})
export class EtatReponseViewStudentComponent extends AbstractViewController<EtatReponseDto, EtatReponseCriteria, EtatReponseService> implements OnInit {


    constructor(private etatReponseService: EtatReponseService){
        super(etatReponseService);
    }

    ngOnInit(): void {
    }




}
