
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { ResultatHomeWorkListTeacherComponent } from './resultat-home-work-teacher/list-teacher/resultat-home-work-list-teacher.component';
import { HomeWorkListTeacherComponent } from './home-work-teacher/list-teacher/home-work-list-teacher.component';
import { HoweWorkQSTReponseListTeacherComponent } from './howe-work-q-s-t-reponse-teacher/list-teacher/howe-work-q-s-t-reponse-list-teacher.component';
import { ReponseEtudiantHomeWorkListTeacherComponent } from './reponse-etudiant-home-work-teacher/list-teacher/reponse-etudiant-home-work-list-teacher.component';
import { HomeWorkEtudiantListTeacherComponent } from './home-work-etudiant-teacher/list-teacher/home-work-etudiant-list-teacher.component';
import { TypeHomeWorkListTeacherComponent } from './type-home-work-teacher/list-teacher/type-home-work-list-teacher.component';
import { HomeWorkQuestionListTeacherComponent } from './home-work-question-teacher/list-teacher/home-work-question-list-teacher.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'resultat-home-work',
                            children: [
                                {
                                    path: 'list',
                                    component: ResultatHomeWorkListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'home-work',
                            children: [
                                {
                                    path: 'list',
                                    component: HomeWorkListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'howe-work-q-s-t-reponse',
                            children: [
                                {
                                    path: 'list',
                                    component: HoweWorkQSTReponseListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'reponse-etudiant-home-work',
                            children: [
                                {
                                    path: 'list',
                                    component: ReponseEtudiantHomeWorkListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'home-work-etudiant',
                            children: [
                                {
                                    path: 'list',
                                    component: HomeWorkEtudiantListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'type-home-work',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeHomeWorkListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'home-work-question',
                            children: [
                                {
                                    path: 'list',
                                    component: HomeWorkQuestionListTeacherComponent ,
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
export class HomeworkTeacherRoutingModule { }
