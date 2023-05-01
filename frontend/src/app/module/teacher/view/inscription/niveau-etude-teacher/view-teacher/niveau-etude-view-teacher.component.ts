import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {NiveauEtudeService} from 'src/app/controller/service/NiveauEtude.service';
import {NiveauEtudeDto} from 'src/app/controller/model/NiveauEtude.model';
import {NiveauEtudeCriteria} from 'src/app/controller/criteria/NiveauEtudeCriteria.model';

@Component({
  selector: 'app-niveau-etude-view-teacher',
  templateUrl: './niveau-etude-view-teacher.component.html'
})
export class NiveauEtudeViewTeacherComponent extends AbstractViewController<NiveauEtudeDto, NiveauEtudeCriteria, NiveauEtudeService> implements OnInit {


    constructor(private niveauEtudeService: NiveauEtudeService){
        super(niveauEtudeService);
    }

    ngOnInit(): void {
    }




}
