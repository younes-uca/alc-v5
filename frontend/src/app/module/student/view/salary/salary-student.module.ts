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

import { WorkloadBonusProfCreateStudentComponent } from './workload-bonus-prof-student/create-student/workload-bonus-prof-create-student.component';
import { WorkloadBonusProfEditStudentComponent } from './workload-bonus-prof-student/edit-student/workload-bonus-prof-edit-student.component';
import { WorkloadBonusProfViewStudentComponent } from './workload-bonus-prof-student/view-student/workload-bonus-prof-view-student.component';
import { WorkloadBonusProfListStudentComponent } from './workload-bonus-prof-student/list-student/workload-bonus-prof-list-student.component';
import { SalaryCreateStudentComponent } from './salary-student/create-student/salary-create-student.component';
import { SalaryEditStudentComponent } from './salary-student/edit-student/salary-edit-student.component';
import { SalaryViewStudentComponent } from './salary-student/view-student/salary-view-student.component';
import { SalaryListStudentComponent } from './salary-student/list-student/salary-list-student.component';
import { WorkloadBonusCreateStudentComponent } from './workload-bonus-student/create-student/workload-bonus-create-student.component';
import { WorkloadBonusEditStudentComponent } from './workload-bonus-student/edit-student/workload-bonus-edit-student.component';
import { WorkloadBonusViewStudentComponent } from './workload-bonus-student/view-student/workload-bonus-view-student.component';
import { WorkloadBonusListStudentComponent } from './workload-bonus-student/list-student/workload-bonus-list-student.component';

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

    WorkloadBonusProfCreateStudentComponent,
    WorkloadBonusProfListStudentComponent,
    WorkloadBonusProfViewStudentComponent,
    WorkloadBonusProfEditStudentComponent,
    SalaryCreateStudentComponent,
    SalaryListStudentComponent,
    SalaryViewStudentComponent,
    SalaryEditStudentComponent,
    WorkloadBonusCreateStudentComponent,
    WorkloadBonusListStudentComponent,
    WorkloadBonusViewStudentComponent,
    WorkloadBonusEditStudentComponent,
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
  WorkloadBonusProfCreateStudentComponent,
  WorkloadBonusProfListStudentComponent,
  WorkloadBonusProfViewStudentComponent,
  WorkloadBonusProfEditStudentComponent,
  SalaryCreateStudentComponent,
  SalaryListStudentComponent,
  SalaryViewStudentComponent,
  SalaryEditStudentComponent,
  WorkloadBonusCreateStudentComponent,
  WorkloadBonusListStudentComponent,
  WorkloadBonusViewStudentComponent,
  WorkloadBonusEditStudentComponent,
  ],
  entryComponents: [],
})
export class SalaryStudentModule { }