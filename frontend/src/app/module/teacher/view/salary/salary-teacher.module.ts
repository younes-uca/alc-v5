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

import { WorkloadBonusProfCreateTeacherComponent } from './workload-bonus-prof-teacher/create-teacher/workload-bonus-prof-create-teacher.component';
import { WorkloadBonusProfEditTeacherComponent } from './workload-bonus-prof-teacher/edit-teacher/workload-bonus-prof-edit-teacher.component';
import { WorkloadBonusProfViewTeacherComponent } from './workload-bonus-prof-teacher/view-teacher/workload-bonus-prof-view-teacher.component';
import { WorkloadBonusProfListTeacherComponent } from './workload-bonus-prof-teacher/list-teacher/workload-bonus-prof-list-teacher.component';
import { SalaryCreateTeacherComponent } from './salary-teacher/create-teacher/salary-create-teacher.component';
import { SalaryEditTeacherComponent } from './salary-teacher/edit-teacher/salary-edit-teacher.component';
import { SalaryViewTeacherComponent } from './salary-teacher/view-teacher/salary-view-teacher.component';
import { SalaryListTeacherComponent } from './salary-teacher/list-teacher/salary-list-teacher.component';
import { WorkloadBonusCreateTeacherComponent } from './workload-bonus-teacher/create-teacher/workload-bonus-create-teacher.component';
import { WorkloadBonusEditTeacherComponent } from './workload-bonus-teacher/edit-teacher/workload-bonus-edit-teacher.component';
import { WorkloadBonusViewTeacherComponent } from './workload-bonus-teacher/view-teacher/workload-bonus-view-teacher.component';
import { WorkloadBonusListTeacherComponent } from './workload-bonus-teacher/list-teacher/workload-bonus-list-teacher.component';

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

    WorkloadBonusProfCreateTeacherComponent,
    WorkloadBonusProfListTeacherComponent,
    WorkloadBonusProfViewTeacherComponent,
    WorkloadBonusProfEditTeacherComponent,
    SalaryCreateTeacherComponent,
    SalaryListTeacherComponent,
    SalaryViewTeacherComponent,
    SalaryEditTeacherComponent,
    WorkloadBonusCreateTeacherComponent,
    WorkloadBonusListTeacherComponent,
    WorkloadBonusViewTeacherComponent,
    WorkloadBonusEditTeacherComponent,
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
  WorkloadBonusProfCreateTeacherComponent,
  WorkloadBonusProfListTeacherComponent,
  WorkloadBonusProfViewTeacherComponent,
  WorkloadBonusProfEditTeacherComponent,
  SalaryCreateTeacherComponent,
  SalaryListTeacherComponent,
  SalaryViewTeacherComponent,
  SalaryEditTeacherComponent,
  WorkloadBonusCreateTeacherComponent,
  WorkloadBonusListTeacherComponent,
  WorkloadBonusViewTeacherComponent,
  WorkloadBonusEditTeacherComponent,
  ],
  entryComponents: [],
})
export class SalaryTeacherModule { }