
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { ReclamationEtudiantListStudentComponent } from './reclamation-etudiant-student/list-student/reclamation-etudiant-list-student.component';
import { RecommendTeacherListStudentComponent } from './recommend-teacher-student/list-student/recommend-teacher-list-student.component';
import { ReclamationProfListStudentComponent } from './reclamation-prof-student/list-student/reclamation-prof-list-student.component';
import { TypeReclamationProfListStudentComponent } from './type-reclamation-prof-student/list-student/type-reclamation-prof-list-student.component';
import { TypeReclamationEtudiantListStudentComponent } from './type-reclamation-etudiant-student/list-student/type-reclamation-etudiant-list-student.component';
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
                                    component: ReclamationEtudiantListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'recommend-teacher',
                            children: [
                                {
                                    path: 'list',
                                    component: RecommendTeacherListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'reclamation-prof',
                            children: [
                                {
                                    path: 'list',
                                    component: ReclamationProfListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'type-reclamation-prof',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeReclamationProfListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'type-reclamation-etudiant',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeReclamationEtudiantListStudentComponent ,
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
export class Recom-reclaStudentRoutingModule { }
