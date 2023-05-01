
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';

import { LoginTeacherComponent } from './login-teacher/login-teacher.component';
import { RegisterTeacherComponent } from './register-teacher/register-teacher.component';

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
                                    component: LoginTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'register',
                            children: [
                                {
                                    path: '',
                                    component: RegisterTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {

                            path: 'quiz',
                            loadChildren: () => import('./view/quiz/quiz-teacher-routing.module').then(x=>x.QuizTeacherRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'recom-recla',
                            loadChildren: () => import('./view/recom-recla/recom-recla-teacher-routing.module').then(x=>x.Recom-reclaTeacherRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'faq',
                            loadChildren: () => import('./view/faq/faq-teacher-routing.module').then(x=>x.FaqTeacherRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'common',
                            loadChildren: () => import('./view/common/common-teacher-routing.module').then(x=>x.CommonTeacherRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'alc',
                            loadChildren: () => import('./view/alc/alc-teacher-routing.module').then(x=>x.AlcTeacherRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'inscription',
                            loadChildren: () => import('./view/inscription/inscription-teacher-routing.module').then(x=>x.InscriptionTeacherRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'course',
                            loadChildren: () => import('./view/course/course-teacher-routing.module').then(x=>x.CourseTeacherRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'freetrial',
                            loadChildren: () => import('./view/freetrial/freetrial-teacher-routing.module').then(x=>x.FreetrialTeacherRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'learning',
                            loadChildren: () => import('./view/learning/learning-teacher-routing.module').then(x=>x.LearningTeacherRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'homework',
                            loadChildren: () => import('./view/homework/homework-teacher-routing.module').then(x=>x.HomeworkTeacherRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'prof',
                            loadChildren: () => import('./view/prof/prof-teacher-routing.module').then(x=>x.ProfTeacherRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'salary',
                            loadChildren: () => import('./view/salary/salary-teacher-routing.module').then(x=>x.SalaryTeacherRoutingModule),
                            canActivate: [AuthGuard],
                        },
                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class TeacherRoutingModule { }
