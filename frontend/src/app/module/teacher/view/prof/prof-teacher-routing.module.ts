
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { CalendrierProfListTeacherComponent } from './calendrier-prof-teacher/list-teacher/calendrier-prof-list-teacher.component';
import { TypeTeacherListTeacherComponent } from './type-teacher-teacher/list-teacher/type-teacher-list-teacher.component';
import { TrancheHoraireProfListTeacherComponent } from './tranche-horaire-prof-teacher/list-teacher/tranche-horaire-prof-list-teacher.component';
import { ProfListTeacherComponent } from './prof-teacher/list-teacher/prof-list-teacher.component';
import { ScheduleProfListTeacherComponent } from './schedule-prof-teacher/list-teacher/schedule-prof-list-teacher.component';
import { ClassAverageBonusProfListTeacherComponent } from './class-average-bonus-prof-teacher/list-teacher/class-average-bonus-prof-list-teacher.component';
import { CategorieProfListTeacherComponent } from './categorie-prof-teacher/list-teacher/categorie-prof-list-teacher.component';
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
                                    component: CalendrierProfListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'type-teacher',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeTeacherListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'tranche-horaire-prof',
                            children: [
                                {
                                    path: 'list',
                                    component: TrancheHoraireProfListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'prof',
                            children: [
                                {
                                    path: 'list',
                                    component: ProfListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'schedule-prof',
                            children: [
                                {
                                    path: 'list',
                                    component: ScheduleProfListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'class-average-bonus-prof',
                            children: [
                                {
                                    path: 'list',
                                    component: ClassAverageBonusProfListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'categorie-prof',
                            children: [
                                {
                                    path: 'list',
                                    component: CategorieProfListTeacherComponent ,
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
export class ProfTeacherRoutingModule { }
