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

import { NiveauEtudeCreateStudentComponent } from './niveau-etude-student/create-student/niveau-etude-create-student.component';
import { NiveauEtudeEditStudentComponent } from './niveau-etude-student/edit-student/niveau-etude-edit-student.component';
import { NiveauEtudeViewStudentComponent } from './niveau-etude-student/view-student/niveau-etude-view-student.component';
import { NiveauEtudeListStudentComponent } from './niveau-etude-student/list-student/niveau-etude-list-student.component';
import { PackStudentCreateStudentComponent } from './pack-student-student/create-student/pack-student-create-student.component';
import { PackStudentEditStudentComponent } from './pack-student-student/edit-student/pack-student-edit-student.component';
import { PackStudentViewStudentComponent } from './pack-student-student/view-student/pack-student-view-student.component';
import { PackStudentListStudentComponent } from './pack-student-student/list-student/pack-student-list-student.component';
import { FonctionCreateStudentComponent } from './fonction-student/create-student/fonction-create-student.component';
import { FonctionEditStudentComponent } from './fonction-student/edit-student/fonction-edit-student.component';
import { FonctionViewStudentComponent } from './fonction-student/view-student/fonction-view-student.component';
import { FonctionListStudentComponent } from './fonction-student/list-student/fonction-list-student.component';
import { StatutSocialCreateStudentComponent } from './statut-social-student/create-student/statut-social-create-student.component';
import { StatutSocialEditStudentComponent } from './statut-social-student/edit-student/statut-social-edit-student.component';
import { StatutSocialViewStudentComponent } from './statut-social-student/view-student/statut-social-view-student.component';
import { StatutSocialListStudentComponent } from './statut-social-student/list-student/statut-social-list-student.component';
import { InteretEtudiantCreateStudentComponent } from './interet-etudiant-student/create-student/interet-etudiant-create-student.component';
import { InteretEtudiantEditStudentComponent } from './interet-etudiant-student/edit-student/interet-etudiant-edit-student.component';
import { InteretEtudiantViewStudentComponent } from './interet-etudiant-student/view-student/interet-etudiant-view-student.component';
import { InteretEtudiantListStudentComponent } from './interet-etudiant-student/list-student/interet-etudiant-list-student.component';
import { EtatEtudiantScheduleCreateStudentComponent } from './etat-etudiant-schedule-student/create-student/etat-etudiant-schedule-create-student.component';
import { EtatEtudiantScheduleEditStudentComponent } from './etat-etudiant-schedule-student/edit-student/etat-etudiant-schedule-edit-student.component';
import { EtatEtudiantScheduleViewStudentComponent } from './etat-etudiant-schedule-student/view-student/etat-etudiant-schedule-view-student.component';
import { EtatEtudiantScheduleListStudentComponent } from './etat-etudiant-schedule-student/list-student/etat-etudiant-schedule-list-student.component';
import { LangueCreateStudentComponent } from './langue-student/create-student/langue-create-student.component';
import { LangueEditStudentComponent } from './langue-student/edit-student/langue-edit-student.component';
import { LangueViewStudentComponent } from './langue-student/view-student/langue-view-student.component';
import { LangueListStudentComponent } from './langue-student/list-student/langue-list-student.component';
import { InscriptionCreateStudentComponent } from './inscription-student/create-student/inscription-create-student.component';
import { InscriptionEditStudentComponent } from './inscription-student/edit-student/inscription-edit-student.component';
import { InscriptionViewStudentComponent } from './inscription-student/view-student/inscription-view-student.component';
import { InscriptionListStudentComponent } from './inscription-student/list-student/inscription-list-student.component';
import { InviteStudentCreateStudentComponent } from './invite-student-student/create-student/invite-student-create-student.component';
import { InviteStudentEditStudentComponent } from './invite-student-student/edit-student/invite-student-edit-student.component';
import { InviteStudentViewStudentComponent } from './invite-student-student/view-student/invite-student-view-student.component';
import { InviteStudentListStudentComponent } from './invite-student-student/list-student/invite-student-list-student.component';
import { PriceCreateStudentComponent } from './price-student/create-student/price-create-student.component';
import { PriceEditStudentComponent } from './price-student/edit-student/price-edit-student.component';
import { PriceViewStudentComponent } from './price-student/view-student/price-view-student.component';
import { PriceListStudentComponent } from './price-student/list-student/price-list-student.component';
import { SkillCreateStudentComponent } from './skill-student/create-student/skill-create-student.component';
import { SkillEditStudentComponent } from './skill-student/edit-student/skill-edit-student.component';
import { SkillViewStudentComponent } from './skill-student/view-student/skill-view-student.component';
import { SkillListStudentComponent } from './skill-student/list-student/skill-list-student.component';
import { PaiementCreateStudentComponent } from './paiement-student/create-student/paiement-create-student.component';
import { PaiementEditStudentComponent } from './paiement-student/edit-student/paiement-edit-student.component';
import { PaiementViewStudentComponent } from './paiement-student/view-student/paiement-view-student.component';
import { PaiementListStudentComponent } from './paiement-student/list-student/paiement-list-student.component';
import { EtudiantCoursCreateStudentComponent } from './etudiant-cours-student/create-student/etudiant-cours-create-student.component';
import { EtudiantCoursEditStudentComponent } from './etudiant-cours-student/edit-student/etudiant-cours-edit-student.component';
import { EtudiantCoursViewStudentComponent } from './etudiant-cours-student/view-student/etudiant-cours-view-student.component';
import { EtudiantCoursListStudentComponent } from './etudiant-cours-student/list-student/etudiant-cours-list-student.component';
import { GroupeEtudiantCreateStudentComponent } from './groupe-etudiant-student/create-student/groupe-etudiant-create-student.component';
import { GroupeEtudiantEditStudentComponent } from './groupe-etudiant-student/edit-student/groupe-etudiant-edit-student.component';
import { GroupeEtudiantViewStudentComponent } from './groupe-etudiant-student/view-student/groupe-etudiant-view-student.component';
import { GroupeEtudiantListStudentComponent } from './groupe-etudiant-student/list-student/groupe-etudiant-list-student.component';
import { DictionaryCreateStudentComponent } from './dictionary-student/create-student/dictionary-create-student.component';
import { DictionaryEditStudentComponent } from './dictionary-student/edit-student/dictionary-edit-student.component';
import { DictionaryViewStudentComponent } from './dictionary-student/view-student/dictionary-view-student.component';
import { DictionaryListStudentComponent } from './dictionary-student/list-student/dictionary-list-student.component';
import { EtatEtudiantCreateStudentComponent } from './etat-etudiant-student/create-student/etat-etudiant-create-student.component';
import { EtatEtudiantEditStudentComponent } from './etat-etudiant-student/edit-student/etat-etudiant-edit-student.component';
import { EtatEtudiantViewStudentComponent } from './etat-etudiant-student/view-student/etat-etudiant-view-student.component';
import { EtatEtudiantListStudentComponent } from './etat-etudiant-student/list-student/etat-etudiant-list-student.component';
import { GroupeEtudeCreateStudentComponent } from './groupe-etude-student/create-student/groupe-etude-create-student.component';
import { GroupeEtudeEditStudentComponent } from './groupe-etude-student/edit-student/groupe-etude-edit-student.component';
import { GroupeEtudeViewStudentComponent } from './groupe-etude-student/view-student/groupe-etude-view-student.component';
import { GroupeEtudeListStudentComponent } from './groupe-etude-student/list-student/groupe-etude-list-student.component';
import { EtudiantReviewCreateStudentComponent } from './etudiant-review-student/create-student/etudiant-review-create-student.component';
import { EtudiantReviewEditStudentComponent } from './etudiant-review-student/edit-student/etudiant-review-edit-student.component';
import { EtudiantReviewViewStudentComponent } from './etudiant-review-student/view-student/etudiant-review-view-student.component';
import { EtudiantReviewListStudentComponent } from './etudiant-review-student/list-student/etudiant-review-list-student.component';
import { EtudiantCreateStudentComponent } from './etudiant-student/create-student/etudiant-create-student.component';
import { EtudiantEditStudentComponent } from './etudiant-student/edit-student/etudiant-edit-student.component';
import { EtudiantViewStudentComponent } from './etudiant-student/view-student/etudiant-view-student.component';
import { EtudiantListStudentComponent } from './etudiant-student/list-student/etudiant-list-student.component';
import { ConfirmationTokenCreateStudentComponent } from './confirmation-token-student/create-student/confirmation-token-create-student.component';
import { ConfirmationTokenEditStudentComponent } from './confirmation-token-student/edit-student/confirmation-token-edit-student.component';
import { ConfirmationTokenViewStudentComponent } from './confirmation-token-student/view-student/confirmation-token-view-student.component';
import { ConfirmationTokenListStudentComponent } from './confirmation-token-student/list-student/confirmation-token-list-student.component';
import { TeacherLocalityCreateStudentComponent } from './teacher-locality-student/create-student/teacher-locality-create-student.component';
import { TeacherLocalityEditStudentComponent } from './teacher-locality-student/edit-student/teacher-locality-edit-student.component';
import { TeacherLocalityViewStudentComponent } from './teacher-locality-student/view-student/teacher-locality-view-student.component';
import { TeacherLocalityListStudentComponent } from './teacher-locality-student/list-student/teacher-locality-list-student.component';
import { EtatInscriptionCreateStudentComponent } from './etat-inscription-student/create-student/etat-inscription-create-student.component';
import { EtatInscriptionEditStudentComponent } from './etat-inscription-student/edit-student/etat-inscription-edit-student.component';
import { EtatInscriptionViewStudentComponent } from './etat-inscription-student/view-student/etat-inscription-view-student.component';
import { EtatInscriptionListStudentComponent } from './etat-inscription-student/list-student/etat-inscription-list-student.component';
import { ProfReviewCreateStudentComponent } from './prof-review-student/create-student/prof-review-create-student.component';
import { ProfReviewEditStudentComponent } from './prof-review-student/edit-student/prof-review-edit-student.component';
import { ProfReviewViewStudentComponent } from './prof-review-student/view-student/prof-review-view-student.component';
import { ProfReviewListStudentComponent } from './prof-review-student/list-student/prof-review-list-student.component';

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

    NiveauEtudeCreateStudentComponent,
    NiveauEtudeListStudentComponent,
    NiveauEtudeViewStudentComponent,
    NiveauEtudeEditStudentComponent,
    PackStudentCreateStudentComponent,
    PackStudentListStudentComponent,
    PackStudentViewStudentComponent,
    PackStudentEditStudentComponent,
    FonctionCreateStudentComponent,
    FonctionListStudentComponent,
    FonctionViewStudentComponent,
    FonctionEditStudentComponent,
    StatutSocialCreateStudentComponent,
    StatutSocialListStudentComponent,
    StatutSocialViewStudentComponent,
    StatutSocialEditStudentComponent,
    InteretEtudiantCreateStudentComponent,
    InteretEtudiantListStudentComponent,
    InteretEtudiantViewStudentComponent,
    InteretEtudiantEditStudentComponent,
    EtatEtudiantScheduleCreateStudentComponent,
    EtatEtudiantScheduleListStudentComponent,
    EtatEtudiantScheduleViewStudentComponent,
    EtatEtudiantScheduleEditStudentComponent,
    LangueCreateStudentComponent,
    LangueListStudentComponent,
    LangueViewStudentComponent,
    LangueEditStudentComponent,
    InscriptionCreateStudentComponent,
    InscriptionListStudentComponent,
    InscriptionViewStudentComponent,
    InscriptionEditStudentComponent,
    InviteStudentCreateStudentComponent,
    InviteStudentListStudentComponent,
    InviteStudentViewStudentComponent,
    InviteStudentEditStudentComponent,
    PriceCreateStudentComponent,
    PriceListStudentComponent,
    PriceViewStudentComponent,
    PriceEditStudentComponent,
    SkillCreateStudentComponent,
    SkillListStudentComponent,
    SkillViewStudentComponent,
    SkillEditStudentComponent,
    PaiementCreateStudentComponent,
    PaiementListStudentComponent,
    PaiementViewStudentComponent,
    PaiementEditStudentComponent,
    EtudiantCoursCreateStudentComponent,
    EtudiantCoursListStudentComponent,
    EtudiantCoursViewStudentComponent,
    EtudiantCoursEditStudentComponent,
    GroupeEtudiantCreateStudentComponent,
    GroupeEtudiantListStudentComponent,
    GroupeEtudiantViewStudentComponent,
    GroupeEtudiantEditStudentComponent,
    DictionaryCreateStudentComponent,
    DictionaryListStudentComponent,
    DictionaryViewStudentComponent,
    DictionaryEditStudentComponent,
    EtatEtudiantCreateStudentComponent,
    EtatEtudiantListStudentComponent,
    EtatEtudiantViewStudentComponent,
    EtatEtudiantEditStudentComponent,
    GroupeEtudeCreateStudentComponent,
    GroupeEtudeListStudentComponent,
    GroupeEtudeViewStudentComponent,
    GroupeEtudeEditStudentComponent,
    EtudiantReviewCreateStudentComponent,
    EtudiantReviewListStudentComponent,
    EtudiantReviewViewStudentComponent,
    EtudiantReviewEditStudentComponent,
    EtudiantCreateStudentComponent,
    EtudiantListStudentComponent,
    EtudiantViewStudentComponent,
    EtudiantEditStudentComponent,
    ConfirmationTokenCreateStudentComponent,
    ConfirmationTokenListStudentComponent,
    ConfirmationTokenViewStudentComponent,
    ConfirmationTokenEditStudentComponent,
    TeacherLocalityCreateStudentComponent,
    TeacherLocalityListStudentComponent,
    TeacherLocalityViewStudentComponent,
    TeacherLocalityEditStudentComponent,
    EtatInscriptionCreateStudentComponent,
    EtatInscriptionListStudentComponent,
    EtatInscriptionViewStudentComponent,
    EtatInscriptionEditStudentComponent,
    ProfReviewCreateStudentComponent,
    ProfReviewListStudentComponent,
    ProfReviewViewStudentComponent,
    ProfReviewEditStudentComponent,
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
  NiveauEtudeCreateStudentComponent,
  NiveauEtudeListStudentComponent,
  NiveauEtudeViewStudentComponent,
  NiveauEtudeEditStudentComponent,
  PackStudentCreateStudentComponent,
  PackStudentListStudentComponent,
  PackStudentViewStudentComponent,
  PackStudentEditStudentComponent,
  FonctionCreateStudentComponent,
  FonctionListStudentComponent,
  FonctionViewStudentComponent,
  FonctionEditStudentComponent,
  StatutSocialCreateStudentComponent,
  StatutSocialListStudentComponent,
  StatutSocialViewStudentComponent,
  StatutSocialEditStudentComponent,
  InteretEtudiantCreateStudentComponent,
  InteretEtudiantListStudentComponent,
  InteretEtudiantViewStudentComponent,
  InteretEtudiantEditStudentComponent,
  EtatEtudiantScheduleCreateStudentComponent,
  EtatEtudiantScheduleListStudentComponent,
  EtatEtudiantScheduleViewStudentComponent,
  EtatEtudiantScheduleEditStudentComponent,
  LangueCreateStudentComponent,
  LangueListStudentComponent,
  LangueViewStudentComponent,
  LangueEditStudentComponent,
  InscriptionCreateStudentComponent,
  InscriptionListStudentComponent,
  InscriptionViewStudentComponent,
  InscriptionEditStudentComponent,
  InviteStudentCreateStudentComponent,
  InviteStudentListStudentComponent,
  InviteStudentViewStudentComponent,
  InviteStudentEditStudentComponent,
  PriceCreateStudentComponent,
  PriceListStudentComponent,
  PriceViewStudentComponent,
  PriceEditStudentComponent,
  SkillCreateStudentComponent,
  SkillListStudentComponent,
  SkillViewStudentComponent,
  SkillEditStudentComponent,
  PaiementCreateStudentComponent,
  PaiementListStudentComponent,
  PaiementViewStudentComponent,
  PaiementEditStudentComponent,
  EtudiantCoursCreateStudentComponent,
  EtudiantCoursListStudentComponent,
  EtudiantCoursViewStudentComponent,
  EtudiantCoursEditStudentComponent,
  GroupeEtudiantCreateStudentComponent,
  GroupeEtudiantListStudentComponent,
  GroupeEtudiantViewStudentComponent,
  GroupeEtudiantEditStudentComponent,
  DictionaryCreateStudentComponent,
  DictionaryListStudentComponent,
  DictionaryViewStudentComponent,
  DictionaryEditStudentComponent,
  EtatEtudiantCreateStudentComponent,
  EtatEtudiantListStudentComponent,
  EtatEtudiantViewStudentComponent,
  EtatEtudiantEditStudentComponent,
  GroupeEtudeCreateStudentComponent,
  GroupeEtudeListStudentComponent,
  GroupeEtudeViewStudentComponent,
  GroupeEtudeEditStudentComponent,
  EtudiantReviewCreateStudentComponent,
  EtudiantReviewListStudentComponent,
  EtudiantReviewViewStudentComponent,
  EtudiantReviewEditStudentComponent,
  EtudiantCreateStudentComponent,
  EtudiantListStudentComponent,
  EtudiantViewStudentComponent,
  EtudiantEditStudentComponent,
  ConfirmationTokenCreateStudentComponent,
  ConfirmationTokenListStudentComponent,
  ConfirmationTokenViewStudentComponent,
  ConfirmationTokenEditStudentComponent,
  TeacherLocalityCreateStudentComponent,
  TeacherLocalityListStudentComponent,
  TeacherLocalityViewStudentComponent,
  TeacherLocalityEditStudentComponent,
  EtatInscriptionCreateStudentComponent,
  EtatInscriptionListStudentComponent,
  EtatInscriptionViewStudentComponent,
  EtatInscriptionEditStudentComponent,
  ProfReviewCreateStudentComponent,
  ProfReviewListStudentComponent,
  ProfReviewViewStudentComponent,
  ProfReviewEditStudentComponent,
  ],
  entryComponents: [],
})
export class InscriptionStudentModule { }