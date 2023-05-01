
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { ParcoursListStudentComponent } from './parcours-student/list-student/parcours-list-student.component';
import { CoursListStudentComponent } from './cours-student/list-student/cours-list-student.component';
import { EtatCoursListStudentComponent } from './etat-cours-student/list-student/etat-cours-list-student.component';
import { VocabularyListStudentComponent } from './vocabulary-student/list-student/vocabulary-list-student.component';
import { SuperCategorieSectionListStudentComponent } from './super-categorie-section-student/list-student/super-categorie-section-list-student.component';
import { CategorieSectionListStudentComponent } from './categorie-section-student/list-student/categorie-section-list-student.component';
import { CentreListStudentComponent } from './centre-student/list-student/centre-list-student.component';
import { SectionListStudentComponent } from './section-student/list-student/section-list-student.component';
import { VocabularyQuizListStudentComponent } from './vocabulary-quiz-student/list-student/vocabulary-quiz-list-student.component';
import { SectionItemListStudentComponent } from './section-item-student/list-student/section-item-list-student.component';
import { LevelTestConfigurationListStudentComponent } from './level-test-configuration-student/list-student/level-test-configuration-list-student.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'parcours',
                            children: [
                                {
                                    path: 'list',
                                    component: ParcoursListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'cours',
                            children: [
                                {
                                    path: 'list',
                                    component: CoursListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etat-cours',
                            children: [
                                {
                                    path: 'list',
                                    component: EtatCoursListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'vocabulary',
                            children: [
                                {
                                    path: 'list',
                                    component: VocabularyListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'super-categorie-section',
                            children: [
                                {
                                    path: 'list',
                                    component: SuperCategorieSectionListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'categorie-section',
                            children: [
                                {
                                    path: 'list',
                                    component: CategorieSectionListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'centre',
                            children: [
                                {
                                    path: 'list',
                                    component: CentreListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'section',
                            children: [
                                {
                                    path: 'list',
                                    component: SectionListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'vocabulary-quiz',
                            children: [
                                {
                                    path: 'list',
                                    component: VocabularyQuizListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'section-item',
                            children: [
                                {
                                    path: 'list',
                                    component: SectionItemListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'level-test-configuration',
                            children: [
                                {
                                    path: 'list',
                                    component: LevelTestConfigurationListStudentComponent ,
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
export class CourseStudentRoutingModule { }
