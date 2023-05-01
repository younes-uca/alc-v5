
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { ResultatHomeWorkListStudentComponent } from './resultat-home-work-student/list-student/resultat-home-work-list-student.component';
import { HomeWorkListStudentComponent } from './home-work-student/list-student/home-work-list-student.component';
import { HoweWorkQSTReponseListStudentComponent } from './howe-work-q-s-t-reponse-student/list-student/howe-work-q-s-t-reponse-list-student.component';
import { ReponseEtudiantHomeWorkListStudentComponent } from './reponse-etudiant-home-work-student/list-student/reponse-etudiant-home-work-list-student.component';
import { HomeWorkEtudiantListStudentComponent } from './home-work-etudiant-student/list-student/home-work-etudiant-list-student.component';
import { TypeHomeWorkListStudentComponent } from './type-home-work-student/list-student/type-home-work-list-student.component';
import { HomeWorkQuestionListStudentComponent } from './home-work-question-student/list-student/home-work-question-list-student.component';
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
                                    component: ResultatHomeWorkListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'home-work',
                            children: [
                                {
                                    path: 'list',
                                    component: HomeWorkListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'howe-work-q-s-t-reponse',
                            children: [
                                {
                                    path: 'list',
                                    component: HoweWorkQSTReponseListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'reponse-etudiant-home-work',
                            children: [
                                {
                                    path: 'list',
                                    component: ReponseEtudiantHomeWorkListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'home-work-etudiant',
                            children: [
                                {
                                    path: 'list',
                                    component: HomeWorkEtudiantListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'type-home-work',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeHomeWorkListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'home-work-question',
                            children: [
                                {
                                    path: 'list',
                                    component: HomeWorkQuestionListStudentComponent ,
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
export class HomeworkStudentRoutingModule { }
