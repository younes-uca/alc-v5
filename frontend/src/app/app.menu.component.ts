import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';

import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { RoleService } from 'src/app/zynerator/security/Role.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
  animations: [
    trigger('inline', [
      state(
        'hidden',
        style({
          height: '0px',
          overflow: 'hidden',
        })
      ),
      state(
        'visible',
        style({
          height: '*',
        })
      ),
      state(
        'hiddenAnimated',
        style({
          height: '0px',
          overflow: 'hidden',
        })
      ),
      state(
        'visibleAnimated',
        style({
          height: '*',
        })
      ),
      transition(
        'visibleAnimated => hiddenAnimated',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
      transition(
        'hiddenAnimated => visibleAnimated',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
    ]),
  ],
})
export class AppMenuComponent implements OnInit {
  model: any[];
  modelsuperadmin:any[];
  modelanonymous: any[];
    modeladmin : any[];
  modelteacher : any[];
  modelstudent : any[];
  constructor(public app: AppComponent,
   public appMain: AppMainComponent,
   private roleService: RoleService,
   private authService:AuthService,
  private router: Router) {}

  ngOnInit() {


    this.modeladmin =
      [
              {
                label: 'Recommendation/Reclamation',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste reclamation etudiant',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/recom-recla/reclamation-etudiant/list']
                    },
                    {
                      label: 'Liste recommend teacher',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/recom-recla/recommend-teacher/list']
                    },
                    {
                      label: 'Liste reclamation prof',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/recom-recla/reclamation-prof/list']
                    },
                    {
                      label: 'Liste type reclamation prof',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/recom-recla/type-reclamation-prof/list']
                    },
                    {
                      label: 'Liste type reclamation etudiant',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/recom-recla/type-reclamation-etudiant/list']
                    },
                ]
              },
              {
                label: 'Gestion Salaire',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste workload bonus prof',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/salary/workload-bonus-prof/list']
                    },
                    {
                      label: 'Liste salary',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/salary/salary/list']
                    },
                    {
                      label: 'Liste workload bonus',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/salary/workload-bonus/list']
                    },
                ]
              },
              {
                label: 'Gestion Quiz',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste question',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/quiz/question/list']
                    },
                    {
                      label: 'Liste reponse etudiant',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/quiz/reponse-etudiant/list']
                    },
                    {
                      label: 'Liste quiz',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/quiz/quiz/list']
                    },
                    {
                      label: 'Liste type de question',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/quiz/type-de-question/list']
                    },
                    {
                      label: 'Liste reponse',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/quiz/reponse/list']
                    },
                    {
                      label: 'Liste class room',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/quiz/class-room/list']
                    },
                    {
                      label: 'Liste etat reponse',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/quiz/etat-reponse/list']
                    },
                    {
                      label: 'Liste quiz etudiant',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/quiz/quiz-etudiant/list']
                    },
                ]
              },
              {
                label: 'Gestion Cours',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste parcours',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/course/parcours/list']
                    },
                    {
                      label: 'Liste cours',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/course/cours/list']
                    },
                    {
                      label: 'Liste etat cours',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/course/etat-cours/list']
                    },
                    {
                      label: 'Liste vocabulary',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/course/vocabulary/list']
                    },
                    {
                      label: 'Liste super categorie section',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/course/super-categorie-section/list']
                    },
                    {
                      label: 'Liste categorie section',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/course/categorie-section/list']
                    },
                    {
                      label: 'Liste centre',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/course/centre/list']
                    },
                    {
                      label: 'Liste section',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/course/section/list']
                    },
                    {
                      label: 'Liste vocabulary quiz',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/course/vocabulary-quiz/list']
                    },
                    {
                      label: 'Liste section item',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/course/section-item/list']
                    },
                    {
                      label: 'Liste level test configuration',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/course/level-test-configuration/list']
                    },
                ]
              },
              {
                label: 'Gestion Free Trial',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste free trial configuration',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/freetrial/free-trial-configuration/list']
                    },
                    {
                      label: 'Liste statut free trial',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/freetrial/statut-free-trial/list']
                    },
                    {
                      label: 'Liste free trial',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/freetrial/free-trial/list']
                    },
                    {
                      label: 'Liste free trial student whats template',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/freetrial/free-trial-student-whats-template/list']
                    },
                    {
                      label: 'Liste free trial teacher email template',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/freetrial/free-trial-teacher-email-template/list']
                    },
                    {
                      label: 'Liste services',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/freetrial/services/list']
                    },
                    {
                      label: 'Liste free trialformule',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/freetrial/free-trialformule/list']
                    },
                    {
                      label: 'Liste free trial teacher whats template',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/freetrial/free-trial-teacher-whats-template/list']
                    },
                    {
                      label: 'Liste free trial student email template',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/freetrial/free-trial-student-email-template/list']
                    },
                    {
                      label: 'Liste free trial detail',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/freetrial/free-trial-detail/list']
                    },
                ]
              },
              {
                label: 'Gestion Commande',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste admin',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/alc/admin/list']
                    },
                ]
              },
              {
                label: 'Gestion Common',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste class average bonus',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/common/class-average-bonus/list']
                    },
                    {
                      label: 'Liste news',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/common/news/list']
                    },
                    {
                      label: 'Liste contact',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/common/contact/list']
                    },
                ]
              },
              {
                label: 'Gestion Prof',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste calendrier prof',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/prof/calendrier-prof/list']
                    },
                    {
                      label: 'Liste type teacher',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/prof/type-teacher/list']
                    },
                    {
                      label: 'Liste tranche horaire prof',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/prof/tranche-horaire-prof/list']
                    },
                    {
                      label: 'Liste prof',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/prof/prof/list']
                    },
                    {
                      label: 'Liste schedule prof',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/prof/schedule-prof/list']
                    },
                    {
                      label: 'Liste class average bonus prof',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/prof/class-average-bonus-prof/list']
                    },
                    {
                      label: 'Liste categorie prof',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/prof/categorie-prof/list']
                    },
                ]
              },
              {
                label: 'Gestion Faq',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste faq etudiant',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/faq/faq-etudiant/list']
                    },
                    {
                      label: 'Liste faq type',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/faq/faq-type/list']
                    },
                    {
                      label: 'Liste faq prof',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/faq/faq-prof/list']
                    },
                    {
                      label: 'Liste faq',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/faq/faq/list']
                    },
                ]
              },
              {
                label: 'Gestion Inscription',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste niveau etude',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/inscription/niveau-etude/list']
                    },
                    {
                      label: 'Liste pack student',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/inscription/pack-student/list']
                    },
                    {
                      label: 'Liste fonction',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/inscription/fonction/list']
                    },
                    {
                      label: 'Liste statut social',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/inscription/statut-social/list']
                    },
                    {
                      label: 'Liste interet etudiant',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/inscription/interet-etudiant/list']
                    },
                    {
                      label: 'Liste etat etudiant schedule',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/inscription/etat-etudiant-schedule/list']
                    },
                    {
                      label: 'Liste langue',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/inscription/langue/list']
                    },
                    {
                      label: 'Liste inscription',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/inscription/inscription/list']
                    },
                    {
                      label: 'Liste invite student',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/inscription/invite-student/list']
                    },
                    {
                      label: 'Liste price',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/inscription/price/list']
                    },
                    {
                      label: 'Liste skill',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/inscription/skill/list']
                    },
                    {
                      label: 'Liste paiement',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/inscription/paiement/list']
                    },
                    {
                      label: 'Liste etudiant cours',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/inscription/etudiant-cours/list']
                    },
                    {
                      label: 'Liste groupe etudiant',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/inscription/groupe-etudiant/list']
                    },
                    {
                      label: 'Liste dictionary',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/inscription/dictionary/list']
                    },
                    {
                      label: 'Liste etat etudiant',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/inscription/etat-etudiant/list']
                    },
                    {
                      label: 'Liste groupe etude',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/inscription/groupe-etude/list']
                    },
                    {
                      label: 'Liste etudiant review',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/inscription/etudiant-review/list']
                    },
                    {
                      label: 'Liste etudiant',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/inscription/etudiant/list']
                    },
                    {
                      label: 'Liste confirmation token',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/inscription/confirmation-token/list']
                    },
                    {
                      label: 'Liste teacher locality',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/inscription/teacher-locality/list']
                    },
                    {
                      label: 'Liste etat inscription',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/inscription/etat-inscription/list']
                    },
                    {
                      label: 'Liste prof review',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/inscription/prof-review/list']
                    },
                ]
              },
              {
                label: 'Gestion Homework',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste resultat home work',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/homework/resultat-home-work/list']
                    },
                    {
                      label: 'Liste home work',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/homework/home-work/list']
                    },
                    {
                      label: 'Liste howe work q s t reponse',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/homework/howe-work-q-s-t-reponse/list']
                    },
                    {
                      label: 'Liste reponse etudiant home work',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/homework/reponse-etudiant-home-work/list']
                    },
                    {
                      label: 'Liste home work etudiant',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/homework/home-work-etudiant/list']
                    },
                    {
                      label: 'Liste type home work',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/homework/type-home-work/list']
                    },
                    {
                      label: 'Liste home work question',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/homework/home-work-question/list']
                    },
                ]
              },
              {
                label: 'Gestion Etude',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste session cours',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/learning/session-cours/list']
                    },
                ]
              },
    ]
    this.modelteacher =
      [
              {
                label: 'Recommendation/Reclamation',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste reclamation etudiant',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/recom-recla/reclamation-etudiant/list']
                    },
                    {
                      label: 'Liste recommend teacher',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/recom-recla/recommend-teacher/list']
                    },
                    {
                      label: 'Liste reclamation prof',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/recom-recla/reclamation-prof/list']
                    },
                    {
                      label: 'Liste type reclamation prof',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/recom-recla/type-reclamation-prof/list']
                    },
                    {
                      label: 'Liste type reclamation etudiant',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/recom-recla/type-reclamation-etudiant/list']
                    },
                ]
              },
              {
                label: 'Gestion Salaire',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste workload bonus prof',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/salary/workload-bonus-prof/list']
                    },
                    {
                      label: 'Liste salary',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/salary/salary/list']
                    },
                    {
                      label: 'Liste workload bonus',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/salary/workload-bonus/list']
                    },
                ]
              },
              {
                label: 'Gestion Quiz',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste question',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/quiz/question/list']
                    },
                    {
                      label: 'Liste reponse etudiant',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/quiz/reponse-etudiant/list']
                    },
                    {
                      label: 'Liste quiz',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/quiz/quiz/list']
                    },
                    {
                      label: 'Liste type de question',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/quiz/type-de-question/list']
                    },
                    {
                      label: 'Liste reponse',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/quiz/reponse/list']
                    },
                    {
                      label: 'Liste class room',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/quiz/class-room/list']
                    },
                    {
                      label: 'Liste etat reponse',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/quiz/etat-reponse/list']
                    },
                    {
                      label: 'Liste quiz etudiant',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/quiz/quiz-etudiant/list']
                    },
                ]
              },
              {
                label: 'Gestion Cours',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste parcours',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/course/parcours/list']
                    },
                    {
                      label: 'Liste cours',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/course/cours/list']
                    },
                    {
                      label: 'Liste etat cours',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/course/etat-cours/list']
                    },
                    {
                      label: 'Liste vocabulary',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/course/vocabulary/list']
                    },
                    {
                      label: 'Liste super categorie section',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/course/super-categorie-section/list']
                    },
                    {
                      label: 'Liste categorie section',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/course/categorie-section/list']
                    },
                    {
                      label: 'Liste centre',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/course/centre/list']
                    },
                    {
                      label: 'Liste section',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/course/section/list']
                    },
                    {
                      label: 'Liste vocabulary quiz',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/course/vocabulary-quiz/list']
                    },
                    {
                      label: 'Liste section item',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/course/section-item/list']
                    },
                    {
                      label: 'Liste level test configuration',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/course/level-test-configuration/list']
                    },
                ]
              },
              {
                label: 'Gestion Free Trial',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste free trial configuration',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/freetrial/free-trial-configuration/list']
                    },
                    {
                      label: 'Liste statut free trial',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/freetrial/statut-free-trial/list']
                    },
                    {
                      label: 'Liste free trial',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/freetrial/free-trial/list']
                    },
                    {
                      label: 'Liste free trial student whats template',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/freetrial/free-trial-student-whats-template/list']
                    },
                    {
                      label: 'Liste free trial teacher email template',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/freetrial/free-trial-teacher-email-template/list']
                    },
                    {
                      label: 'Liste services',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/freetrial/services/list']
                    },
                    {
                      label: 'Liste free trialformule',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/freetrial/free-trialformule/list']
                    },
                    {
                      label: 'Liste free trial teacher whats template',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/freetrial/free-trial-teacher-whats-template/list']
                    },
                    {
                      label: 'Liste free trial student email template',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/freetrial/free-trial-student-email-template/list']
                    },
                    {
                      label: 'Liste free trial detail',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/freetrial/free-trial-detail/list']
                    },
                ]
              },
              {
                label: 'Gestion Commande',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste admin',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/alc/admin/list']
                    },
                ]
              },
              {
                label: 'Gestion Common',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste class average bonus',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/common/class-average-bonus/list']
                    },
                    {
                      label: 'Liste news',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/common/news/list']
                    },
                    {
                      label: 'Liste contact',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/common/contact/list']
                    },
                ]
              },
              {
                label: 'Gestion Prof',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste calendrier prof',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/prof/calendrier-prof/list']
                    },
                    {
                      label: 'Liste type teacher',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/prof/type-teacher/list']
                    },
                    {
                      label: 'Liste tranche horaire prof',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/prof/tranche-horaire-prof/list']
                    },
                    {
                      label: 'Liste prof',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/prof/prof/list']
                    },
                    {
                      label: 'Liste schedule prof',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/prof/schedule-prof/list']
                    },
                    {
                      label: 'Liste class average bonus prof',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/prof/class-average-bonus-prof/list']
                    },
                    {
                      label: 'Liste categorie prof',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/prof/categorie-prof/list']
                    },
                ]
              },
              {
                label: 'Gestion Faq',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste faq etudiant',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/faq/faq-etudiant/list']
                    },
                    {
                      label: 'Liste faq type',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/faq/faq-type/list']
                    },
                    {
                      label: 'Liste faq prof',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/faq/faq-prof/list']
                    },
                    {
                      label: 'Liste faq',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/faq/faq/list']
                    },
                ]
              },
              {
                label: 'Gestion Inscription',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste niveau etude',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/inscription/niveau-etude/list']
                    },
                    {
                      label: 'Liste pack student',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/inscription/pack-student/list']
                    },
                    {
                      label: 'Liste fonction',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/inscription/fonction/list']
                    },
                    {
                      label: 'Liste statut social',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/inscription/statut-social/list']
                    },
                    {
                      label: 'Liste interet etudiant',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/inscription/interet-etudiant/list']
                    },
                    {
                      label: 'Liste etat etudiant schedule',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/inscription/etat-etudiant-schedule/list']
                    },
                    {
                      label: 'Liste langue',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/inscription/langue/list']
                    },
                    {
                      label: 'Liste inscription',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/inscription/inscription/list']
                    },
                    {
                      label: 'Liste invite student',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/inscription/invite-student/list']
                    },
                    {
                      label: 'Liste price',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/inscription/price/list']
                    },
                    {
                      label: 'Liste skill',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/inscription/skill/list']
                    },
                    {
                      label: 'Liste paiement',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/inscription/paiement/list']
                    },
                    {
                      label: 'Liste etudiant cours',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/inscription/etudiant-cours/list']
                    },
                    {
                      label: 'Liste groupe etudiant',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/inscription/groupe-etudiant/list']
                    },
                    {
                      label: 'Liste dictionary',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/inscription/dictionary/list']
                    },
                    {
                      label: 'Liste etat etudiant',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/inscription/etat-etudiant/list']
                    },
                    {
                      label: 'Liste groupe etude',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/inscription/groupe-etude/list']
                    },
                    {
                      label: 'Liste etudiant review',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/inscription/etudiant-review/list']
                    },
                    {
                      label: 'Liste etudiant',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/inscription/etudiant/list']
                    },
                    {
                      label: 'Liste confirmation token',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/inscription/confirmation-token/list']
                    },
                    {
                      label: 'Liste teacher locality',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/inscription/teacher-locality/list']
                    },
                    {
                      label: 'Liste etat inscription',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/inscription/etat-inscription/list']
                    },
                    {
                      label: 'Liste prof review',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/inscription/prof-review/list']
                    },
                ]
              },
              {
                label: 'Gestion Homework',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste resultat home work',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/homework/resultat-home-work/list']
                    },
                    {
                      label: 'Liste home work',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/homework/home-work/list']
                    },
                    {
                      label: 'Liste howe work q s t reponse',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/homework/howe-work-q-s-t-reponse/list']
                    },
                    {
                      label: 'Liste reponse etudiant home work',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/homework/reponse-etudiant-home-work/list']
                    },
                    {
                      label: 'Liste home work etudiant',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/homework/home-work-etudiant/list']
                    },
                    {
                      label: 'Liste type home work',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/homework/type-home-work/list']
                    },
                    {
                      label: 'Liste home work question',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/homework/home-work-question/list']
                    },
                ]
              },
              {
                label: 'Gestion Etude',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste session cours',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/teacher/learning/session-cours/list']
                    },
                ]
              },
    ]
    this.modelstudent =
      [
              {
                label: 'Recommendation/Reclamation',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste reclamation etudiant',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/recom-recla/reclamation-etudiant/list']
                    },
                    {
                      label: 'Liste recommend teacher',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/recom-recla/recommend-teacher/list']
                    },
                    {
                      label: 'Liste reclamation prof',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/recom-recla/reclamation-prof/list']
                    },
                    {
                      label: 'Liste type reclamation prof',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/recom-recla/type-reclamation-prof/list']
                    },
                    {
                      label: 'Liste type reclamation etudiant',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/recom-recla/type-reclamation-etudiant/list']
                    },
                ]
              },
              {
                label: 'Gestion Salaire',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste workload bonus prof',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/salary/workload-bonus-prof/list']
                    },
                    {
                      label: 'Liste salary',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/salary/salary/list']
                    },
                    {
                      label: 'Liste workload bonus',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/salary/workload-bonus/list']
                    },
                ]
              },
              {
                label: 'Gestion Quiz',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste question',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/quiz/question/list']
                    },
                    {
                      label: 'Liste reponse etudiant',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/quiz/reponse-etudiant/list']
                    },
                    {
                      label: 'Liste quiz',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/quiz/quiz/list']
                    },
                    {
                      label: 'Liste type de question',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/quiz/type-de-question/list']
                    },
                    {
                      label: 'Liste reponse',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/quiz/reponse/list']
                    },
                    {
                      label: 'Liste class room',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/quiz/class-room/list']
                    },
                    {
                      label: 'Liste etat reponse',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/quiz/etat-reponse/list']
                    },
                    {
                      label: 'Liste quiz etudiant',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/quiz/quiz-etudiant/list']
                    },
                ]
              },
              {
                label: 'Gestion Cours',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste parcours',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/course/parcours/list']
                    },
                    {
                      label: 'Liste cours',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/course/cours/list']
                    },
                    {
                      label: 'Liste etat cours',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/course/etat-cours/list']
                    },
                    {
                      label: 'Liste vocabulary',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/course/vocabulary/list']
                    },
                    {
                      label: 'Liste super categorie section',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/course/super-categorie-section/list']
                    },
                    {
                      label: 'Liste categorie section',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/course/categorie-section/list']
                    },
                    {
                      label: 'Liste centre',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/course/centre/list']
                    },
                    {
                      label: 'Liste section',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/course/section/list']
                    },
                    {
                      label: 'Liste vocabulary quiz',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/course/vocabulary-quiz/list']
                    },
                    {
                      label: 'Liste section item',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/course/section-item/list']
                    },
                    {
                      label: 'Liste level test configuration',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/course/level-test-configuration/list']
                    },
                ]
              },
              {
                label: 'Gestion Free Trial',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste free trial configuration',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/freetrial/free-trial-configuration/list']
                    },
                    {
                      label: 'Liste statut free trial',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/freetrial/statut-free-trial/list']
                    },
                    {
                      label: 'Liste free trial',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/freetrial/free-trial/list']
                    },
                    {
                      label: 'Liste free trial student whats template',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/freetrial/free-trial-student-whats-template/list']
                    },
                    {
                      label: 'Liste free trial teacher email template',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/freetrial/free-trial-teacher-email-template/list']
                    },
                    {
                      label: 'Liste services',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/freetrial/services/list']
                    },
                    {
                      label: 'Liste free trialformule',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/freetrial/free-trialformule/list']
                    },
                    {
                      label: 'Liste free trial teacher whats template',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/freetrial/free-trial-teacher-whats-template/list']
                    },
                    {
                      label: 'Liste free trial student email template',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/freetrial/free-trial-student-email-template/list']
                    },
                    {
                      label: 'Liste free trial detail',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/freetrial/free-trial-detail/list']
                    },
                ]
              },
              {
                label: 'Gestion Commande',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste admin',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/alc/admin/list']
                    },
                ]
              },
              {
                label: 'Gestion Common',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste class average bonus',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/common/class-average-bonus/list']
                    },
                    {
                      label: 'Liste news',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/common/news/list']
                    },
                    {
                      label: 'Liste contact',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/common/contact/list']
                    },
                ]
              },
              {
                label: 'Gestion Prof',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste calendrier prof',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/prof/calendrier-prof/list']
                    },
                    {
                      label: 'Liste type teacher',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/prof/type-teacher/list']
                    },
                    {
                      label: 'Liste tranche horaire prof',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/prof/tranche-horaire-prof/list']
                    },
                    {
                      label: 'Liste prof',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/prof/prof/list']
                    },
                    {
                      label: 'Liste schedule prof',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/prof/schedule-prof/list']
                    },
                    {
                      label: 'Liste class average bonus prof',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/prof/class-average-bonus-prof/list']
                    },
                    {
                      label: 'Liste categorie prof',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/prof/categorie-prof/list']
                    },
                ]
              },
              {
                label: 'Gestion Faq',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste faq etudiant',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/faq/faq-etudiant/list']
                    },
                    {
                      label: 'Liste faq type',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/faq/faq-type/list']
                    },
                    {
                      label: 'Liste faq prof',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/faq/faq-prof/list']
                    },
                    {
                      label: 'Liste faq',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/faq/faq/list']
                    },
                ]
              },
              {
                label: 'Gestion Inscription',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste niveau etude',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/inscription/niveau-etude/list']
                    },
                    {
                      label: 'Liste pack student',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/inscription/pack-student/list']
                    },
                    {
                      label: 'Liste fonction',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/inscription/fonction/list']
                    },
                    {
                      label: 'Liste statut social',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/inscription/statut-social/list']
                    },
                    {
                      label: 'Liste interet etudiant',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/inscription/interet-etudiant/list']
                    },
                    {
                      label: 'Liste etat etudiant schedule',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/inscription/etat-etudiant-schedule/list']
                    },
                    {
                      label: 'Liste langue',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/inscription/langue/list']
                    },
                    {
                      label: 'Liste inscription',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/inscription/inscription/list']
                    },
                    {
                      label: 'Liste invite student',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/inscription/invite-student/list']
                    },
                    {
                      label: 'Liste price',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/inscription/price/list']
                    },
                    {
                      label: 'Liste skill',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/inscription/skill/list']
                    },
                    {
                      label: 'Liste paiement',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/inscription/paiement/list']
                    },
                    {
                      label: 'Liste etudiant cours',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/inscription/etudiant-cours/list']
                    },
                    {
                      label: 'Liste groupe etudiant',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/inscription/groupe-etudiant/list']
                    },
                    {
                      label: 'Liste dictionary',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/inscription/dictionary/list']
                    },
                    {
                      label: 'Liste etat etudiant',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/inscription/etat-etudiant/list']
                    },
                    {
                      label: 'Liste groupe etude',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/inscription/groupe-etude/list']
                    },
                    {
                      label: 'Liste etudiant review',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/inscription/etudiant-review/list']
                    },
                    {
                      label: 'Liste etudiant',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/inscription/etudiant/list']
                    },
                    {
                      label: 'Liste confirmation token',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/inscription/confirmation-token/list']
                    },
                    {
                      label: 'Liste teacher locality',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/inscription/teacher-locality/list']
                    },
                    {
                      label: 'Liste etat inscription',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/inscription/etat-inscription/list']
                    },
                    {
                      label: 'Liste prof review',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/inscription/prof-review/list']
                    },
                ]
              },
              {
                label: 'Gestion Homework',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste resultat home work',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/homework/resultat-home-work/list']
                    },
                    {
                      label: 'Liste home work',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/homework/home-work/list']
                    },
                    {
                      label: 'Liste howe work q s t reponse',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/homework/howe-work-q-s-t-reponse/list']
                    },
                    {
                      label: 'Liste reponse etudiant home work',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/homework/reponse-etudiant-home-work/list']
                    },
                    {
                      label: 'Liste home work etudiant',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/homework/home-work-etudiant/list']
                    },
                    {
                      label: 'Liste type home work',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/homework/type-home-work/list']
                    },
                    {
                      label: 'Liste home work question',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/homework/home-work-question/list']
                    },
                ]
              },
              {
                label: 'Gestion Etude',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste session cours',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/student/learning/session-cours/list']
                    },
                ]
              },
    ]
        if (this.authService.authenticated) {
      if (this.authService.authenticatedUser.roles) {

        this.authService.authenticatedUser.roles.forEach(role => {
          const roleName: string = this.getRole(role);
          this.roleService._role.next(roleName.toUpperCase());
          eval('this.model = this.model' + this.getRole(role));
        })
      }

    }
  }
  getRole(text){
  const [role, ...rest] = text.split('_');
  return rest.join('').toLowerCase();
}
  onMenuClick(event) {
    this.appMain.onMenuClick(event);
  }
}
