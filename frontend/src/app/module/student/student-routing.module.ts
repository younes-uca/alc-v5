
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';

import { LoginStudentComponent } from './login-student/login-student.component';
import { RegisterStudentComponent } from './register-student/register-student.component';

@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [
                        {
                            path: 'login',
                            children: [
                                {
                                    path: '',
                                    component: LoginStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'register',
                            children: [
                                {
                                    path: '',
                                    component: RegisterStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {

                            path: 'quiz',
                            loadChildren: () => import('./view/quiz/quiz-student-routing.module').then(x=>x.QuizStudentRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'recom-recla',
                            loadChildren: () => import('./view/recom-recla/recom-recla-student-routing.module').then(x=>x.Recom-reclaStudentRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'faq',
                            loadChildren: () => import('./view/faq/faq-student-routing.module').then(x=>x.FaqStudentRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'common',
                            loadChildren: () => import('./view/common/common-student-routing.module').then(x=>x.CommonStudentRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'alc',
                            loadChildren: () => import('./view/alc/alc-student-routing.module').then(x=>x.AlcStudentRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'inscription',
                            loadChildren: () => import('./view/inscription/inscription-student-routing.module').then(x=>x.InscriptionStudentRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'course',
                            loadChildren: () => import('./view/course/course-student-routing.module').then(x=>x.CourseStudentRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'freetrial',
                            loadChildren: () => import('./view/freetrial/freetrial-student-routing.module').then(x=>x.FreetrialStudentRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'learning',
                            loadChildren: () => import('./view/learning/learning-student-routing.module').then(x=>x.LearningStudentRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'homework',
                            loadChildren: () => import('./view/homework/homework-student-routing.module').then(x=>x.HomeworkStudentRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'prof',
                            loadChildren: () => import('./view/prof/prof-student-routing.module').then(x=>x.ProfStudentRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'salary',
                            loadChildren: () => import('./view/salary/salary-student-routing.module').then(x=>x.SalaryStudentRoutingModule),
                            canActivate: [AuthGuard],
                        },
                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class StudentRoutingModule { }
