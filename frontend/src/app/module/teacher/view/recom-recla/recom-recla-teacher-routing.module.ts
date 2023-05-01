
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { ReclamationEtudiantListTeacherComponent } from './reclamation-etudiant-teacher/list-teacher/reclamation-etudiant-list-teacher.component';
import { RecommendTeacherListTeacherComponent } from './recommend-teacher-teacher/list-teacher/recommend-teacher-list-teacher.component';
import { ReclamationProfListTeacherComponent } from './reclamation-prof-teacher/list-teacher/reclamation-prof-list-teacher.component';
import { TypeReclamationProfListTeacherComponent } from './type-reclamation-prof-teacher/list-teacher/type-reclamation-prof-list-teacher.component';
import { TypeReclamationEtudiantListTeacherComponent } from './type-reclamation-etudiant-teacher/list-teacher/type-reclamation-etudiant-list-teacher.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'reclamation-etudiant',
                            children: [
                                {
                                    path: 'list',
                                    component: ReclamationEtudiantListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'recommend-teacher',
                            children: [
                                {
                                    path: 'list',
                                    component: RecommendTeacherListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'reclamation-prof',
                            children: [
                                {
                                    path: 'list',
                                    component: ReclamationProfListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'type-reclamation-prof',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeReclamationProfListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'type-reclamation-etudiant',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeReclamationEtudiantListTeacherComponent ,
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
export class Recom-reclaTeacherRoutingModule { }
