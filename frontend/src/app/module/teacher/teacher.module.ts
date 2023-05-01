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
import { LoginTeacherComponent } from './login-teacher/login-teacher.component';
import { RegisterTeacherComponent } from './register-teacher/register-teacher.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import { QuizTeacherModule } from './view/quiz/quiz-teacher.module';
import { QuizTeacherRoutingModule } from './view/quiz/quiz-teacher-routing.module';
import { Recom-reclaTeacherModule } from './view/recom-recla/recom-recla-teacher.module';
import { Recom-reclaTeacherRoutingModule } from './view/recom-recla/recom-recla-teacher-routing.module';
import { FaqTeacherModule } from './view/faq/faq-teacher.module';
import { FaqTeacherRoutingModule } from './view/faq/faq-teacher-routing.module';
import { CommonTeacherModule } from './view/common/common-teacher.module';
import { CommonTeacherRoutingModule } from './view/common/common-teacher-routing.module';
import { AlcTeacherModule } from './view/alc/alc-teacher.module';
import { AlcTeacherRoutingModule } from './view/alc/alc-teacher-routing.module';
import { InscriptionTeacherModule } from './view/inscription/inscription-teacher.module';
import { InscriptionTeacherRoutingModule } from './view/inscription/inscription-teacher-routing.module';
import { CourseTeacherModule } from './view/course/course-teacher.module';
import { CourseTeacherRoutingModule } from './view/course/course-teacher-routing.module';
import { FreetrialTeacherModule } from './view/freetrial/freetrial-teacher.module';
import { FreetrialTeacherRoutingModule } from './view/freetrial/freetrial-teacher-routing.module';
import { LearningTeacherModule } from './view/learning/learning-teacher.module';
import { LearningTeacherRoutingModule } from './view/learning/learning-teacher-routing.module';
import { HomeworkTeacherModule } from './view/homework/homework-teacher.module';
import { HomeworkTeacherRoutingModule } from './view/homework/homework-teacher-routing.module';
import { ProfTeacherModule } from './view/prof/prof-teacher.module';
import { ProfTeacherRoutingModule } from './view/prof/prof-teacher-routing.module';
import { SalaryTeacherModule } from './view/salary/salary-teacher.module';
import { SalaryTeacherRoutingModule } from './view/salary/salary-teacher-routing.module';


import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';


@NgModule({
  declarations: [
   LoginTeacherComponent,
   RegisterTeacherComponent
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
  QuizTeacherModule,
  QuizTeacherRoutingModule,
  Recom-reclaTeacherModule,
  Recom-reclaTeacherRoutingModule,
  FaqTeacherModule,
  FaqTeacherRoutingModule,
  CommonTeacherModule,
  CommonTeacherRoutingModule,
  AlcTeacherModule,
  AlcTeacherRoutingModule,
  InscriptionTeacherModule,
  InscriptionTeacherRoutingModule,
  CourseTeacherModule,
  CourseTeacherRoutingModule,
  FreetrialTeacherModule,
  FreetrialTeacherRoutingModule,
  LearningTeacherModule,
  LearningTeacherRoutingModule,
  HomeworkTeacherModule,
  HomeworkTeacherRoutingModule,
  ProfTeacherModule,
  ProfTeacherRoutingModule,
  SalaryTeacherModule,
  SalaryTeacherRoutingModule,
  ],
  exports: [
  LoginTeacherComponent,
  RegisterTeacherComponent,

    QuizTeacherModule,
    Recom-reclaTeacherModule,
    FaqTeacherModule,
    CommonTeacherModule,
    AlcTeacherModule,
    InscriptionTeacherModule,
    CourseTeacherModule,
    FreetrialTeacherModule,
    LearningTeacherModule,
    HomeworkTeacherModule,
    ProfTeacherModule,
    SalaryTeacherModule,
  ],
  entryComponents: [],
})
export class TeacherModule { }
