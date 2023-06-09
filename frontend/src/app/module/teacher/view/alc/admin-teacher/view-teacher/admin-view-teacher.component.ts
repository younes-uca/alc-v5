import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {AdminService} from 'src/app/controller/service/Admin.service';
import {AdminDto} from 'src/app/controller/model/Admin.model';
import {AdminCriteria} from 'src/app/controller/criteria/AdminCriteria.model';

@Component({
  selector: 'app-admin-view-teacher',
  templateUrl: './admin-view-teacher.component.html'
})
export class AdminViewTeacherComponent extends AbstractViewController<AdminDto, AdminCriteria, AdminService> implements OnInit {


    constructor(private adminService: AdminService){
        super(adminService);
    }

    ngOnInit(): void {
    }




}
