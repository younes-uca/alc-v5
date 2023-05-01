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

import { QuestionCreateStudentComponent } from './question-student/create-student/question-create-student.component';
import { QuestionEditStudentComponent } from './question-student/edit-student/question-edit-student.component';
import { QuestionViewStudentComponent } from './question-student/view-student/question-view-student.component';
import { QuestionListStudentComponent } from './question-student/list-student/question-list-student.component';
import { ReponseEtudiantCreateStudentComponent } from './reponse-etudiant-student/create-student/reponse-etudiant-create-student.component';
import { ReponseEtudiantEditStudentComponent } from './reponse-etudiant-student/edit-student/reponse-etudiant-edit-student.component';
import { ReponseEtudiantViewStudentComponent } from './reponse-etudiant-student/view-student/reponse-etudiant-view-student.component';
import { ReponseEtudiantListStudentComponent } from './reponse-etudiant-student/list-student/reponse-etudiant-list-student.component';
import { QuizCreateStudentComponent } from './quiz-student/create-student/quiz-create-student.component';
import { QuizEditStudentComponent } from './quiz-student/edit-student/quiz-edit-student.component';
import { QuizViewStudentComponent } from './quiz-student/view-student/quiz-view-student.component';
import { QuizListStudentComponent } from './quiz-student/list-student/quiz-list-student.component';
import { TypeDeQuestionCreateStudentComponent } from './type-de-question-student/create-student/type-de-question-create-student.component';
import { TypeDeQuestionEditStudentComponent } from './type-de-question-student/edit-student/type-de-question-edit-student.component';
import { TypeDeQuestionViewStudentComponent } from './type-de-question-student/view-student/type-de-question-view-student.component';
import { TypeDeQuestionListStudentComponent } from './type-de-question-student/list-student/type-de-question-list-student.component';
import { ReponseCreateStudentComponent } from './reponse-student/create-student/reponse-create-student.component';
import { ReponseEditStudentComponent } from './reponse-student/edit-student/reponse-edit-student.component';
import { ReponseViewStudentComponent } from './reponse-student/view-student/reponse-view-student.component';
import { ReponseListStudentComponent } from './reponse-student/list-student/reponse-list-student.component';
import { ClassRoomCreateStudentComponent } from './class-room-student/create-student/class-room-create-student.component';
import { ClassRoomEditStudentComponent } from './class-room-student/edit-student/class-room-edit-student.component';
import { ClassRoomViewStudentComponent } from './class-room-student/view-student/class-room-view-student.component';
import { ClassRoomListStudentComponent } from './class-room-student/list-student/class-room-list-student.component';
import { EtatReponseCreateStudentComponent } from './etat-reponse-student/create-student/etat-reponse-create-student.component';
import { EtatReponseEditStudentComponent } from './etat-reponse-student/edit-student/etat-reponse-edit-student.component';
import { EtatReponseViewStudentComponent } from './etat-reponse-student/view-student/etat-reponse-view-student.component';
import { EtatReponseListStudentComponent } from './etat-reponse-student/list-student/etat-reponse-list-student.component';
import { QuizEtudiantCreateStudentComponent } from './quiz-etudiant-student/create-student/quiz-etudiant-create-student.component';
import { QuizEtudiantEditStudentComponent } from './quiz-etudiant-student/edit-student/quiz-etudiant-edit-student.component';
import { QuizEtudiantViewStudentComponent } from './quiz-etudiant-student/view-student/quiz-etudiant-view-student.component';
import { QuizEtudiantListStudentComponent } from './quiz-etudiant-student/list-student/quiz-etudiant-list-student.component';

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

    QuestionCreateStudentComponent,
    QuestionListStudentComponent,
    QuestionViewStudentComponent,
    QuestionEditStudentComponent,
    ReponseEtudiantCreateStudentComponent,
    ReponseEtudiantListStudentComponent,
    ReponseEtudiantViewStudentComponent,
    ReponseEtudiantEditStudentComponent,
    QuizCreateStudentComponent,
    QuizListStudentComponent,
    QuizViewStudentComponent,
    QuizEditStudentComponent,
    TypeDeQuestionCreateStudentComponent,
    TypeDeQuestionListStudentComponent,
    TypeDeQuestionViewStudentComponent,
    TypeDeQuestionEditStudentComponent,
    ReponseCreateStudentComponent,
    ReponseListStudentComponent,
    ReponseViewStudentComponent,
    ReponseEditStudentComponent,
    ClassRoomCreateStudentComponent,
    ClassRoomListStudentComponent,
    ClassRoomViewStudentComponent,
    ClassRoomEditStudentComponent,
    EtatReponseCreateStudentComponent,
    EtatReponseListStudentComponent,
    EtatReponseViewStudentComponent,
    EtatReponseEditStudentComponent,
    QuizEtudiantCreateStudentComponent,
    QuizEtudiantListStudentComponent,
    QuizEtudiantViewStudentComponent,
    QuizEtudiantEditStudentComponent,
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
  QuestionCreateStudentComponent,
  QuestionListStudentComponent,
  QuestionViewStudentComponent,
  QuestionEditStudentComponent,
  ReponseEtudiantCreateStudentComponent,
  ReponseEtudiantListStudentComponent,
  ReponseEtudiantViewStudentComponent,
  ReponseEtudiantEditStudentComponent,
  QuizCreateStudentComponent,
  QuizListStudentComponent,
  QuizViewStudentComponent,
  QuizEditStudentComponent,
  TypeDeQuestionCreateStudentComponent,
  TypeDeQuestionListStudentComponent,
  TypeDeQuestionViewStudentComponent,
  TypeDeQuestionEditStudentComponent,
  ReponseCreateStudentComponent,
  ReponseListStudentComponent,
  ReponseViewStudentComponent,
  ReponseEditStudentComponent,
  ClassRoomCreateStudentComponent,
  ClassRoomListStudentComponent,
  ClassRoomViewStudentComponent,
  ClassRoomEditStudentComponent,
  EtatReponseCreateStudentComponent,
  EtatReponseListStudentComponent,
  EtatReponseViewStudentComponent,
  EtatReponseEditStudentComponent,
  QuizEtudiantCreateStudentComponent,
  QuizEtudiantListStudentComponent,
  QuizEtudiantViewStudentComponent,
  QuizEtudiantEditStudentComponent,
  ],
  entryComponents: [],
})
export class QuizStudentModule { }