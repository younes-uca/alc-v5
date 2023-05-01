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

import { ResultatHomeWorkCreateStudentComponent } from './resultat-home-work-student/create-student/resultat-home-work-create-student.component';
import { ResultatHomeWorkEditStudentComponent } from './resultat-home-work-student/edit-student/resultat-home-work-edit-student.component';
import { ResultatHomeWorkViewStudentComponent } from './resultat-home-work-student/view-student/resultat-home-work-view-student.component';
import { ResultatHomeWorkListStudentComponent } from './resultat-home-work-student/list-student/resultat-home-work-list-student.component';
import { HomeWorkCreateStudentComponent } from './home-work-student/create-student/home-work-create-student.component';
import { HomeWorkEditStudentComponent } from './home-work-student/edit-student/home-work-edit-student.component';
import { HomeWorkViewStudentComponent } from './home-work-student/view-student/home-work-view-student.component';
import { HomeWorkListStudentComponent } from './home-work-student/list-student/home-work-list-student.component';
import { HoweWorkQSTReponseCreateStudentComponent } from './howe-work-q-s-t-reponse-student/create-student/howe-work-q-s-t-reponse-create-student.component';
import { HoweWorkQSTReponseEditStudentComponent } from './howe-work-q-s-t-reponse-student/edit-student/howe-work-q-s-t-reponse-edit-student.component';
import { HoweWorkQSTReponseViewStudentComponent } from './howe-work-q-s-t-reponse-student/view-student/howe-work-q-s-t-reponse-view-student.component';
import { HoweWorkQSTReponseListStudentComponent } from './howe-work-q-s-t-reponse-student/list-student/howe-work-q-s-t-reponse-list-student.component';
import { ReponseEtudiantHomeWorkCreateStudentComponent } from './reponse-etudiant-home-work-student/create-student/reponse-etudiant-home-work-create-student.component';
import { ReponseEtudiantHomeWorkEditStudentComponent } from './reponse-etudiant-home-work-student/edit-student/reponse-etudiant-home-work-edit-student.component';
import { ReponseEtudiantHomeWorkViewStudentComponent } from './reponse-etudiant-home-work-student/view-student/reponse-etudiant-home-work-view-student.component';
import { ReponseEtudiantHomeWorkListStudentComponent } from './reponse-etudiant-home-work-student/list-student/reponse-etudiant-home-work-list-student.component';
import { HomeWorkEtudiantCreateStudentComponent } from './home-work-etudiant-student/create-student/home-work-etudiant-create-student.component';
import { HomeWorkEtudiantEditStudentComponent } from './home-work-etudiant-student/edit-student/home-work-etudiant-edit-student.component';
import { HomeWorkEtudiantViewStudentComponent } from './home-work-etudiant-student/view-student/home-work-etudiant-view-student.component';
import { HomeWorkEtudiantListStudentComponent } from './home-work-etudiant-student/list-student/home-work-etudiant-list-student.component';
import { TypeHomeWorkCreateStudentComponent } from './type-home-work-student/create-student/type-home-work-create-student.component';
import { TypeHomeWorkEditStudentComponent } from './type-home-work-student/edit-student/type-home-work-edit-student.component';
import { TypeHomeWorkViewStudentComponent } from './type-home-work-student/view-student/type-home-work-view-student.component';
import { TypeHomeWorkListStudentComponent } from './type-home-work-student/list-student/type-home-work-list-student.component';
import { HomeWorkQuestionCreateStudentComponent } from './home-work-question-student/create-student/home-work-question-create-student.component';
import { HomeWorkQuestionEditStudentComponent } from './home-work-question-student/edit-student/home-work-question-edit-student.component';
import { HomeWorkQuestionViewStudentComponent } from './home-work-question-student/view-student/home-work-question-view-student.component';
import { HomeWorkQuestionListStudentComponent } from './home-work-question-student/list-student/home-work-question-list-student.component';

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

    ResultatHomeWorkCreateStudentComponent,
    ResultatHomeWorkListStudentComponent,
    ResultatHomeWorkViewStudentComponent,
    ResultatHomeWorkEditStudentComponent,
    HomeWorkCreateStudentComponent,
    HomeWorkListStudentComponent,
    HomeWorkViewStudentComponent,
    HomeWorkEditStudentComponent,
    HoweWorkQSTReponseCreateStudentComponent,
    HoweWorkQSTReponseListStudentComponent,
    HoweWorkQSTReponseViewStudentComponent,
    HoweWorkQSTReponseEditStudentComponent,
    ReponseEtudiantHomeWorkCreateStudentComponent,
    ReponseEtudiantHomeWorkListStudentComponent,
    ReponseEtudiantHomeWorkViewStudentComponent,
    ReponseEtudiantHomeWorkEditStudentComponent,
    HomeWorkEtudiantCreateStudentComponent,
    HomeWorkEtudiantListStudentComponent,
    HomeWorkEtudiantViewStudentComponent,
    HomeWorkEtudiantEditStudentComponent,
    TypeHomeWorkCreateStudentComponent,
    TypeHomeWorkListStudentComponent,
    TypeHomeWorkViewStudentComponent,
    TypeHomeWorkEditStudentComponent,
    HomeWorkQuestionCreateStudentComponent,
    HomeWorkQuestionListStudentComponent,
    HomeWorkQuestionViewStudentComponent,
    HomeWorkQuestionEditStudentComponent,
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
  ResultatHomeWorkCreateStudentComponent,
  ResultatHomeWorkListStudentComponent,
  ResultatHomeWorkViewStudentComponent,
  ResultatHomeWorkEditStudentComponent,
  HomeWorkCreateStudentComponent,
  HomeWorkListStudentComponent,
  HomeWorkViewStudentComponent,
  HomeWorkEditStudentComponent,
  HoweWorkQSTReponseCreateStudentComponent,
  HoweWorkQSTReponseListStudentComponent,
  HoweWorkQSTReponseViewStudentComponent,
  HoweWorkQSTReponseEditStudentComponent,
  ReponseEtudiantHomeWorkCreateStudentComponent,
  ReponseEtudiantHomeWorkListStudentComponent,
  ReponseEtudiantHomeWorkViewStudentComponent,
  ReponseEtudiantHomeWorkEditStudentComponent,
  HomeWorkEtudiantCreateStudentComponent,
  HomeWorkEtudiantListStudentComponent,
  HomeWorkEtudiantViewStudentComponent,
  HomeWorkEtudiantEditStudentComponent,
  TypeHomeWorkCreateStudentComponent,
  TypeHomeWorkListStudentComponent,
  TypeHomeWorkViewStudentComponent,
  TypeHomeWorkEditStudentComponent,
  HomeWorkQuestionCreateStudentComponent,
  HomeWorkQuestionListStudentComponent,
  HomeWorkQuestionViewStudentComponent,
  HomeWorkQuestionEditStudentComponent,
  ],
  entryComponents: [],
})
export class HomeworkStudentModule { }