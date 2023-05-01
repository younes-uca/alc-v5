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

import { CalendrierProfCreateTeacherComponent } from './calendrier-prof-teacher/create-teacher/calendrier-prof-create-teacher.component';
import { CalendrierProfEditTeacherComponent } from './calendrier-prof-teacher/edit-teacher/calendrier-prof-edit-teacher.component';
import { CalendrierProfViewTeacherComponent } from './calendrier-prof-teacher/view-teacher/calendrier-prof-view-teacher.component';
import { CalendrierProfListTeacherComponent } from './calendrier-prof-teacher/list-teacher/calendrier-prof-list-teacher.component';
import { TypeTeacherCreateTeacherComponent } from './type-teacher-teacher/create-teacher/type-teacher-create-teacher.component';
import { TypeTeacherEditTeacherComponent } from './type-teacher-teacher/edit-teacher/type-teacher-edit-teacher.component';
import { TypeTeacherViewTeacherComponent } from './type-teacher-teacher/view-teacher/type-teacher-view-teacher.component';
import { TypeTeacherListTeacherComponent } from './type-teacher-teacher/list-teacher/type-teacher-list-teacher.component';
import { TrancheHoraireProfCreateTeacherComponent } from './tranche-horaire-prof-teacher/create-teacher/tranche-horaire-prof-create-teacher.component';
import { TrancheHoraireProfEditTeacherComponent } from './tranche-horaire-prof-teacher/edit-teacher/tranche-horaire-prof-edit-teacher.component';
import { TrancheHoraireProfViewTeacherComponent } from './tranche-horaire-prof-teacher/view-teacher/tranche-horaire-prof-view-teacher.component';
import { TrancheHoraireProfListTeacherComponent } from './tranche-horaire-prof-teacher/list-teacher/tranche-horaire-prof-list-teacher.component';
import { ProfCreateTeacherComponent } from './prof-teacher/create-teacher/prof-create-teacher.component';
import { ProfEditTeacherComponent } from './prof-teacher/edit-teacher/prof-edit-teacher.component';
import { ProfViewTeacherComponent } from './prof-teacher/view-teacher/prof-view-teacher.component';
import { ProfListTeacherComponent } from './prof-teacher/list-teacher/prof-list-teacher.component';
import { ScheduleProfCreateTeacherComponent } from './schedule-prof-teacher/create-teacher/schedule-prof-create-teacher.component';
import { ScheduleProfEditTeacherComponent } from './schedule-prof-teacher/edit-teacher/schedule-prof-edit-teacher.component';
import { ScheduleProfViewTeacherComponent } from './schedule-prof-teacher/view-teacher/schedule-prof-view-teacher.component';
import { ScheduleProfListTeacherComponent } from './schedule-prof-teacher/list-teacher/schedule-prof-list-teacher.component';
import { ClassAverageBonusProfCreateTeacherComponent } from './class-average-bonus-prof-teacher/create-teacher/class-average-bonus-prof-create-teacher.component';
import { ClassAverageBonusProfEditTeacherComponent } from './class-average-bonus-prof-teacher/edit-teacher/class-average-bonus-prof-edit-teacher.component';
import { ClassAverageBonusProfViewTeacherComponent } from './class-average-bonus-prof-teacher/view-teacher/class-average-bonus-prof-view-teacher.component';
import { ClassAverageBonusProfListTeacherComponent } from './class-average-bonus-prof-teacher/list-teacher/class-average-bonus-prof-list-teacher.component';
import { CategorieProfCreateTeacherComponent } from './categorie-prof-teacher/create-teacher/categorie-prof-create-teacher.component';
import { CategorieProfEditTeacherComponent } from './categorie-prof-teacher/edit-teacher/categorie-prof-edit-teacher.component';
import { CategorieProfViewTeacherComponent } from './categorie-prof-teacher/view-teacher/categorie-prof-view-teacher.component';
import { CategorieProfListTeacherComponent } from './categorie-prof-teacher/list-teacher/categorie-prof-list-teacher.component';

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

    CalendrierProfCreateTeacherComponent,
    CalendrierProfListTeacherComponent,
    CalendrierProfViewTeacherComponent,
    CalendrierProfEditTeacherComponent,
    TypeTeacherCreateTeacherComponent,
    TypeTeacherListTeacherComponent,
    TypeTeacherViewTeacherComponent,
    TypeTeacherEditTeacherComponent,
    TrancheHoraireProfCreateTeacherComponent,
    TrancheHoraireProfListTeacherComponent,
    TrancheHoraireProfViewTeacherComponent,
    TrancheHoraireProfEditTeacherComponent,
    ProfCreateTeacherComponent,
    ProfListTeacherComponent,
    ProfViewTeacherComponent,
    ProfEditTeacherComponent,
    ScheduleProfCreateTeacherComponent,
    ScheduleProfListTeacherComponent,
    ScheduleProfViewTeacherComponent,
    ScheduleProfEditTeacherComponent,
    ClassAverageBonusProfCreateTeacherComponent,
    ClassAverageBonusProfListTeacherComponent,
    ClassAverageBonusProfViewTeacherComponent,
    ClassAverageBonusProfEditTeacherComponent,
    CategorieProfCreateTeacherComponent,
    CategorieProfListTeacherComponent,
    CategorieProfViewTeacherComponent,
    CategorieProfEditTeacherComponent,
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
  CalendrierProfCreateTeacherComponent,
  CalendrierProfListTeacherComponent,
  CalendrierProfViewTeacherComponent,
  CalendrierProfEditTeacherComponent,
  TypeTeacherCreateTeacherComponent,
  TypeTeacherListTeacherComponent,
  TypeTeacherViewTeacherComponent,
  TypeTeacherEditTeacherComponent,
  TrancheHoraireProfCreateTeacherComponent,
  TrancheHoraireProfListTeacherComponent,
  TrancheHoraireProfViewTeacherComponent,
  TrancheHoraireProfEditTeacherComponent,
  ProfCreateTeacherComponent,
  ProfListTeacherComponent,
  ProfViewTeacherComponent,
  ProfEditTeacherComponent,
  ScheduleProfCreateTeacherComponent,
  ScheduleProfListTeacherComponent,
  ScheduleProfViewTeacherComponent,
  ScheduleProfEditTeacherComponent,
  ClassAverageBonusProfCreateTeacherComponent,
  ClassAverageBonusProfListTeacherComponent,
  ClassAverageBonusProfViewTeacherComponent,
  ClassAverageBonusProfEditTeacherComponent,
  CategorieProfCreateTeacherComponent,
  CategorieProfListTeacherComponent,
  CategorieProfViewTeacherComponent,
  CategorieProfEditTeacherComponent,
  ],
  entryComponents: [],
})
export class ProfTeacherModule { }