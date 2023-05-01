
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { QuestionListTeacherComponent } from './question-teacher/list-teacher/question-list-teacher.component';
import { ReponseEtudiantListTeacherComponent } from './reponse-etudiant-teacher/list-teacher/reponse-etudiant-list-teacher.component';
import { QuizListTeacherComponent } from './quiz-teacher/list-teacher/quiz-list-teacher.component';
import { TypeDeQuestionListTeacherComponent } from './type-de-question-teacher/list-teacher/type-de-question-list-teacher.component';
import { ReponseListTeacherComponent } from './reponse-teacher/list-teacher/reponse-list-teacher.component';
import { ClassRoomListTeacherComponent } from './class-room-teacher/list-teacher/class-room-list-teacher.component';
import { EtatReponseListTeacherComponent } from './etat-reponse-teacher/list-teacher/etat-reponse-list-teacher.component';
import { QuizEtudiantListTeacherComponent } from './quiz-etudiant-teacher/list-teacher/quiz-etudiant-list-teacher.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'question',
                            children: [
                                {
                                    path: 'list',
                                    component: QuestionListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'reponse-etudiant',
                            children: [
                                {
                                    path: 'list',
                                    component: ReponseEtudiantListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'quiz',
                            children: [
                                {
                                    path: 'list',
                                    component: QuizListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'type-de-question',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeDeQuestionListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'reponse',
                            children: [
                                {
                                    path: 'list',
                                    component: ReponseListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'class-room',
                            children: [
                                {
                                    path: 'list',
                                    component: ClassRoomListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etat-reponse',
                            children: [
                                {
                                    path: 'list',
                                    component: EtatReponseListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'quiz-etudiant',
                            children: [
                                {
                                    path: 'list',
                                    component: QuizEtudiantListTeacherComponent ,
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
export class QuizTeacherRoutingModule { }
