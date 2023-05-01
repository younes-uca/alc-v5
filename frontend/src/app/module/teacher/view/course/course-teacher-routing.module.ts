
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { ParcoursListTeacherComponent } from './parcours-teacher/list-teacher/parcours-list-teacher.component';
import { CoursListTeacherComponent } from './cours-teacher/list-teacher/cours-list-teacher.component';
import { EtatCoursListTeacherComponent } from './etat-cours-teacher/list-teacher/etat-cours-list-teacher.component';
import { VocabularyListTeacherComponent } from './vocabulary-teacher/list-teacher/vocabulary-list-teacher.component';
import { SuperCategorieSectionListTeacherComponent } from './super-categorie-section-teacher/list-teacher/super-categorie-section-list-teacher.component';
import { CategorieSectionListTeacherComponent } from './categorie-section-teacher/list-teacher/categorie-section-list-teacher.component';
import { CentreListTeacherComponent } from './centre-teacher/list-teacher/centre-list-teacher.component';
import { SectionListTeacherComponent } from './section-teacher/list-teacher/section-list-teacher.component';
import { VocabularyQuizListTeacherComponent } from './vocabulary-quiz-teacher/list-teacher/vocabulary-quiz-list-teacher.component';
import { SectionItemListTeacherComponent } from './section-item-teacher/list-teacher/section-item-list-teacher.component';
import { LevelTestConfigurationListTeacherComponent } from './level-test-configuration-teacher/list-teacher/level-test-configuration-list-teacher.component';
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
                                    component: ParcoursListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'cours',
                            children: [
                                {
                                    path: 'list',
                                    component: CoursListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etat-cours',
                            children: [
                                {
                                    path: 'list',
                                    component: EtatCoursListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'vocabulary',
                            children: [
                                {
                                    path: 'list',
                                    component: VocabularyListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'super-categorie-section',
                            children: [
                                {
                                    path: 'list',
                                    component: SuperCategorieSectionListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'categorie-section',
                            children: [
                                {
                                    path: 'list',
                                    component: CategorieSectionListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'centre',
                            children: [
                                {
                                    path: 'list',
                                    component: CentreListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'section',
                            children: [
                                {
                                    path: 'list',
                                    component: SectionListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'vocabulary-quiz',
                            children: [
                                {
                                    path: 'list',
                                    component: VocabularyQuizListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'section-item',
                            children: [
                                {
                                    path: 'list',
                                    component: SectionItemListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'level-test-configuration',
                            children: [
                                {
                                    path: 'list',
                                    component: LevelTestConfigurationListTeacherComponent ,
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
export class CourseTeacherRoutingModule { }
