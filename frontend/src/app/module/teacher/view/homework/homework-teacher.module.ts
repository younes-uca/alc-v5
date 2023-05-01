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

import { ResultatHomeWorkCreateTeacherComponent } from './resultat-home-work-teacher/create-teacher/resultat-home-work-create-teacher.component';
import { ResultatHomeWorkEditTeacherComponent } from './resultat-home-work-teacher/edit-teacher/resultat-home-work-edit-teacher.component';
import { ResultatHomeWorkViewTeacherComponent } from './resultat-home-work-teacher/view-teacher/resultat-home-work-view-teacher.component';
import { ResultatHomeWorkListTeacherComponent } from './resultat-home-work-teacher/list-teacher/resultat-home-work-list-teacher.component';
import { HomeWorkCreateTeacherComponent } from './home-work-teacher/create-teacher/home-work-create-teacher.component';
import { HomeWorkEditTeacherComponent } from './home-work-teacher/edit-teacher/home-work-edit-teacher.component';
import { HomeWorkViewTeacherComponent } from './home-work-teacher/view-teacher/home-work-view-teacher.component';
import { HomeWorkListTeacherComponent } from './home-work-teacher/list-teacher/home-work-list-teacher.component';
import { HoweWorkQSTReponseCreateTeacherComponent } from './howe-work-q-s-t-reponse-teacher/create-teacher/howe-work-q-s-t-reponse-create-teacher.component';
import { HoweWorkQSTReponseEditTeacherComponent } from './howe-work-q-s-t-reponse-teacher/edit-teacher/howe-work-q-s-t-reponse-edit-teacher.component';
import { HoweWorkQSTReponseViewTeacherComponent } from './howe-work-q-s-t-reponse-teacher/view-teacher/howe-work-q-s-t-reponse-view-teacher.component';
import { HoweWorkQSTReponseListTeacherComponent } from './howe-work-q-s-t-reponse-teacher/list-teacher/howe-work-q-s-t-reponse-list-teacher.component';
import { ReponseEtudiantHomeWorkCreateTeacherComponent } from './reponse-etudiant-home-work-teacher/create-teacher/reponse-etudiant-home-work-create-teacher.component';
import { ReponseEtudiantHomeWorkEditTeacherComponent } from './reponse-etudiant-home-work-teacher/edit-teacher/reponse-etudiant-home-work-edit-teacher.component';
import { ReponseEtudiantHomeWorkViewTeacherComponent } from './reponse-etudiant-home-work-teacher/view-teacher/reponse-etudiant-home-work-view-teacher.component';
import { ReponseEtudiantHomeWorkListTeacherComponent } from './reponse-etudiant-home-work-teacher/list-teacher/reponse-etudiant-home-work-list-teacher.component';
import { HomeWorkEtudiantCreateTeacherComponent } from './home-work-etudiant-teacher/create-teacher/home-work-etudiant-create-teacher.component';
import { HomeWorkEtudiantEditTeacherComponent } from './home-work-etudiant-teacher/edit-teacher/home-work-etudiant-edit-teacher.component';
import { HomeWorkEtudiantViewTeacherComponent } from './home-work-etudiant-teacher/view-teacher/home-work-etudiant-view-teacher.component';
import { HomeWorkEtudiantListTeacherComponent } from './home-work-etudiant-teacher/list-teacher/home-work-etudiant-list-teacher.component';
import { TypeHomeWorkCreateTeacherComponent } from './type-home-work-teacher/create-teacher/type-home-work-create-teacher.component';
import { TypeHomeWorkEditTeacherComponent } from './type-home-work-teacher/edit-teacher/type-home-work-edit-teacher.component';
import { TypeHomeWorkViewTeacherComponent } from './type-home-work-teacher/view-teacher/type-home-work-view-teacher.component';
import { TypeHomeWorkListTeacherComponent } from './type-home-work-teacher/list-teacher/type-home-work-list-teacher.component';
import { HomeWorkQuestionCreateTeacherComponent } from './home-work-question-teacher/create-teacher/home-work-question-create-teacher.component';
import { HomeWorkQuestionEditTeacherComponent } from './home-work-question-teacher/edit-teacher/home-work-question-edit-teacher.component';
import { HomeWorkQuestionViewTeacherComponent } from './home-work-question-teacher/view-teacher/home-work-question-view-teacher.component';
import { HomeWorkQuestionListTeacherComponent } from './home-work-question-teacher/list-teacher/home-work-question-list-teacher.component';

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

    ResultatHomeWorkCreateTeacherComponent,
    ResultatHomeWorkListTeacherComponent,
    ResultatHomeWorkViewTeacherComponent,
    ResultatHomeWorkEditTeacherComponent,
    HomeWorkCreateTeacherComponent,
    HomeWorkListTeacherComponent,
    HomeWorkViewTeacherComponent,
    HomeWorkEditTeacherComponent,
    HoweWorkQSTReponseCreateTeacherComponent,
    HoweWorkQSTReponseListTeacherComponent,
    HoweWorkQSTReponseViewTeacherComponent,
    HoweWorkQSTReponseEditTeacherComponent,
    ReponseEtudiantHomeWorkCreateTeacherComponent,
    ReponseEtudiantHomeWorkListTeacherComponent,
    ReponseEtudiantHomeWorkViewTeacherComponent,
    ReponseEtudiantHomeWorkEditTeacherComponent,
    HomeWorkEtudiantCreateTeacherComponent,
    HomeWorkEtudiantListTeacherComponent,
    HomeWorkEtudiantViewTeacherComponent,
    HomeWorkEtudiantEditTeacherComponent,
    TypeHomeWorkCreateTeacherComponent,
    TypeHomeWorkListTeacherComponent,
    TypeHomeWorkViewTeacherComponent,
    TypeHomeWorkEditTeacherComponent,
    HomeWorkQuestionCreateTeacherComponent,
    HomeWorkQuestionListTeacherComponent,
    HomeWorkQuestionViewTeacherComponent,
    HomeWorkQuestionEditTeacherComponent,
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
  ResultatHomeWorkCreateTeacherComponent,
  ResultatHomeWorkListTeacherComponent,
  ResultatHomeWorkViewTeacherComponent,
  ResultatHomeWorkEditTeacherComponent,
  HomeWorkCreateTeacherComponent,
  HomeWorkListTeacherComponent,
  HomeWorkViewTeacherComponent,
  HomeWorkEditTeacherComponent,
  HoweWorkQSTReponseCreateTeacherComponent,
  HoweWorkQSTReponseListTeacherComponent,
  HoweWorkQSTReponseViewTeacherComponent,
  HoweWorkQSTReponseEditTeacherComponent,
  ReponseEtudiantHomeWorkCreateTeacherComponent,
  ReponseEtudiantHomeWorkListTeacherComponent,
  ReponseEtudiantHomeWorkViewTeacherComponent,
  ReponseEtudiantHomeWorkEditTeacherComponent,
  HomeWorkEtudiantCreateTeacherComponent,
  HomeWorkEtudiantListTeacherComponent,
  HomeWorkEtudiantViewTeacherComponent,
  HomeWorkEtudiantEditTeacherComponent,
  TypeHomeWorkCreateTeacherComponent,
  TypeHomeWorkListTeacherComponent,
  TypeHomeWorkViewTeacherComponent,
  TypeHomeWorkEditTeacherComponent,
  HomeWorkQuestionCreateTeacherComponent,
  HomeWorkQuestionListTeacherComponent,
  HomeWorkQuestionViewTeacherComponent,
  HomeWorkQuestionEditTeacherComponent,
  ],
  entryComponents: [],
})
export class HomeworkTeacherModule { }