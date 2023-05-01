import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {FonctionService} from 'src/app/controller/service/Fonction.service';
import {FonctionDto} from 'src/app/controller/model/Fonction.model';
import {FonctionCriteria} from 'src/app/controller/criteria/FonctionCriteria.model';

@Component({
  selector: 'app-fonction-view-student',
  templateUrl: './fonction-view-student.component.html'
})
export class FonctionViewStudentComponent extends AbstractViewController<FonctionDto, FonctionCriteria, FonctionService> implements OnInit {


    constructor(private fonctionService: FonctionService){
        super(fonctionService);
    }

    ngOnInit(): void {
    }




}
