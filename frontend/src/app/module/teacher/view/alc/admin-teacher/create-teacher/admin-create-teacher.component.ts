import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {AdminService} from 'src/app/controller/service/Admin.service';
import {AdminDto} from 'src/app/controller/model/Admin.model';
import {AdminCriteria} from 'src/app/controller/criteria/AdminCriteria.model';
@Component({
  selector: 'app-admin-create-teacher',
  templateUrl: './admin-create-teacher.component.html'
})
export class AdminCreateTeacherComponent extends AbstractCreateController<AdminDto, AdminCriteria, AdminService>  implements OnInit {




    constructor( private adminService: AdminService ) {
        super(adminService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }










}
