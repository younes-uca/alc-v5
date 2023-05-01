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
import { LoginStudentComponent } from './login-student/login-student.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import { QuizStudentModule } from './view/quiz/quiz-student.module';
import { QuizStudentRoutingModule } from './view/quiz/quiz-student-routing.module';
import { Recom-reclaStudentModule } from './view/recom-recla/recom-recla-student.module';
import { Recom-reclaStudentRoutingModule } from './view/recom-recla/recom-recla-student-routing.module';
import { FaqStudentModule } from './view/faq/faq-student.module';
import { FaqStudentRoutingModule } from './view/faq/faq-student-routing.module';
import { CommonStudentModule } from './view/common/common-student.module';
import { CommonStudentRoutingModule } from './view/common/common-student-routing.module';
import { AlcStudentModule } from './view/alc/alc-student.module';
import { AlcStudentRoutingModule } from './view/alc/alc-student-routing.module';
import { InscriptionStudentModule } from './view/inscription/inscription-student.module';
import { InscriptionStudentRoutingModule } from './view/inscription/inscription-student-routing.module';
import { CourseStudentModule } from './view/course/course-student.module';
import { CourseStudentRoutingModule } from './view/course/course-student-routing.module';
import { FreetrialStudentModule } from './view/freetrial/freetrial-student.module';
import { FreetrialStudentRoutingModule } from './view/freetrial/freetrial-student-routing.module';
import { LearningStudentModule } from './view/learning/learning-student.module';
import { LearningStudentRoutingModule } from './view/learning/learning-student-routing.module';
import { HomeworkStudentModule } from './view/homework/homework-student.module';
import { HomeworkStudentRoutingModule } from './view/homework/homework-student-routing.module';
import { ProfStudentModule } from './view/prof/prof-student.module';
import { ProfStudentRoutingModule } from './view/prof/prof-student-routing.module';
import { SalaryStudentModule } from './view/salary/salary-student.module';
import { SalaryStudentRoutingModule } from './view/salary/salary-student-routing.module';


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
   LoginStudentComponent,
   RegisterStudentComponent
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
  QuizStudentModule,
  QuizStudentRoutingModule,
  Recom-reclaStudentModule,
  Recom-reclaStudentRoutingModule,
  FaqStudentModule,
  FaqStudentRoutingModule,
  CommonStudentModule,
  CommonStudentRoutingModule,
  AlcStudentModule,
  AlcStudentRoutingModule,
  InscriptionStudentModule,
  InscriptionStudentRoutingModule,
  CourseStudentModule,
  CourseStudentRoutingModule,
  FreetrialStudentModule,
  FreetrialStudentRoutingModule,
  LearningStudentModule,
  LearningStudentRoutingModule,
  HomeworkStudentModule,
  HomeworkStudentRoutingModule,
  ProfStudentModule,
  ProfStudentRoutingModule,
  SalaryStudentModule,
  SalaryStudentRoutingModule,
  ],
  exports: [
  LoginStudentComponent,
  RegisterStudentComponent,

    QuizStudentModule,
    Recom-reclaStudentModule,
    FaqStudentModule,
    CommonStudentModule,
    AlcStudentModule,
    InscriptionStudentModule,
    CourseStudentModule,
    FreetrialStudentModule,
    LearningStudentModule,
    HomeworkStudentModule,
    ProfStudentModule,
    SalaryStudentModule,
  ],
  entryComponents: [],
})
export class StudentModule { }
