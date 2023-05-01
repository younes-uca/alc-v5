import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {PriceService} from 'src/app/controller/service/Price.service';
import {PriceDto} from 'src/app/controller/model/Price.model';
import {PriceCriteria} from 'src/app/controller/criteria/PriceCriteria.model';
@Component({
  selector: 'app-price-create-student',
  templateUrl: './price-create-student.component.html'
})
export class PriceCreateStudentComponent extends AbstractCreateController<PriceDto, PriceCriteria, PriceService>  implements OnInit {



   private _validPriceLib = true;

    constructor( private priceService: PriceService ) {
        super(priceService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validPriceLib = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validatePriceLib();
    }

    public validatePriceLib(){
        if (this.stringUtilService.isEmpty(this.item.lib)) {
        this.errorMessages.push('Lib non valide');
        this.validPriceLib = false;
        } else {
            this.validPriceLib = true;
        }
    }






    get validPriceLib(): boolean {
        return this._validPriceLib;
    }

    set validPriceLib(value: boolean) {
         this._validPriceLib = value;
    }



}
