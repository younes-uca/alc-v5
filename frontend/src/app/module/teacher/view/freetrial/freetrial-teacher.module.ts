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

import { FreeTrialConfigurationCreateTeacherComponent } from './free-trial-configuration-teacher/create-teacher/free-trial-configuration-create-teacher.component';
import { FreeTrialConfigurationEditTeacherComponent } from './free-trial-configuration-teacher/edit-teacher/free-trial-configuration-edit-teacher.component';
import { FreeTrialConfigurationViewTeacherComponent } from './free-trial-configuration-teacher/view-teacher/free-trial-configuration-view-teacher.component';
import { FreeTrialConfigurationListTeacherComponent } from './free-trial-configuration-teacher/list-teacher/free-trial-configuration-list-teacher.component';
import { StatutFreeTrialCreateTeacherComponent } from './statut-free-trial-teacher/create-teacher/statut-free-trial-create-teacher.component';
import { StatutFreeTrialEditTeacherComponent } from './statut-free-trial-teacher/edit-teacher/statut-free-trial-edit-teacher.component';
import { StatutFreeTrialViewTeacherComponent } from './statut-free-trial-teacher/view-teacher/statut-free-trial-view-teacher.component';
import { StatutFreeTrialListTeacherComponent } from './statut-free-trial-teacher/list-teacher/statut-free-trial-list-teacher.component';
import { FreeTrialCreateTeacherComponent } from './free-trial-teacher/create-teacher/free-trial-create-teacher.component';
import { FreeTrialEditTeacherComponent } from './free-trial-teacher/edit-teacher/free-trial-edit-teacher.component';
import { FreeTrialViewTeacherComponent } from './free-trial-teacher/view-teacher/free-trial-view-teacher.component';
import { FreeTrialListTeacherComponent } from './free-trial-teacher/list-teacher/free-trial-list-teacher.component';
import { FreeTrialStudentWhatsTemplateCreateTeacherComponent } from './free-trial-student-whats-template-teacher/create-teacher/free-trial-student-whats-template-create-teacher.component';
import { FreeTrialStudentWhatsTemplateEditTeacherComponent } from './free-trial-student-whats-template-teacher/edit-teacher/free-trial-student-whats-template-edit-teacher.component';
import { FreeTrialStudentWhatsTemplateViewTeacherComponent } from './free-trial-student-whats-template-teacher/view-teacher/free-trial-student-whats-template-view-teacher.component';
import { FreeTrialStudentWhatsTemplateListTeacherComponent } from './free-trial-student-whats-template-teacher/list-teacher/free-trial-student-whats-template-list-teacher.component';
import { FreeTrialTeacherEmailTemplateCreateTeacherComponent } from './free-trial-teacher-email-template-teacher/create-teacher/free-trial-teacher-email-template-create-teacher.component';
import { FreeTrialTeacherEmailTemplateEditTeacherComponent } from './free-trial-teacher-email-template-teacher/edit-teacher/free-trial-teacher-email-template-edit-teacher.component';
import { FreeTrialTeacherEmailTemplateViewTeacherComponent } from './free-trial-teacher-email-template-teacher/view-teacher/free-trial-teacher-email-template-view-teacher.component';
import { FreeTrialTeacherEmailTemplateListTeacherComponent } from './free-trial-teacher-email-template-teacher/list-teacher/free-trial-teacher-email-template-list-teacher.component';
import { ServicesCreateTeacherComponent } from './services-teacher/create-teacher/services-create-teacher.component';
import { ServicesEditTeacherComponent } from './services-teacher/edit-teacher/services-edit-teacher.component';
import { ServicesViewTeacherComponent } from './services-teacher/view-teacher/services-view-teacher.component';
import { ServicesListTeacherComponent } from './services-teacher/list-teacher/services-list-teacher.component';
import { FreeTrialformuleCreateTeacherComponent } from './free-trialformule-teacher/create-teacher/free-trialformule-create-teacher.component';
import { FreeTrialformuleEditTeacherComponent } from './free-trialformule-teacher/edit-teacher/free-trialformule-edit-teacher.component';
import { FreeTrialformuleViewTeacherComponent } from './free-trialformule-teacher/view-teacher/free-trialformule-view-teacher.component';
import { FreeTrialformuleListTeacherComponent } from './free-trialformule-teacher/list-teacher/free-trialformule-list-teacher.component';
import { FreeTrialTeacherWhatsTemplateCreateTeacherComponent } from './free-trial-teacher-whats-template-teacher/create-teacher/free-trial-teacher-whats-template-create-teacher.component';
import { FreeTrialTeacherWhatsTemplateEditTeacherComponent } from './free-trial-teacher-whats-template-teacher/edit-teacher/free-trial-teacher-whats-template-edit-teacher.component';
import { FreeTrialTeacherWhatsTemplateViewTeacherComponent } from './free-trial-teacher-whats-template-teacher/view-teacher/free-trial-teacher-whats-template-view-teacher.component';
import { FreeTrialTeacherWhatsTemplateListTeacherComponent } from './free-trial-teacher-whats-template-teacher/list-teacher/free-trial-teacher-whats-template-list-teacher.component';
import { FreeTrialStudentEmailTemplateCreateTeacherComponent } from './free-trial-student-email-template-teacher/create-teacher/free-trial-student-email-template-create-teacher.component';
import { FreeTrialStudentEmailTemplateEditTeacherComponent } from './free-trial-student-email-template-teacher/edit-teacher/free-trial-student-email-template-edit-teacher.component';
import { FreeTrialStudentEmailTemplateViewTeacherComponent } from './free-trial-student-email-template-teacher/view-teacher/free-trial-student-email-template-view-teacher.component';
import { FreeTrialStudentEmailTemplateListTeacherComponent } from './free-trial-student-email-template-teacher/list-teacher/free-trial-student-email-template-list-teacher.component';
import { FreeTrialDetailCreateTeacherComponent } from './free-trial-detail-teacher/create-teacher/free-trial-detail-create-teacher.component';
import { FreeTrialDetailEditTeacherComponent } from './free-trial-detail-teacher/edit-teacher/free-trial-detail-edit-teacher.component';
import { FreeTrialDetailViewTeacherComponent } from './free-trial-detail-teacher/view-teacher/free-trial-detail-view-teacher.component';
import { FreeTrialDetailListTeacherComponent } from './free-trial-detail-teacher/list-teacher/free-trial-detail-list-teacher.component';

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

    FreeTrialConfigurationCreateTeacherComponent,
    FreeTrialConfigurationListTeacherComponent,
    FreeTrialConfigurationViewTeacherComponent,
    FreeTrialConfigurationEditTeacherComponent,
    StatutFreeTrialCreateTeacherComponent,
    StatutFreeTrialListTeacherComponent,
    StatutFreeTrialViewTeacherComponent,
    StatutFreeTrialEditTeacherComponent,
    FreeTrialCreateTeacherComponent,
    FreeTrialListTeacherComponent,
    FreeTrialViewTeacherComponent,
    FreeTrialEditTeacherComponent,
    FreeTrialStudentWhatsTemplateCreateTeacherComponent,
    FreeTrialStudentWhatsTemplateListTeacherComponent,
    FreeTrialStudentWhatsTemplateViewTeacherComponent,
    FreeTrialStudentWhatsTemplateEditTeacherComponent,
    FreeTrialTeacherEmailTemplateCreateTeacherComponent,
    FreeTrialTeacherEmailTemplateListTeacherComponent,
    FreeTrialTeacherEmailTemplateViewTeacherComponent,
    FreeTrialTeacherEmailTemplateEditTeacherComponent,
    ServicesCreateTeacherComponent,
    ServicesListTeacherComponent,
    ServicesViewTeacherComponent,
    ServicesEditTeacherComponent,
    FreeTrialformuleCreateTeacherComponent,
    FreeTrialformuleListTeacherComponent,
    FreeTrialformuleViewTeacherComponent,
    FreeTrialformuleEditTeacherComponent,
    FreeTrialTeacherWhatsTemplateCreateTeacherComponent,
    FreeTrialTeacherWhatsTemplateListTeacherComponent,
    FreeTrialTeacherWhatsTemplateViewTeacherComponent,
    FreeTrialTeacherWhatsTemplateEditTeacherComponent,
    FreeTrialStudentEmailTemplateCreateTeacherComponent,
    FreeTrialStudentEmailTemplateListTeacherComponent,
    FreeTrialStudentEmailTemplateViewTeacherComponent,
    FreeTrialStudentEmailTemplateEditTeacherComponent,
    FreeTrialDetailCreateTeacherComponent,
    FreeTrialDetailListTeacherComponent,
    FreeTrialDetailViewTeacherComponent,
    FreeTrialDetailEditTeacherComponent,
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
  FreeTrialConfigurationCreateTeacherComponent,
  FreeTrialConfigurationListTeacherComponent,
  FreeTrialConfigurationViewTeacherComponent,
  FreeTrialConfigurationEditTeacherComponent,
  StatutFreeTrialCreateTeacherComponent,
  StatutFreeTrialListTeacherComponent,
  StatutFreeTrialViewTeacherComponent,
  StatutFreeTrialEditTeacherComponent,
  FreeTrialCreateTeacherComponent,
  FreeTrialListTeacherComponent,
  FreeTrialViewTeacherComponent,
  FreeTrialEditTeacherComponent,
  FreeTrialStudentWhatsTemplateCreateTeacherComponent,
  FreeTrialStudentWhatsTemplateListTeacherComponent,
  FreeTrialStudentWhatsTemplateViewTeacherComponent,
  FreeTrialStudentWhatsTemplateEditTeacherComponent,
  FreeTrialTeacherEmailTemplateCreateTeacherComponent,
  FreeTrialTeacherEmailTemplateListTeacherComponent,
  FreeTrialTeacherEmailTemplateViewTeacherComponent,
  FreeTrialTeacherEmailTemplateEditTeacherComponent,
  ServicesCreateTeacherComponent,
  ServicesListTeacherComponent,
  ServicesViewTeacherComponent,
  ServicesEditTeacherComponent,
  FreeTrialformuleCreateTeacherComponent,
  FreeTrialformuleListTeacherComponent,
  FreeTrialformuleViewTeacherComponent,
  FreeTrialformuleEditTeacherComponent,
  FreeTrialTeacherWhatsTemplateCreateTeacherComponent,
  FreeTrialTeacherWhatsTemplateListTeacherComponent,
  FreeTrialTeacherWhatsTemplateViewTeacherComponent,
  FreeTrialTeacherWhatsTemplateEditTeacherComponent,
  FreeTrialStudentEmailTemplateCreateTeacherComponent,
  FreeTrialStudentEmailTemplateListTeacherComponent,
  FreeTrialStudentEmailTemplateViewTeacherComponent,
  FreeTrialStudentEmailTemplateEditTeacherComponent,
  FreeTrialDetailCreateTeacherComponent,
  FreeTrialDetailListTeacherComponent,
  FreeTrialDetailViewTeacherComponent,
  FreeTrialDetailEditTeacherComponent,
  ],
  entryComponents: [],
})
export class FreetrialTeacherModule { }