
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { FaqEtudiantListStudentComponent } from './faq-etudiant-student/list-student/faq-etudiant-list-student.component';
import { FaqTypeListStudentComponent } from './faq-type-student/list-student/faq-type-list-student.component';
import { FaqProfListStudentComponent } from './faq-prof-student/list-student/faq-prof-list-student.component';
import { FaqListStudentComponent } from './faq-student/list-student/faq-list-student.component';
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
                                    component: FaqEtudiantListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'faq-type',
                            children: [
                                {
                                    path: 'list',
                                    component: FaqTypeListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'faq-prof',
                            children: [
                                {
                                    path: 'list',
                                    component: FaqProfListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'faq',
                            children: [
                                {
                                    path: 'list',
                                    component: FaqListStudentComponent ,
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
export class FaqStudentRoutingModule { }
