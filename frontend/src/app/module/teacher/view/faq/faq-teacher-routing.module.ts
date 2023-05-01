
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { FaqEtudiantListTeacherComponent } from './faq-etudiant-teacher/list-teacher/faq-etudiant-list-teacher.component';
import { FaqTypeListTeacherComponent } from './faq-type-teacher/list-teacher/faq-type-list-teacher.component';
import { FaqProfListTeacherComponent } from './faq-prof-teacher/list-teacher/faq-prof-list-teacher.component';
import { FaqListTeacherComponent } from './faq-teacher/list-teacher/faq-list-teacher.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'faq-etudiant',
                            children: [
                                {
                                    path: 'list',
                                    component: FaqEtudiantListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'faq-type',
                            children: [
                                {
                                    path: 'list',
                                    component: FaqTypeListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'faq-prof',
                            children: [
                                {
                                    path: 'list',
                                    component: FaqProfListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'faq',
                            children: [
                                {
                                    path: 'list',
                                    component: FaqListTeacherComponent ,
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
export class FaqTeacherRoutingModule { }
