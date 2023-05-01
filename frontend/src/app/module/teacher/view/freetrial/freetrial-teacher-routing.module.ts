
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { FreeTrialConfigurationListTeacherComponent } from './free-trial-configuration-teacher/list-teacher/free-trial-configuration-list-teacher.component';
import { StatutFreeTrialListTeacherComponent } from './statut-free-trial-teacher/list-teacher/statut-free-trial-list-teacher.component';
import { FreeTrialListTeacherComponent } from './free-trial-teacher/list-teacher/free-trial-list-teacher.component';
import { FreeTrialStudentWhatsTemplateListTeacherComponent } from './free-trial-student-whats-template-teacher/list-teacher/free-trial-student-whats-template-list-teacher.component';
import { FreeTrialTeacherEmailTemplateListTeacherComponent } from './free-trial-teacher-email-template-teacher/list-teacher/free-trial-teacher-email-template-list-teacher.component';
import { ServicesListTeacherComponent } from './services-teacher/list-teacher/services-list-teacher.component';
import { FreeTrialformuleListTeacherComponent } from './free-trialformule-teacher/list-teacher/free-trialformule-list-teacher.component';
import { FreeTrialTeacherWhatsTemplateListTeacherComponent } from './free-trial-teacher-whats-template-teacher/list-teacher/free-trial-teacher-whats-template-list-teacher.component';
import { FreeTrialStudentEmailTemplateListTeacherComponent } from './free-trial-student-email-template-teacher/list-teacher/free-trial-student-email-template-list-teacher.component';
import { FreeTrialDetailListTeacherComponent } from './free-trial-detail-teacher/list-teacher/free-trial-detail-list-teacher.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'free-trial-configuration',
                            children: [
                                {
                                    path: 'list',
                                    component: FreeTrialConfigurationListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'statut-free-trial',
                            children: [
                                {
                                    path: 'list',
                                    component: StatutFreeTrialListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'free-trial',
                            children: [
                                {
                                    path: 'list',
                                    component: FreeTrialListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'free-trial-student-whats-template',
                            children: [
                                {
                                    path: 'list',
                                    component: FreeTrialStudentWhatsTemplateListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'free-trial-teacher-email-template',
                            children: [
                                {
                                    path: 'list',
                                    component: FreeTrialTeacherEmailTemplateListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'services',
                            children: [
                                {
                                    path: 'list',
                                    component: ServicesListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'free-trialformule',
                            children: [
                                {
                                    path: 'list',
                                    component: FreeTrialformuleListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'free-trial-teacher-whats-template',
                            children: [
                                {
                                    path: 'list',
                                    component: FreeTrialTeacherWhatsTemplateListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'free-trial-student-email-template',
                            children: [
                                {
                                    path: 'list',
                                    component: FreeTrialStudentEmailTemplateListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'free-trial-detail',
                            children: [
                                {
                                    path: 'list',
                                    component: FreeTrialDetailListTeacherComponent ,
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
export class FreetrialTeacherRoutingModule { }
