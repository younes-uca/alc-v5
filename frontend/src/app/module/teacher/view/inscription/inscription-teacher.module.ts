import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import {TranslateModule} from '@ngx-translate/core';

import { NiveauEtudeCreateTeacherComponent } from './niveau-etude-teacher/create-teacher/niveau-etude-create-teacher.component';
import { NiveauEtudeEditTeacherComponent } from './niveau-etude-teacher/edit-teacher/niveau-etude-edit-teacher.component';
import { NiveauEtudeViewTeacherComponent } from './niveau-etude-teacher/view-teacher/niveau-etude-view-teacher.component';
import { NiveauEtudeListTeacherComponent } from './niveau-etude-teacher/list-teacher/niveau-etude-list-teacher.component';
import { PackStudentCreateTeacherComponent } from './pack-student-teacher/create-teacher/pack-student-create-teacher.component';
import { PackStudentEditTeacherComponent } from './pack-student-teacher/edit-teacher/pack-student-edit-teacher.component';
import { PackStudentViewTeacherComponent } from './pack-student-teacher/view-teacher/pack-student-view-teacher.component';
import { PackStudentListTeacherComponent } from './pack-student-teacher/list-teacher/pack-student-list-teacher.component';
import { FonctionCreateTeacherComponent } from './fonction-teacher/create-teacher/fonction-create-teacher.component';
import { FonctionEditTeacherComponent } from './fonction-teacher/edit-teacher/fonction-edit-teacher.component';
import { FonctionViewTeacherComponent } from './fonction-teacher/view-teacher/fonction-view-teacher.component';
import { FonctionListTeacherComponent } from './fonction-teacher/list-teacher/fonction-list-teacher.component';
import { StatutSocialCreateTeacherComponent } from './statut-social-teacher/create-teacher/statut-social-create-teacher.component';
import { StatutSocialEditTeacherComponent } from './statut-social-teacher/edit-teacher/statut-social-edit-teacher.component';
import { StatutSocialViewTeacherComponent } from './statut-social-teacher/view-teacher/statut-social-view-teacher.component';
import { StatutSocialListTeacherComponent } from './statut-social-teacher/list-teacher/statut-social-list-teacher.component';
import { InteretEtudiantCreateTeacherComponent } from './interet-etudiant-teacher/create-teacher/interet-etudiant-create-teacher.component';
import { InteretEtudiantEditTeacherComponent } from './interet-etudiant-teacher/edit-teacher/interet-etudiant-edit-teacher.component';
import { InteretEtudiantViewTeacherComponent } from './interet-etudiant-teacher/view-teacher/interet-etudiant-view-teacher.component';
import { InteretEtudiantListTeacherComponent } from './interet-etudiant-teacher/list-teacher/interet-etudiant-list-teacher.component';
import { EtatEtudiantScheduleCreateTeacherComponent } from './etat-etudiant-schedule-teacher/create-teacher/etat-etudiant-schedule-create-teacher.component';
import { EtatEtudiantScheduleEditTeacherComponent } from './etat-etudiant-schedule-teacher/edit-teacher/etat-etudiant-schedule-edit-teacher.component';
import { EtatEtudiantScheduleViewTeacherComponent } from './etat-etudiant-schedule-teacher/view-teacher/etat-etudiant-schedule-view-teacher.component';
import { EtatEtudiantScheduleListTeacherComponent } from './etat-etudiant-schedule-teacher/list-teacher/etat-etudiant-schedule-list-teacher.component';
import { LangueCreateTeacherComponent } from './langue-teacher/create-teacher/langue-create-teacher.component';
import { LangueEditTeacherComponent } from './langue-teacher/edit-teacher/langue-edit-teacher.component';
import { LangueViewTeacherComponent } from './langue-teacher/view-teacher/langue-view-teacher.component';
import { LangueListTeacherComponent } from './langue-teacher/list-teacher/langue-list-teacher.component';
import { InscriptionCreateTeacherComponent } from './inscription-teacher/create-teacher/inscription-create-teacher.component';
import { InscriptionEditTeacherComponent } from './inscription-teacher/edit-teacher/inscription-edit-teacher.component';
import { InscriptionViewTeacherComponent } from './inscription-teacher/view-teacher/inscription-view-teacher.component';
import { InscriptionListTeacherComponent } from './inscription-teacher/list-teacher/inscription-list-teacher.component';
import { InviteStudentCreateTeacherComponent } from './invite-student-teacher/create-teacher/invite-student-create-teacher.component';
import { InviteStudentEditTeacherComponent } from './invite-student-teacher/edit-teacher/invite-student-edit-teacher.component';
import { InviteStudentViewTeacherComponent } from './invite-student-teacher/view-teacher/invite-student-view-teacher.component';
import { InviteStudentListTeacherComponent } from './invite-student-teacher/list-teacher/invite-student-list-teacher.component';
import { PriceCreateTeacherComponent } from './price-teacher/create-teacher/price-create-teacher.component';
import { PriceEditTeacherComponent } from './price-teacher/edit-teacher/price-edit-teacher.component';
import { PriceViewTeacherComponent } from './price-teacher/view-teacher/price-view-teacher.component';
import { PriceListTeacherComponent } from './price-teacher/list-teacher/price-list-teacher.component';
import { SkillCreateTeacherComponent } from './skill-teacher/create-teacher/skill-create-teacher.component';
import { SkillEditTeacherComponent } from './skill-teacher/edit-teacher/skill-edit-teacher.component';
import { SkillViewTeacherComponent } from './skill-teacher/view-teacher/skill-view-teacher.component';
import { SkillListTeacherComponent } from './skill-teacher/list-teacher/skill-list-teacher.component';
import { PaiementCreateTeacherComponent } from './paiement-teacher/create-teacher/paiement-create-teacher.component';
import { PaiementEditTeacherComponent } from './paiement-teacher/edit-teacher/paiement-edit-teacher.component';
import { PaiementViewTeacherComponent } from './paiement-teacher/view-teacher/paiement-view-teacher.component';
import { PaiementListTeacherComponent } from './paiement-teacher/list-teacher/paiement-list-teacher.component';
import { EtudiantCoursCreateTeacherComponent } from './etudiant-cours-teacher/create-teacher/etudiant-cours-create-teacher.component';
import { EtudiantCoursEditTeacherComponent } from './etudiant-cours-teacher/edit-teacher/etudiant-cours-edit-teacher.component';
import { EtudiantCoursViewTeacherComponent } from './etudiant-cours-teacher/view-teacher/etudiant-cours-view-teacher.component';
import { EtudiantCoursListTeacherComponent } from './etudiant-cours-teacher/list-teacher/etudiant-cours-list-teacher.component';
import { GroupeEtudiantCreateTeacherComponent } from './groupe-etudiant-teacher/create-teacher/groupe-etudiant-create-teacher.component';
import { GroupeEtudiantEditTeacherComponent } from './groupe-etudiant-teacher/edit-teacher/groupe-etudiant-edit-teacher.component';
import { GroupeEtudiantViewTeacherComponent } from './groupe-etudiant-teacher/view-teacher/groupe-etudiant-view-teacher.component';
import { GroupeEtudiantListTeacherComponent } from './groupe-etudiant-teacher/list-teacher/groupe-etudiant-list-teacher.component';
import { DictionaryCreateTeacherComponent } from './dictionary-teacher/create-teacher/dictionary-create-teacher.component';
import { DictionaryEditTeacherComponent } from './dictionary-teacher/edit-teacher/dictionary-edit-teacher.component';
import { DictionaryViewTeacherComponent } from './dictionary-teacher/view-teacher/dictionary-view-teacher.component';
import { DictionaryListTeacherComponent } from './dictionary-teacher/list-teacher/dictionary-list-teacher.component';
import { EtatEtudiantCreateTeacherComponent } from './etat-etudiant-teacher/create-teacher/etat-etudiant-create-teacher.component';
import { EtatEtudiantEditTeacherComponent } from './etat-etudiant-teacher/edit-teacher/etat-etudiant-edit-teacher.component';
import { EtatEtudiantViewTeacherComponent } from './etat-etudiant-teacher/view-teacher/etat-etudiant-view-teacher.component';
import { EtatEtudiantListTeacherComponent } from './etat-etudiant-teacher/list-teacher/etat-etudiant-list-teacher.component';
import { GroupeEtudeCreateTeacherComponent } from './groupe-etude-teacher/create-teacher/groupe-etude-create-teacher.component';
import { GroupeEtudeEditTeacherComponent } from './groupe-etude-teacher/edit-teacher/groupe-etude-edit-teacher.component';
import { GroupeEtudeViewTeacherComponent } from './groupe-etude-teacher/view-teacher/groupe-etude-view-teacher.component';
import { GroupeEtudeListTeacherComponent } from './groupe-etude-teacher/list-teacher/groupe-etude-list-teacher.component';
import { EtudiantReviewCreateTeacherComponent } from './etudiant-review-teacher/create-teacher/etudiant-review-create-teacher.component';
import { EtudiantReviewEditTeacherComponent } from './etudiant-review-teacher/edit-teacher/etudiant-review-edit-teacher.component';
import { EtudiantReviewViewTeacherComponent } from './etudiant-review-teacher/view-teacher/etudiant-review-view-teacher.component';
import { EtudiantReviewListTeacherComponent } from './etudiant-review-teacher/list-teacher/etudiant-review-list-teacher.component';
import { EtudiantCreateTeacherComponent } from './etudiant-teacher/create-teacher/etudiant-create-teacher.component';
import { EtudiantEditTeacherComponent } from './etudiant-teacher/edit-teacher/etudiant-edit-teacher.component';
import { EtudiantViewTeacherComponent } from './etudiant-teacher/view-teacher/etudiant-view-teacher.component';
import { EtudiantListTeacherComponent } from './etudiant-teacher/list-teacher/etudiant-list-teacher.component';
import { ConfirmationTokenCreateTeacherComponent } from './confirmation-token-teacher/create-teacher/confirmation-token-create-teacher.component';
import { ConfirmationTokenEditTeacherComponent } from './confirmation-token-teacher/edit-teacher/confirmation-token-edit-teacher.component';
import { ConfirmationTokenViewTeacherComponent } from './confirmation-token-teacher/view-teacher/confirmation-token-view-teacher.component';
import { ConfirmationTokenListTeacherComponent } from './confirmation-token-teacher/list-teacher/confirmation-token-list-teacher.component';
import { TeacherLocalityCreateTeacherComponent } from './teacher-locality-teacher/create-teacher/teacher-locality-create-teacher.component';
import { TeacherLocalityEditTeacherComponent } from './teacher-locality-teacher/edit-teacher/teacher-locality-edit-teacher.component';
import { TeacherLocalityViewTeacherComponent } from './teacher-locality-teacher/view-teacher/teacher-locality-view-teacher.component';
import { TeacherLocalityListTeacherComponent } from './teacher-locality-teacher/list-teacher/teacher-locality-list-teacher.component';
import { EtatInscriptionCreateTeacherComponent } from './etat-inscription-teacher/create-teacher/etat-inscription-create-teacher.component';
import { EtatInscriptionEditTeacherComponent } from './etat-inscription-teacher/edit-teacher/etat-inscription-edit-teacher.component';
import { EtatInscriptionViewTeacherComponent } from './etat-inscription-teacher/view-teacher/etat-inscription-view-teacher.component';
import { EtatInscriptionListTeacherComponent } from './etat-inscription-teacher/list-teacher/etat-inscription-list-teacher.component';
import { ProfReviewCreateTeacherComponent } from './prof-review-teacher/create-teacher/prof-review-create-teacher.component';
import { ProfReviewEditTeacherComponent } from './prof-review-teacher/edit-teacher/prof-review-edit-teacher.component';
import { ProfReviewViewTeacherComponent } from './prof-review-teacher/view-teacher/prof-review-view-teacher.component';
import { ProfReviewListTeacherComponent } from './prof-review-teacher/list-teacher/prof-review-list-teacher.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {PaginatorModule} from 'primeng/paginator';



@NgModule({
  declarations: [

    NiveauEtudeCreateTeacherComponent,
    NiveauEtudeListTeacherComponent,
    NiveauEtudeViewTeacherComponent,
    NiveauEtudeEditTeacherComponent,
    PackStudentCreateTeacherComponent,
    PackStudentListTeacherComponent,
    PackStudentViewTeacherComponent,
    PackStudentEditTeacherComponent,
    FonctionCreateTeacherComponent,
    FonctionListTeacherComponent,
    FonctionViewTeacherComponent,
    FonctionEditTeacherComponent,
    StatutSocialCreateTeacherComponent,
    StatutSocialListTeacherComponent,
    StatutSocialViewTeacherComponent,
    StatutSocialEditTeacherComponent,
    InteretEtudiantCreateTeacherComponent,
    InteretEtudiantListTeacherComponent,
    InteretEtudiantViewTeacherComponent,
    InteretEtudiantEditTeacherComponent,
    EtatEtudiantScheduleCreateTeacherComponent,
    EtatEtudiantScheduleListTeacherComponent,
    EtatEtudiantScheduleViewTeacherComponent,
    EtatEtudiantScheduleEditTeacherComponent,
    LangueCreateTeacherComponent,
    LangueListTeacherComponent,
    LangueViewTeacherComponent,
    LangueEditTeacherComponent,
    InscriptionCreateTeacherComponent,
    InscriptionListTeacherComponent,
    InscriptionViewTeacherComponent,
    InscriptionEditTeacherComponent,
    InviteStudentCreateTeacherComponent,
    InviteStudentListTeacherComponent,
    InviteStudentViewTeacherComponent,
    InviteStudentEditTeacherComponent,
    PriceCreateTeacherComponent,
    PriceListTeacherComponent,
    PriceViewTeacherComponent,
    PriceEditTeacherComponent,
    SkillCreateTeacherComponent,
    SkillListTeacherComponent,
    SkillViewTeacherComponent,
    SkillEditTeacherComponent,
    PaiementCreateTeacherComponent,
    PaiementListTeacherComponent,
    PaiementViewTeacherComponent,
    PaiementEditTeacherComponent,
    EtudiantCoursCreateTeacherComponent,
    EtudiantCoursListTeacherComponent,
    EtudiantCoursViewTeacherComponent,
    EtudiantCoursEditTeacherComponent,
    GroupeEtudiantCreateTeacherComponent,
    GroupeEtudiantListTeacherComponent,
    GroupeEtudiantViewTeacherComponent,
    GroupeEtudiantEditTeacherComponent,
    DictionaryCreateTeacherComponent,
    DictionaryListTeacherComponent,
    DictionaryViewTeacherComponent,
    DictionaryEditTeacherComponent,
    EtatEtudiantCreateTeacherComponent,
    EtatEtudiantListTeacherComponent,
    EtatEtudiantViewTeacherComponent,
    EtatEtudiantEditTeacherComponent,
    GroupeEtudeCreateTeacherComponent,
    GroupeEtudeListTeacherComponent,
    GroupeEtudeViewTeacherComponent,
    GroupeEtudeEditTeacherComponent,
    EtudiantReviewCreateTeacherComponent,
    EtudiantReviewListTeacherComponent,
    EtudiantReviewViewTeacherComponent,
    EtudiantReviewEditTeacherComponent,
    EtudiantCreateTeacherComponent,
    EtudiantListTeacherComponent,
    EtudiantViewTeacherComponent,
    EtudiantEditTeacherComponent,
    ConfirmationTokenCreateTeacherComponent,
    ConfirmationTokenListTeacherComponent,
    ConfirmationTokenViewTeacherComponent,
    ConfirmationTokenEditTeacherComponent,
    TeacherLocalityCreateTeacherComponent,
    TeacherLocalityListTeacherComponent,
    TeacherLocalityViewTeacherComponent,
    TeacherLocalityEditTeacherComponent,
    EtatInscriptionCreateTeacherComponent,
    EtatInscriptionListTeacherComponent,
    EtatInscriptionViewTeacherComponent,
    EtatInscriptionEditTeacherComponent,
    ProfReviewCreateTeacherComponent,
    ProfReviewListTeacherComponent,
    ProfReviewViewTeacherComponent,
    ProfReviewEditTeacherComponent,
  ],
  imports: [
    CommonModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    DropdownModule,
    TabViewModule,
    InputSwitchModule,
    InputTextareaModule,
    CalendarModule,
    PanelModule,
    MessageModule,
    MessagesModule,
    InputNumberModule,
    BadgeModule,
    MultiSelectModule,
    PaginatorModule,
    TranslateModule,
  ],
  exports: [
  NiveauEtudeCreateTeacherComponent,
  NiveauEtudeListTeacherComponent,
  NiveauEtudeViewTeacherComponent,
  NiveauEtudeEditTeacherComponent,
  PackStudentCreateTeacherComponent,
  PackStudentListTeacherComponent,
  PackStudentViewTeacherComponent,
  PackStudentEditTeacherComponent,
  FonctionCreateTeacherComponent,
  FonctionListTeacherComponent,
  FonctionViewTeacherComponent,
  FonctionEditTeacherComponent,
  StatutSocialCreateTeacherComponent,
  StatutSocialListTeacherComponent,
  StatutSocialViewTeacherComponent,
  StatutSocialEditTeacherComponent,
  InteretEtudiantCreateTeacherComponent,
  InteretEtudiantListTeacherComponent,
  InteretEtudiantViewTeacherComponent,
  InteretEtudiantEditTeacherComponent,
  EtatEtudiantScheduleCreateTeacherComponent,
  EtatEtudiantScheduleListTeacherComponent,
  EtatEtudiantScheduleViewTeacherComponent,
  EtatEtudiantScheduleEditTeacherComponent,
  LangueCreateTeacherComponent,
  LangueListTeacherComponent,
  LangueViewTeacherComponent,
  LangueEditTeacherComponent,
  InscriptionCreateTeacherComponent,
  InscriptionListTeacherComponent,
  InscriptionViewTeacherComponent,
  InscriptionEditTeacherComponent,
  InviteStudentCreateTeacherComponent,
  InviteStudentListTeacherComponent,
  InviteStudentViewTeacherComponent,
  InviteStudentEditTeacherComponent,
  PriceCreateTeacherComponent,
  PriceListTeacherComponent,
  PriceViewTeacherComponent,
  PriceEditTeacherComponent,
  SkillCreateTeacherComponent,
  SkillListTeacherComponent,
  SkillViewTeacherComponent,
  SkillEditTeacherComponent,
  PaiementCreateTeacherComponent,
  PaiementListTeacherComponent,
  PaiementViewTeacherComponent,
  PaiementEditTeacherComponent,
  EtudiantCoursCreateTeacherComponent,
  EtudiantCoursListTeacherComponent,
  EtudiantCoursViewTeacherComponent,
  EtudiantCoursEditTeacherComponent,
  GroupeEtudiantCreateTeacherComponent,
  GroupeEtudiantListTeacherComponent,
  GroupeEtudiantViewTeacherComponent,
  GroupeEtudiantEditTeacherComponent,
  DictionaryCreateTeacherComponent,
  DictionaryListTeacherComponent,
  DictionaryViewTeacherComponent,
  DictionaryEditTeacherComponent,
  EtatEtudiantCreateTeacherComponent,
  EtatEtudiantListTeacherComponent,
  EtatEtudiantViewTeacherComponent,
  EtatEtudiantEditTeacherComponent,
  GroupeEtudeCreateTeacherComponent,
  GroupeEtudeListTeacherComponent,
  GroupeEtudeViewTeacherComponent,
  GroupeEtudeEditTeacherComponent,
  EtudiantReviewCreateTeacherComponent,
  EtudiantReviewListTeacherComponent,
  EtudiantReviewViewTeacherComponent,
  EtudiantReviewEditTeacherComponent,
  EtudiantCreateTeacherComponent,
  EtudiantListTeacherComponent,
  EtudiantViewTeacherComponent,
  EtudiantEditTeacherComponent,
  ConfirmationTokenCreateTeacherComponent,
  ConfirmationTokenListTeacherComponent,
  ConfirmationTokenViewTeacherComponent,
  ConfirmationTokenEditTeacherComponent,
  TeacherLocalityCreateTeacherComponent,
  TeacherLocalityListTeacherComponent,
  TeacherLocalityViewTeacherComponent,
  TeacherLocalityEditTeacherComponent,
  EtatInscriptionCreateTeacherComponent,
  EtatInscriptionListTeacherComponent,
  EtatInscriptionViewTeacherComponent,
  EtatInscriptionEditTeacherComponent,
  ProfReviewCreateTeacherComponent,
  ProfReviewListTeacherComponent,
  ProfReviewViewTeacherComponent,
  ProfReviewEditTeacherComponent,
  ],
  entryComponents: [],
})
export class InscriptionTeacherModule { }