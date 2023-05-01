
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { CalendrierProfListStudentComponent } from './calendrier-prof-student/list-student/calendrier-prof-list-student.component';
import { TypeTeacherListStudentComponent } from './type-teacher-student/list-student/type-teacher-list-student.component';
import { TrancheHoraireProfListStudentComponent } from './tranche-horaire-prof-student/list-student/tranche-horaire-prof-list-student.component';
import { ProfListStudentComponent } from './prof-student/list-student/prof-list-student.component';
import { ScheduleProfListStudentComponent } from './schedule-prof-student/list-student/schedule-prof-list-student.component';
import { ClassAverageBonusProfListStudentComponent } from './class-average-bonus-prof-student/list-student/class-average-bonus-prof-list-student.component';
import { CategorieProfListStudentComponent } from './categorie-prof-student/list-student/categorie-prof-list-student.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'calendrier-prof',
                            children: [
                                {
                                    path: 'list',
                                    component: CalendrierProfListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'type-teacher',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeTeacherListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'tranche-horaire-prof',
                            children: [
                                {
                                    path: 'list',
                                    component: TrancheHoraireProfListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'prof',
                            children: [
                                {
                                    path: 'list',
                                    component: ProfListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'schedule-prof',
                            children: [
                                {
                                    path: 'list',
                                    component: ScheduleProfListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'class-average-bonus-prof',
                            children: [
                                {
                                    path: 'list',
                                    component: ClassAverageBonusProfListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'categorie-prof',
                            children: [
                                {
                                    path: 'list',
                                    component: CategorieProfListStudentComponent ,
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
export class ProfStudentRoutingModule { }
