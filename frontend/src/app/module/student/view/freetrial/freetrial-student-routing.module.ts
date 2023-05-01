
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { FreeTrialConfigurationListStudentComponent } from './free-trial-configuration-student/list-student/free-trial-configuration-list-student.component';
import { StatutFreeTrialListStudentComponent } from './statut-free-trial-student/list-student/statut-free-trial-list-student.component';
import { FreeTrialListStudentComponent } from './free-trial-student/list-student/free-trial-list-student.component';
import { FreeTrialStudentWhatsTemplateListStudentComponent } from './free-trial-student-whats-template-student/list-student/free-trial-student-whats-template-list-student.component';
import { FreeTrialTeacherEmailTemplateListStudentComponent } from './free-trial-teacher-email-template-student/list-student/free-trial-teacher-email-template-list-student.component';
import { ServicesListStudentComponent } from './services-student/list-student/services-list-student.component';
import { FreeTrialformuleListStudentComponent } from './free-trialformule-student/list-student/free-trialformule-list-student.component';
import { FreeTrialTeacherWhatsTemplateListStudentComponent } from './free-trial-teacher-whats-template-student/list-student/free-trial-teacher-whats-template-list-student.component';
import { FreeTrialStudentEmailTemplateListStudentComponent } from './free-trial-student-email-template-student/list-student/free-trial-student-email-template-list-student.component';
import { FreeTrialDetailListStudentComponent } from './free-trial-detail-student/list-student/free-trial-detail-list-student.component';
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
                                    component: FreeTrialConfigurationListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'statut-free-trial',
                            children: [
                                {
                                    path: 'list',
                                    component: StatutFreeTrialListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'free-trial',
                            children: [
                                {
                                    path: 'list',
                                    component: FreeTrialListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'free-trial-student-whats-template',
                            children: [
                                {
                                    path: 'list',
                                    component: FreeTrialStudentWhatsTemplateListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'free-trial-teacher-email-template',
                            children: [
                                {
                                    path: 'list',
                                    component: FreeTrialTeacherEmailTemplateListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'services',
                            children: [
                                {
                                    path: 'list',
                                    component: ServicesListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'free-trialformule',
                            children: [
                                {
                                    path: 'list',
                                    component: FreeTrialformuleListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'free-trial-teacher-whats-template',
                            children: [
                                {
                                    path: 'list',
                                    component: FreeTrialTeacherWhatsTemplateListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'free-trial-student-email-template',
                            children: [
                                {
                                    path: 'list',
                                    component: FreeTrialStudentEmailTemplateListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'free-trial-detail',
                            children: [
                                {
                                    path: 'list',
                                    component: FreeTrialDetailListStudentComponent ,
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
export class FreetrialStudentRoutingModule { }
