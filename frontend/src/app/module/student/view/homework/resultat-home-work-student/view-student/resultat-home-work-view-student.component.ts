import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {ResultatHomeWorkService} from 'src/app/controller/service/ResultatHomeWork.service';
import {ResultatHomeWorkDto} from 'src/app/controller/model/ResultatHomeWork.model';
import {ResultatHomeWorkCriteria} from 'src/app/controller/criteria/ResultatHomeWorkCriteria.model';

@Component({
  selector: 'app-resultat-home-work-view-student',
  templateUrl: './resultat-home-work-view-student.component.html'
})
export class ResultatHomeWorkViewStudentComponent extends AbstractViewController<ResultatHomeWorkDto, ResultatHomeWorkCriteria, ResultatHomeWorkService> implements OnInit {


    constructor(private resultatHomeWorkService: ResultatHomeWorkService){
        super(resultatHomeWorkService);
    }

    ngOnInit(): void {
    }




}
