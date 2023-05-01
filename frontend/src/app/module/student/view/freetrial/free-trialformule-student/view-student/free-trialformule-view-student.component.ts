import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {FreeTrialformuleService} from 'src/app/controller/service/FreeTrialformule.service';
import {FreeTrialformuleDto} from 'src/app/controller/model/FreeTrialformule.model';
import {FreeTrialformuleCriteria} from 'src/app/controller/criteria/FreeTrialformuleCriteria.model';

import {InscriptionDto} from 'src/app/controller/model/Inscription.model';
import {InscriptionService} from 'src/app/controller/service/Inscription.service';
@Component({
  selector: 'app-free-trialformule-view-student',
  templateUrl: './free-trialformule-view-student.component.html'
})
export class FreeTrialformuleViewStudentComponent extends AbstractViewController<FreeTrialformuleDto, FreeTrialformuleCriteria, FreeTrialformuleService> implements OnInit {


    constructor(private freeTrialformuleService: FreeTrialformuleService, private inscriptionService: InscriptionService){
        super(freeTrialformuleService);
    }

    ngOnInit(): void {
        this.inscription = new InscriptionDto();
        this.inscriptionService.findAll().subscribe((data) => this.inscriptions = data);
    }


    get inscription(): InscriptionDto {
       return this.inscriptionService.item;
    }
    set inscription(value: InscriptionDto) {
        this.inscriptionService.item = value;
    }
    get inscriptions():Array<InscriptionDto> {
       return this.inscriptionService.items;
    }
    set inscriptions(value: Array<InscriptionDto>) {
        this.inscriptionService.items = value;
    }


}
