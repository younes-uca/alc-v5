import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {EtatInscriptionService} from 'src/app/controller/service/EtatInscription.service';
import {EtatInscriptionDto} from 'src/app/controller/model/EtatInscription.model';
import {EtatInscriptionCriteria} from 'src/app/controller/criteria/EtatInscriptionCriteria.model';

@Component({
  selector: 'app-etat-inscription-view-teacher',
  templateUrl: './etat-inscription-view-teacher.component.html'
})
export class EtatInscriptionViewTeacherComponent extends AbstractViewController<EtatInscriptionDto, EtatInscriptionCriteria, EtatInscriptionService> implements OnInit {


    constructor(private etatInscriptionService: EtatInscriptionService){
        super(etatInscriptionService);
    }

    ngOnInit(): void {
    }




}
