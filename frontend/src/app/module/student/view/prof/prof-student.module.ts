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

import { CalendrierProfCreateStudentComponent } from './calendrier-prof-student/create-student/calendrier-prof-create-student.component';
import { CalendrierProfEditStudentComponent } from './calendrier-prof-student/edit-student/calendrier-prof-edit-student.component';
import { CalendrierProfViewStudentComponent } from './calendrier-prof-student/view-student/calendrier-prof-view-student.component';
import { CalendrierProfListStudentComponent } from './calendrier-prof-student/list-student/calendrier-prof-list-student.component';
import { TypeTeacherCreateStudentComponent } from './type-teacher-student/create-student/type-teacher-create-student.component';
import { TypeTeacherEditStudentComponent } from './type-teacher-student/edit-student/type-teacher-edit-student.component';
import { TypeTeacherViewStudentComponent } from './type-teacher-student/view-student/type-teacher-view-student.component';
import { TypeTeacherListStudentComponent } from './type-teacher-student/list-student/type-teacher-list-student.component';
import { TrancheHoraireProfCreateStudentComponent } from './tranche-horaire-prof-student/create-student/tranche-horaire-prof-create-student.component';
import { TrancheHoraireProfEditStudentComponent } from './tranche-horaire-prof-student/edit-student/tranche-horaire-prof-edit-student.component';
import { TrancheHoraireProfViewStudentComponent } from './tranche-horaire-prof-student/view-student/tranche-horaire-prof-view-student.component';
import { TrancheHoraireProfListStudentComponent } from './tranche-horaire-prof-student/list-student/tranche-horaire-prof-list-student.component';
import { ProfCreateStudentComponent } from './prof-student/create-student/prof-create-student.component';
import { ProfEditStudentComponent } from './prof-student/edit-student/prof-edit-student.component';
import { ProfViewStudentComponent } from './prof-student/view-student/prof-view-student.component';
import { ProfListStudentComponent } from './prof-student/list-student/prof-list-student.component';
import { ScheduleProfCreateStudentComponent } from './schedule-prof-student/create-student/schedule-prof-create-student.component';
import { ScheduleProfEditStudentComponent } from './schedule-prof-student/edit-student/schedule-prof-edit-student.component';
import { ScheduleProfViewStudentComponent } from './schedule-prof-student/view-student/schedule-prof-view-student.component';
import { ScheduleProfListStudentComponent } from './schedule-prof-student/list-student/schedule-prof-list-student.component';
import { ClassAverageBonusProfCreateStudentComponent } from './class-average-bonus-prof-student/create-student/class-average-bonus-prof-create-student.component';
import { ClassAverageBonusProfEditStudentComponent } from './class-average-bonus-prof-student/edit-student/class-average-bonus-prof-edit-student.component';
import { ClassAverageBonusProfViewStudentComponent } from './class-average-bonus-prof-student/view-student/class-average-bonus-prof-view-student.component';
import { ClassAverageBonusProfListStudentComponent } from './class-average-bonus-prof-student/list-student/class-average-bonus-prof-list-student.component';
import { CategorieProfCreateStudentComponent } from './categorie-prof-student/create-student/categorie-prof-create-student.component';
import { CategorieProfEditStudentComponent } from './categorie-prof-student/edit-student/categorie-prof-edit-student.component';
import { CategorieProfViewStudentComponent } from './categorie-prof-student/view-student/categorie-prof-view-student.component';
import { CategorieProfListStudentComponent } from './categorie-prof-student/list-student/categorie-prof-list-student.component';

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

    CalendrierProfCreateStudentComponent,
    CalendrierProfListStudentComponent,
    CalendrierProfViewStudentComponent,
    CalendrierProfEditStudentComponent,
    TypeTeacherCreateStudentComponent,
    TypeTeacherListStudentComponent,
    TypeTeacherViewStudentComponent,
    TypeTeacherEditStudentComponent,
    TrancheHoraireProfCreateStudentComponent,
    TrancheHoraireProfListStudentComponent,
    TrancheHoraireProfViewStudentComponent,
    TrancheHoraireProfEditStudentComponent,
    ProfCreateStudentComponent,
    ProfListStudentComponent,
    ProfViewStudentComponent,
    ProfEditStudentComponent,
    ScheduleProfCreateStudentComponent,
    ScheduleProfListStudentComponent,
    ScheduleProfViewStudentComponent,
    ScheduleProfEditStudentComponent,
    ClassAverageBonusProfCreateStudentComponent,
    ClassAverageBonusProfListStudentComponent,
    ClassAverageBonusProfViewStudentComponent,
    ClassAverageBonusProfEditStudentComponent,
    CategorieProfCreateStudentComponent,
    CategorieProfListStudentComponent,
    CategorieProfViewStudentComponent,
    CategorieProfEditStudentComponent,
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
  CalendrierProfCreateStudentComponent,
  CalendrierProfListStudentComponent,
  CalendrierProfViewStudentComponent,
  CalendrierProfEditStudentComponent,
  TypeTeacherCreateStudentComponent,
  TypeTeacherListStudentComponent,
  TypeTeacherViewStudentComponent,
  TypeTeacherEditStudentComponent,
  TrancheHoraireProfCreateStudentComponent,
  TrancheHoraireProfListStudentComponent,
  TrancheHoraireProfViewStudentComponent,
  TrancheHoraireProfEditStudentComponent,
  ProfCreateStudentComponent,
  ProfListStudentComponent,
  ProfViewStudentComponent,
  ProfEditStudentComponent,
  ScheduleProfCreateStudentComponent,
  ScheduleProfListStudentComponent,
  ScheduleProfViewStudentComponent,
  ScheduleProfEditStudentComponent,
  ClassAverageBonusProfCreateStudentComponent,
  ClassAverageBonusProfListStudentComponent,
  ClassAverageBonusProfViewStudentComponent,
  ClassAverageBonusProfEditStudentComponent,
  CategorieProfCreateStudentComponent,
  CategorieProfListStudentComponent,
  CategorieProfViewStudentComponent,
  CategorieProfEditStudentComponent,
  ],
  entryComponents: [],
})
export class ProfStudentModule { }