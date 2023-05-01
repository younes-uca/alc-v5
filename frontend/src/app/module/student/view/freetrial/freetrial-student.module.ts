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

import { FreeTrialConfigurationCreateStudentComponent } from './free-trial-configuration-student/create-student/free-trial-configuration-create-student.component';
import { FreeTrialConfigurationEditStudentComponent } from './free-trial-configuration-student/edit-student/free-trial-configuration-edit-student.component';
import { FreeTrialConfigurationViewStudentComponent } from './free-trial-configuration-student/view-student/free-trial-configuration-view-student.component';
import { FreeTrialConfigurationListStudentComponent } from './free-trial-configuration-student/list-student/free-trial-configuration-list-student.component';
import { StatutFreeTrialCreateStudentComponent } from './statut-free-trial-student/create-student/statut-free-trial-create-student.component';
import { StatutFreeTrialEditStudentComponent } from './statut-free-trial-student/edit-student/statut-free-trial-edit-student.component';
import { StatutFreeTrialViewStudentComponent } from './statut-free-trial-student/view-student/statut-free-trial-view-student.component';
import { StatutFreeTrialListStudentComponent } from './statut-free-trial-student/list-student/statut-free-trial-list-student.component';
import { FreeTrialCreateStudentComponent } from './free-trial-student/create-student/free-trial-create-student.component';
import { FreeTrialEditStudentComponent } from './free-trial-student/edit-student/free-trial-edit-student.component';
import { FreeTrialViewStudentComponent } from './free-trial-student/view-student/free-trial-view-student.component';
import { FreeTrialListStudentComponent } from './free-trial-student/list-student/free-trial-list-student.component';
import { FreeTrialStudentWhatsTemplateCreateStudentComponent } from './free-trial-student-whats-template-student/create-student/free-trial-student-whats-template-create-student.component';
import { FreeTrialStudentWhatsTemplateEditStudentComponent } from './free-trial-student-whats-template-student/edit-student/free-trial-student-whats-template-edit-student.component';
import { FreeTrialStudentWhatsTemplateViewStudentComponent } from './free-trial-student-whats-template-student/view-student/free-trial-student-whats-template-view-student.component';
import { FreeTrialStudentWhatsTemplateListStudentComponent } from './free-trial-student-whats-template-student/list-student/free-trial-student-whats-template-list-student.component';
import { FreeTrialTeacherEmailTemplateCreateStudentComponent } from './free-trial-teacher-email-template-student/create-student/free-trial-teacher-email-template-create-student.component';
import { FreeTrialTeacherEmailTemplateEditStudentComponent } from './free-trial-teacher-email-template-student/edit-student/free-trial-teacher-email-template-edit-student.component';
import { FreeTrialTeacherEmailTemplateViewStudentComponent } from './free-trial-teacher-email-template-student/view-student/free-trial-teacher-email-template-view-student.component';
import { FreeTrialTeacherEmailTemplateListStudentComponent } from './free-trial-teacher-email-template-student/list-student/free-trial-teacher-email-template-list-student.component';
import { ServicesCreateStudentComponent } from './services-student/create-student/services-create-student.component';
import { ServicesEditStudentComponent } from './services-student/edit-student/services-edit-student.component';
import { ServicesViewStudentComponent } from './services-student/view-student/services-view-student.component';
import { ServicesListStudentComponent } from './services-student/list-student/services-list-student.component';
import { FreeTrialformuleCreateStudentComponent } from './free-trialformule-student/create-student/free-trialformule-create-student.component';
import { FreeTrialformuleEditStudentComponent } from './free-trialformule-student/edit-student/free-trialformule-edit-student.component';
import { FreeTrialformuleViewStudentComponent } from './free-trialformule-student/view-student/free-trialformule-view-student.component';
import { FreeTrialformuleListStudentComponent } from './free-trialformule-student/list-student/free-trialformule-list-student.component';
import { FreeTrialTeacherWhatsTemplateCreateStudentComponent } from './free-trial-teacher-whats-template-student/create-student/free-trial-teacher-whats-template-create-student.component';
import { FreeTrialTeacherWhatsTemplateEditStudentComponent } from './free-trial-teacher-whats-template-student/edit-student/free-trial-teacher-whats-template-edit-student.component';
import { FreeTrialTeacherWhatsTemplateViewStudentComponent } from './free-trial-teacher-whats-template-student/view-student/free-trial-teacher-whats-template-view-student.component';
import { FreeTrialTeacherWhatsTemplateListStudentComponent } from './free-trial-teacher-whats-template-student/list-student/free-trial-teacher-whats-template-list-student.component';
import { FreeTrialStudentEmailTemplateCreateStudentComponent } from './free-trial-student-email-template-student/create-student/free-trial-student-email-template-create-student.component';
import { FreeTrialStudentEmailTemplateEditStudentComponent } from './free-trial-student-email-template-student/edit-student/free-trial-student-email-template-edit-student.component';
import { FreeTrialStudentEmailTemplateViewStudentComponent } from './free-trial-student-email-template-student/view-student/free-trial-student-email-template-view-student.component';
import { FreeTrialStudentEmailTemplateListStudentComponent } from './free-trial-student-email-template-student/list-student/free-trial-student-email-template-list-student.component';
import { FreeTrialDetailCreateStudentComponent } from './free-trial-detail-student/create-student/free-trial-detail-create-student.component';
import { FreeTrialDetailEditStudentComponent } from './free-trial-detail-student/edit-student/free-trial-detail-edit-student.component';
import { FreeTrialDetailViewStudentComponent } from './free-trial-detail-student/view-student/free-trial-detail-view-student.component';
import { FreeTrialDetailListStudentComponent } from './free-trial-detail-student/list-student/free-trial-detail-list-student.component';

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

    FreeTrialConfigurationCreateStudentComponent,
    FreeTrialConfigurationListStudentComponent,
    FreeTrialConfigurationViewStudentComponent,
    FreeTrialConfigurationEditStudentComponent,
    StatutFreeTrialCreateStudentComponent,
    StatutFreeTrialListStudentComponent,
    StatutFreeTrialViewStudentComponent,
    StatutFreeTrialEditStudentComponent,
    FreeTrialCreateStudentComponent,
    FreeTrialListStudentComponent,
    FreeTrialViewStudentComponent,
    FreeTrialEditStudentComponent,
    FreeTrialStudentWhatsTemplateCreateStudentComponent,
    FreeTrialStudentWhatsTemplateListStudentComponent,
    FreeTrialStudentWhatsTemplateViewStudentComponent,
    FreeTrialStudentWhatsTemplateEditStudentComponent,
    FreeTrialTeacherEmailTemplateCreateStudentComponent,
    FreeTrialTeacherEmailTemplateListStudentComponent,
    FreeTrialTeacherEmailTemplateViewStudentComponent,
    FreeTrialTeacherEmailTemplateEditStudentComponent,
    ServicesCreateStudentComponent,
    ServicesListStudentComponent,
    ServicesViewStudentComponent,
    ServicesEditStudentComponent,
    FreeTrialformuleCreateStudentComponent,
    FreeTrialformuleListStudentComponent,
    FreeTrialformuleViewStudentComponent,
    FreeTrialformuleEditStudentComponent,
    FreeTrialTeacherWhatsTemplateCreateStudentComponent,
    FreeTrialTeacherWhatsTemplateListStudentComponent,
    FreeTrialTeacherWhatsTemplateViewStudentComponent,
    FreeTrialTeacherWhatsTemplateEditStudentComponent,
    FreeTrialStudentEmailTemplateCreateStudentComponent,
    FreeTrialStudentEmailTemplateListStudentComponent,
    FreeTrialStudentEmailTemplateViewStudentComponent,
    FreeTrialStudentEmailTemplateEditStudentComponent,
    FreeTrialDetailCreateStudentComponent,
    FreeTrialDetailListStudentComponent,
    FreeTrialDetailViewStudentComponent,
    FreeTrialDetailEditStudentComponent,
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
  FreeTrialConfigurationCreateStudentComponent,
  FreeTrialConfigurationListStudentComponent,
  FreeTrialConfigurationViewStudentComponent,
  FreeTrialConfigurationEditStudentComponent,
  StatutFreeTrialCreateStudentComponent,
  StatutFreeTrialListStudentComponent,
  StatutFreeTrialViewStudentComponent,
  StatutFreeTrialEditStudentComponent,
  FreeTrialCreateStudentComponent,
  FreeTrialListStudentComponent,
  FreeTrialViewStudentComponent,
  FreeTrialEditStudentComponent,
  FreeTrialStudentWhatsTemplateCreateStudentComponent,
  FreeTrialStudentWhatsTemplateListStudentComponent,
  FreeTrialStudentWhatsTemplateViewStudentComponent,
  FreeTrialStudentWhatsTemplateEditStudentComponent,
  FreeTrialTeacherEmailTemplateCreateStudentComponent,
  FreeTrialTeacherEmailTemplateListStudentComponent,
  FreeTrialTeacherEmailTemplateViewStudentComponent,
  FreeTrialTeacherEmailTemplateEditStudentComponent,
  ServicesCreateStudentComponent,
  ServicesListStudentComponent,
  ServicesViewStudentComponent,
  ServicesEditStudentComponent,
  FreeTrialformuleCreateStudentComponent,
  FreeTrialformuleListStudentComponent,
  FreeTrialformuleViewStudentComponent,
  FreeTrialformuleEditStudentComponent,
  FreeTrialTeacherWhatsTemplateCreateStudentComponent,
  FreeTrialTeacherWhatsTemplateListStudentComponent,
  FreeTrialTeacherWhatsTemplateViewStudentComponent,
  FreeTrialTeacherWhatsTemplateEditStudentComponent,
  FreeTrialStudentEmailTemplateCreateStudentComponent,
  FreeTrialStudentEmailTemplateListStudentComponent,
  FreeTrialStudentEmailTemplateViewStudentComponent,
  FreeTrialStudentEmailTemplateEditStudentComponent,
  FreeTrialDetailCreateStudentComponent,
  FreeTrialDetailListStudentComponent,
  FreeTrialDetailViewStudentComponent,
  FreeTrialDetailEditStudentComponent,
  ],
  entryComponents: [],
})
export class FreetrialStudentModule { }