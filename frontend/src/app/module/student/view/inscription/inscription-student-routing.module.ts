
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { NiveauEtudeListStudentComponent } from './niveau-etude-student/list-student/niveau-etude-list-student.component';
import { PackStudentListStudentComponent } from './pack-student-student/list-student/pack-student-list-student.component';
import { FonctionListStudentComponent } from './fonction-student/list-student/fonction-list-student.component';
import { StatutSocialListStudentComponent } from './statut-social-student/list-student/statut-social-list-student.component';
import { InteretEtudiantListStudentComponent } from './interet-etudiant-student/list-student/interet-etudiant-list-student.component';
import { EtatEtudiantScheduleListStudentComponent } from './etat-etudiant-schedule-student/list-student/etat-etudiant-schedule-list-student.component';
import { LangueListStudentComponent } from './langue-student/list-student/langue-list-student.component';
import { InscriptionListStudentComponent } from './inscription-student/list-student/inscription-list-student.component';
import { InviteStudentListStudentComponent } from './invite-student-student/list-student/invite-student-list-student.component';
import { PriceListStudentComponent } from './price-student/list-student/price-list-student.component';
import { SkillListStudentComponent } from './skill-student/list-student/skill-list-student.component';
import { PaiementListStudentComponent } from './paiement-student/list-student/paiement-list-student.component';
import { EtudiantCoursListStudentComponent } from './etudiant-cours-student/list-student/etudiant-cours-list-student.component';
import { GroupeEtudiantListStudentComponent } from './groupe-etudiant-student/list-student/groupe-etudiant-list-student.component';
import { DictionaryListStudentComponent } from './dictionary-student/list-student/dictionary-list-student.component';
import { EtatEtudiantListStudentComponent } from './etat-etudiant-student/list-student/etat-etudiant-list-student.component';
import { GroupeEtudeListStudentComponent } from './groupe-etude-student/list-student/groupe-etude-list-student.component';
import { EtudiantReviewListStudentComponent } from './etudiant-review-student/list-student/etudiant-review-list-student.component';
import { EtudiantListStudentComponent } from './etudiant-student/list-student/etudiant-list-student.component';
import { ConfirmationTokenListStudentComponent } from './confirmation-token-student/list-student/confirmation-token-list-student.component';
import { TeacherLocalityListStudentComponent } from './teacher-locality-student/list-student/teacher-locality-list-student.component';
import { EtatInscriptionListStudentComponent } from './etat-inscription-student/list-student/etat-inscription-list-student.component';
import { ProfReviewListStudentComponent } from './prof-review-student/list-student/prof-review-list-student.component';
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
                                    component: NiveauEtudeListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'pack-student',
                            children: [
                                {
                                    path: 'list',
                                    component: PackStudentListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'fonction',
                            children: [
                                {
                                    path: 'list',
                                    component: FonctionListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'statut-social',
                            children: [
                                {
                                    path: 'list',
                                    component: StatutSocialListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'interet-etudiant',
                            children: [
                                {
                                    path: 'list',
                                    component: InteretEtudiantListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etat-etudiant-schedule',
                            children: [
                                {
                                    path: 'list',
                                    component: EtatEtudiantScheduleListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'langue',
                            children: [
                                {
                                    path: 'list',
                                    component: LangueListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'inscription',
                            children: [
                                {
                                    path: 'list',
                                    component: InscriptionListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'invite-student',
                            children: [
                                {
                                    path: 'list',
                                    component: InviteStudentListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'price',
                            children: [
                                {
                                    path: 'list',
                                    component: PriceListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'skill',
                            children: [
                                {
                                    path: 'list',
                                    component: SkillListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'paiement',
                            children: [
                                {
                                    path: 'list',
                                    component: PaiementListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etudiant-cours',
                            children: [
                                {
                                    path: 'list',
                                    component: EtudiantCoursListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'groupe-etudiant',
                            children: [
                                {
                                    path: 'list',
                                    component: GroupeEtudiantListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'dictionary',
                            children: [
                                {
                                    path: 'list',
                                    component: DictionaryListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etat-etudiant',
                            children: [
                                {
                                    path: 'list',
                                    component: EtatEtudiantListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'groupe-etude',
                            children: [
                                {
                                    path: 'list',
                                    component: GroupeEtudeListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etudiant-review',
                            children: [
                                {
                                    path: 'list',
                                    component: EtudiantReviewListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etudiant',
                            children: [
                                {
                                    path: 'list',
                                    component: EtudiantListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'confirmation-token',
                            children: [
                                {
                                    path: 'list',
                                    component: ConfirmationTokenListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'teacher-locality',
                            children: [
                                {
                                    path: 'list',
                                    component: TeacherLocalityListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etat-inscription',
                            children: [
                                {
                                    path: 'list',
                                    component: EtatInscriptionListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'prof-review',
                            children: [
                                {
                                    path: 'list',
                                    component: ProfReviewListStudentComponent ,
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
export class InscriptionStudentRoutingModule { }
