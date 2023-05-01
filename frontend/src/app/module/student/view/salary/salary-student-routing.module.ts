
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { WorkloadBonusProfListStudentComponent } from './workload-bonus-prof-student/list-student/workload-bonus-prof-list-student.component';
import { SalaryListStudentComponent } from './salary-student/list-student/salary-list-student.component';
import { WorkloadBonusListStudentComponent } from './workload-bonus-student/list-student/workload-bonus-list-student.component';
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
                                    component: WorkloadBonusProfListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'salary',
                            children: [
                                {
                                    path: 'list',
                                    component: SalaryListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'workload-bonus',
                            children: [
                                {
                                    path: 'list',
                                    component: WorkloadBonusListStudentComponent ,
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
export class SalaryStudentRoutingModule { }
