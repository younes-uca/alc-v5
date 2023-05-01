
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { QuestionListStudentComponent } from './question-student/list-student/question-list-student.component';
import { ReponseEtudiantListStudentComponent } from './reponse-etudiant-student/list-student/reponse-etudiant-list-student.component';
import { QuizListStudentComponent } from './quiz-student/list-student/quiz-list-student.component';
import { TypeDeQuestionListStudentComponent } from './type-de-question-student/list-student/type-de-question-list-student.component';
import { ReponseListStudentComponent } from './reponse-student/list-student/reponse-list-student.component';
import { ClassRoomListStudentComponent } from './class-room-student/list-student/class-room-list-student.component';
import { EtatReponseListStudentComponent } from './etat-reponse-student/list-student/etat-reponse-list-student.component';
import { QuizEtudiantListStudentComponent } from './quiz-etudiant-student/list-student/quiz-etudiant-list-student.component';
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
                                    component: QuestionListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'reponse-etudiant',
                            children: [
                                {
                                    path: 'list',
                                    component: ReponseEtudiantListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'quiz',
                            children: [
                                {
                                    path: 'list',
                                    component: QuizListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'type-de-question',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeDeQuestionListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'reponse',
                            children: [
                                {
                                    path: 'list',
                                    component: ReponseListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'class-room',
                            children: [
                                {
                                    path: 'list',
                                    component: ClassRoomListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etat-reponse',
                            children: [
                                {
                                    path: 'list',
                                    component: EtatReponseListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'quiz-etudiant',
                            children: [
                                {
                                    path: 'list',
                                    component: QuizEtudiantListStudentComponent ,
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
export class QuizStudentRoutingModule { }
