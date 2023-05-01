import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {FreeTrialConfigurationService} from 'src/app/controller/service/FreeTrialConfiguration.service';
import {FreeTrialConfigurationDto} from 'src/app/controller/model/FreeTrialConfiguration.model';
import {FreeTrialConfigurationCriteria} from 'src/app/controller/criteria/FreeTrialConfigurationCriteria.model';



@Component({
  selector: 'app-free-trial-configuration-edit-student',
  templateUrl: './free-trial-configuration-edit-student.component.html'
})
export class FreeTrialConfigurationEditStudentComponent extends AbstractEditController<FreeTrialConfigurationDto, FreeTrialConfigurationCriteria, FreeTrialConfigurationService>   implements OnInit {






    constructor( private freeTrialConfigurationService: FreeTrialConfigurationService ) {
        super(freeTrialConfigurationService);
    }

    ngOnInit(): void {
}
    public prepareEdit() {
        this.item.dateApplicationDebut = this.freeTrialConfigurationService.format(this.item.dateApplicationDebut);
        this.item.dateApplicationFin = this.freeTrialConfigurationService.format(this.item.dateApplicationFin);
    }



    public setValidation(value : boolean){
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }







}
