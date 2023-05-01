
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { WorkloadBonusProfListTeacherComponent } from './workload-bonus-prof-teacher/list-teacher/workload-bonus-prof-list-teacher.component';
import { SalaryListTeacherComponent } from './salary-teacher/list-teacher/salary-list-teacher.component';
import { WorkloadBonusListTeacherComponent } from './workload-bonus-teacher/list-teacher/workload-bonus-list-teacher.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'workload-bonus-prof',
                            children: [
                                {
                                    path: 'list',
                                    component: WorkloadBonusProfListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'salary',
                            children: [
                                {
                                    path: 'list',
                                    component: SalaryListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'workload-bonus',
                            children: [
                                {
                                    path: 'list',
                                    component: WorkloadBonusListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class SalaryTeacherRoutingModule { }
