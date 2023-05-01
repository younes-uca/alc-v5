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

import { QuestionCreateTeacherComponent } from './question-teacher/create-teacher/question-create-teacher.component';
import { QuestionEditTeacherComponent } from './question-teacher/edit-teacher/question-edit-teacher.component';
import { QuestionViewTeacherComponent } from './question-teacher/view-teacher/question-view-teacher.component';
import { QuestionListTeacherComponent } from './question-teacher/list-teacher/question-list-teacher.component';
import { ReponseEtudiantCreateTeacherComponent } from './reponse-etudiant-teacher/create-teacher/reponse-etudiant-create-teacher.component';
import { ReponseEtudiantEditTeacherComponent } from './reponse-etudiant-teacher/edit-teacher/reponse-etudiant-edit-teacher.component';
import { ReponseEtudiantViewTeacherComponent } from './reponse-etudiant-teacher/view-teacher/reponse-etudiant-view-teacher.component';
import { ReponseEtudiantListTeacherComponent } from './reponse-etudiant-teacher/list-teacher/reponse-etudiant-list-teacher.component';
import { QuizCreateTeacherComponent } from './quiz-teacher/create-teacher/quiz-create-teacher.component';
import { QuizEditTeacherComponent } from './quiz-teacher/edit-teacher/quiz-edit-teacher.component';
import { QuizViewTeacherComponent } from './quiz-teacher/view-teacher/quiz-view-teacher.component';
import { QuizListTeacherComponent } from './quiz-teacher/list-teacher/quiz-list-teacher.component';
import { TypeDeQuestionCreateTeacherComponent } from './type-de-question-teacher/create-teacher/type-de-question-create-teacher.component';
import { TypeDeQuestionEditTeacherComponent } from './type-de-question-teacher/edit-teacher/type-de-question-edit-teacher.component';
import { TypeDeQuestionViewTeacherComponent } from './type-de-question-teacher/view-teacher/type-de-question-view-teacher.component';
import { TypeDeQuestionListTeacherComponent } from './type-de-question-teacher/list-teacher/type-de-question-list-teacher.component';
import { ReponseCreateTeacherComponent } from './reponse-teacher/create-teacher/reponse-create-teacher.component';
import { ReponseEditTeacherComponent } from './reponse-teacher/edit-teacher/reponse-edit-teacher.component';
import { ReponseViewTeacherComponent } from './reponse-teacher/view-teacher/reponse-view-teacher.component';
import { ReponseListTeacherComponent } from './reponse-teacher/list-teacher/reponse-list-teacher.component';
import { ClassRoomCreateTeacherComponent } from './class-room-teacher/create-teacher/class-room-create-teacher.component';
import { ClassRoomEditTeacherComponent } from './class-room-teacher/edit-teacher/class-room-edit-teacher.component';
import { ClassRoomViewTeacherComponent } from './class-room-teacher/view-teacher/class-room-view-teacher.component';
import { ClassRoomListTeacherComponent } from './class-room-teacher/list-teacher/class-room-list-teacher.component';
import { EtatReponseCreateTeacherComponent } from './etat-reponse-teacher/create-teacher/etat-reponse-create-teacher.component';
import { EtatReponseEditTeacherComponent } from './etat-reponse-teacher/edit-teacher/etat-reponse-edit-teacher.component';
import { EtatReponseViewTeacherComponent } from './etat-reponse-teacher/view-teacher/etat-reponse-view-teacher.component';
import { EtatReponseListTeacherComponent } from './etat-reponse-teacher/list-teacher/etat-reponse-list-teacher.component';
import { QuizEtudiantCreateTeacherComponent } from './quiz-etudiant-teacher/create-teacher/quiz-etudiant-create-teacher.component';
import { QuizEtudiantEditTeacherComponent } from './quiz-etudiant-teacher/edit-teacher/quiz-etudiant-edit-teacher.component';
import { QuizEtudiantViewTeacherComponent } from './quiz-etudiant-teacher/view-teacher/quiz-etudiant-view-teacher.component';
import { QuizEtudiantListTeacherComponent } from './quiz-etudiant-teacher/list-teacher/quiz-etudiant-list-teacher.component';

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

    QuestionCreateTeacherComponent,
    QuestionListTeacherComponent,
    QuestionViewTeacherComponent,
    QuestionEditTeacherComponent,
    ReponseEtudiantCreateTeacherComponent,
    ReponseEtudiantListTeacherComponent,
    ReponseEtudiantViewTeacherComponent,
    ReponseEtudiantEditTeacherComponent,
    QuizCreateTeacherComponent,
    QuizListTeacherComponent,
    QuizViewTeacherComponent,
    QuizEditTeacherComponent,
    TypeDeQuestionCreateTeacherComponent,
    TypeDeQuestionListTeacherComponent,
    TypeDeQuestionViewTeacherComponent,
    TypeDeQuestionEditTeacherComponent,
    ReponseCreateTeacherComponent,
    ReponseListTeacherComponent,
    ReponseViewTeacherComponent,
    ReponseEditTeacherComponent,
    ClassRoomCreateTeacherComponent,
    ClassRoomListTeacherComponent,
    ClassRoomViewTeacherComponent,
    ClassRoomEditTeacherComponent,
    EtatReponseCreateTeacherComponent,
    EtatReponseListTeacherComponent,
    EtatReponseViewTeacherComponent,
    EtatReponseEditTeacherComponent,
    QuizEtudiantCreateTeacherComponent,
    QuizEtudiantListTeacherComponent,
    QuizEtudiantViewTeacherComponent,
    QuizEtudiantEditTeacherComponent,
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
  QuestionCreateTeacherComponent,
  QuestionListTeacherComponent,
  QuestionViewTeacherComponent,
  QuestionEditTeacherComponent,
  ReponseEtudiantCreateTeacherComponent,
  ReponseEtudiantListTeacherComponent,
  ReponseEtudiantViewTeacherComponent,
  ReponseEtudiantEditTeacherComponent,
  QuizCreateTeacherComponent,
  QuizListTeacherComponent,
  QuizViewTeacherComponent,
  QuizEditTeacherComponent,
  TypeDeQuestionCreateTeacherComponent,
  TypeDeQuestionListTeacherComponent,
  TypeDeQuestionViewTeacherComponent,
  TypeDeQuestionEditTeacherComponent,
  ReponseCreateTeacherComponent,
  ReponseListTeacherComponent,
  ReponseViewTeacherComponent,
  ReponseEditTeacherComponent,
  ClassRoomCreateTeacherComponent,
  ClassRoomListTeacherComponent,
  ClassRoomViewTeacherComponent,
  ClassRoomEditTeacherComponent,
  EtatReponseCreateTeacherComponent,
  EtatReponseListTeacherComponent,
  EtatReponseViewTeacherComponent,
  EtatReponseEditTeacherComponent,
  QuizEtudiantCreateTeacherComponent,
  QuizEtudiantListTeacherComponent,
  QuizEtudiantViewTeacherComponent,
  QuizEtudiantEditTeacherComponent,
  ],
  entryComponents: [],
})
export class QuizTeacherModule { }