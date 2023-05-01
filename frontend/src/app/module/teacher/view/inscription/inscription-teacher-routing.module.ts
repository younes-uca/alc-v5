
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { NiveauEtudeListTeacherComponent } from './niveau-etude-teacher/list-teacher/niveau-etude-list-teacher.component';
import { PackStudentListTeacherComponent } from './pack-student-teacher/list-teacher/pack-student-list-teacher.component';
import { FonctionListTeacherComponent } from './fonction-teacher/list-teacher/fonction-list-teacher.component';
import { StatutSocialListTeacherComponent } from './statut-social-teacher/list-teacher/statut-social-list-teacher.component';
import { InteretEtudiantListTeacherComponent } from './interet-etudiant-teacher/list-teacher/interet-etudiant-list-teacher.component';
import { EtatEtudiantScheduleListTeacherComponent } from './etat-etudiant-schedule-teacher/list-teacher/etat-etudiant-schedule-list-teacher.component';
import { LangueListTeacherComponent } from './langue-teacher/list-teacher/langue-list-teacher.component';
import { InscriptionListTeacherComponent } from './inscription-teacher/list-teacher/inscription-list-teacher.component';
import { InviteStudentListTeacherComponent } from './invite-student-teacher/list-teacher/invite-student-list-teacher.component';
import { PriceListTeacherComponent } from './price-teacher/list-teacher/price-list-teacher.component';
import { SkillListTeacherComponent } from './skill-teacher/list-teacher/skill-list-teacher.component';
import { PaiementListTeacherComponent } from './paiement-teacher/list-teacher/paiement-list-teacher.component';
import { EtudiantCoursListTeacherComponent } from './etudiant-cours-teacher/list-teacher/etudiant-cours-list-teacher.component';
import { GroupeEtudiantListTeacherComponent } from './groupe-etudiant-teacher/list-teacher/groupe-etudiant-list-teacher.component';
import { DictionaryListTeacherComponent } from './dictionary-teacher/list-teacher/dictionary-list-teacher.component';
import { EtatEtudiantListTeacherComponent } from './etat-etudiant-teacher/list-teacher/etat-etudiant-list-teacher.component';
import { GroupeEtudeListTeacherComponent } from './groupe-etude-teacher/list-teacher/groupe-etude-list-teacher.component';
import { EtudiantReviewListTeacherComponent } from './etudiant-review-teacher/list-teacher/etudiant-review-list-teacher.component';
import { EtudiantListTeacherComponent } from './etudiant-teacher/list-teacher/etudiant-list-teacher.component';
import { ConfirmationTokenListTeacherComponent } from './confirmation-token-teacher/list-teacher/confirmation-token-list-teacher.component';
import { TeacherLocalityListTeacherComponent } from './teacher-locality-teacher/list-teacher/teacher-locality-list-teacher.component';
import { EtatInscriptionListTeacherComponent } from './etat-inscription-teacher/list-teacher/etat-inscription-list-teacher.component';
import { ProfReviewListTeacherComponent } from './prof-review-teacher/list-teacher/prof-review-list-teacher.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'niveau-etude',
                            children: [
                                {
                                    path: 'list',
                                    component: NiveauEtudeListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'pack-student',
                            children: [
                                {
                                    path: 'list',
                                    component: PackStudentListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'fonction',
                            children: [
                                {
                                    path: 'list',
                                    component: FonctionListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'statut-social',
                            children: [
                                {
                                    path: 'list',
                                    component: StatutSocialListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'interet-etudiant',
                            children: [
                                {
                                    path: 'list',
                                    component: InteretEtudiantListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etat-etudiant-schedule',
                            children: [
                                {
                                    path: 'list',
                                    component: EtatEtudiantScheduleListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'langue',
                            children: [
                                {
                                    path: 'list',
                                    component: LangueListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'inscription',
                            children: [
                                {
                                    path: 'list',
                                    component: InscriptionListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'invite-student',
                            children: [
                                {
                                    path: 'list',
                                    component: InviteStudentListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'price',
                            children: [
                                {
                                    path: 'list',
                                    component: PriceListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'skill',
                            children: [
                                {
                                    path: 'list',
                                    component: SkillListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'paiement',
                            children: [
                                {
                                    path: 'list',
                                    component: PaiementListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etudiant-cours',
                            children: [
                                {
                                    path: 'list',
                                    component: EtudiantCoursListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'groupe-etudiant',
                            children: [
                                {
                                    path: 'list',
                                    component: GroupeEtudiantListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'dictionary',
                            children: [
                                {
                                    path: 'list',
                                    component: DictionaryListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etat-etudiant',
                            children: [
                                {
                                    path: 'list',
                                    component: EtatEtudiantListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'groupe-etude',
                            children: [
                                {
                                    path: 'list',
                                    component: GroupeEtudeListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etudiant-review',
                            children: [
                                {
                                    path: 'list',
                                    component: EtudiantReviewListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etudiant',
                            children: [
                                {
                                    path: 'list',
                                    component: EtudiantListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'confirmation-token',
                            children: [
                                {
                                    path: 'list',
                                    component: ConfirmationTokenListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'teacher-locality',
                            children: [
                                {
                                    path: 'list',
                                    component: TeacherLocalityListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etat-inscription',
                            children: [
                                {
                                    path: 'list',
                                    component: EtatInscriptionListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'prof-review',
                            children: [
                                {
                                    path: 'list',
                                    component: ProfReviewListTeacherComponent ,
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
export class InscriptionTeacherRoutingModule { }
