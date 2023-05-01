import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {PriceService} from 'src/app/controller/service/Price.service';
import {PriceDto} from 'src/app/controller/model/Price.model';
import {PriceCriteria} from 'src/app/controller/criteria/PriceCriteria.model';

@Component({
  selector: 'app-price-view-student',
  templateUrl: './price-view-student.component.html'
})
export class PriceViewStudentComponent extends AbstractViewController<PriceDto, PriceCriteria, PriceService> implements OnInit {


    constructor(private priceService: PriceService){
        super(priceService);
    }

    ngOnInit(): void {
    }




}
