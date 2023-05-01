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

import { ReclamationEtudiantCreateTeacherComponent } from './reclamation-etudiant-teacher/create-teacher/reclamation-etudiant-create-teacher.component';
import { ReclamationEtudiantEditTeacherComponent } from './reclamation-etudiant-teacher/edit-teacher/reclamation-etudiant-edit-teacher.component';
import { ReclamationEtudiantViewTeacherComponent } from './reclamation-etudiant-teacher/view-teacher/reclamation-etudiant-view-teacher.component';
import { ReclamationEtudiantListTeacherComponent } from './reclamation-etudiant-teacher/list-teacher/reclamation-etudiant-list-teacher.component';
import { RecommendTeacherCreateTeacherComponent } from './recommend-teacher-teacher/create-teacher/recommend-teacher-create-teacher.component';
import { RecommendTeacherEditTeacherComponent } from './recommend-teacher-teacher/edit-teacher/recommend-teacher-edit-teacher.component';
import { RecommendTeacherViewTeacherComponent } from './recommend-teacher-teacher/view-teacher/recommend-teacher-view-teacher.component';
import { RecommendTeacherListTeacherComponent } from './recommend-teacher-teacher/list-teacher/recommend-teacher-list-teacher.component';
import { ReclamationProfCreateTeacherComponent } from './reclamation-prof-teacher/create-teacher/reclamation-prof-create-teacher.component';
import { ReclamationProfEditTeacherComponent } from './reclamation-prof-teacher/edit-teacher/reclamation-prof-edit-teacher.component';
import { ReclamationProfViewTeacherComponent } from './reclamation-prof-teacher/view-teacher/reclamation-prof-view-teacher.component';
import { ReclamationProfListTeacherComponent } from './reclamation-prof-teacher/list-teacher/reclamation-prof-list-teacher.component';
import { TypeReclamationProfCreateTeacherComponent } from './type-reclamation-prof-teacher/create-teacher/type-reclamation-prof-create-teacher.component';
import { TypeReclamationProfEditTeacherComponent } from './type-reclamation-prof-teacher/edit-teacher/type-reclamation-prof-edit-teacher.component';
import { TypeReclamationProfViewTeacherComponent } from './type-reclamation-prof-teacher/view-teacher/type-reclamation-prof-view-teacher.component';
import { TypeReclamationProfListTeacherComponent } from './type-reclamation-prof-teacher/list-teacher/type-reclamation-prof-list-teacher.component';
import { TypeReclamationEtudiantCreateTeacherComponent } from './type-reclamation-etudiant-teacher/create-teacher/type-reclamation-etudiant-create-teacher.component';
import { TypeReclamationEtudiantEditTeacherComponent } from './type-reclamation-etudiant-teacher/edit-teacher/type-reclamation-etudiant-edit-teacher.component';
import { TypeReclamationEtudiantViewTeacherComponent } from './type-reclamation-etudiant-teacher/view-teacher/type-reclamation-etudiant-view-teacher.component';
import { TypeReclamationEtudiantListTeacherComponent } from './type-reclamation-etudiant-teacher/list-teacher/type-reclamation-etudiant-list-teacher.component';

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

    ReclamationEtudiantCreateTeacherComponent,
    ReclamationEtudiantListTeacherComponent,
    ReclamationEtudiantViewTeacherComponent,
    ReclamationEtudiantEditTeacherComponent,
    RecommendTeacherCreateTeacherComponent,
    RecommendTeacherListTeacherComponent,
    RecommendTeacherViewTeacherComponent,
    RecommendTeacherEditTeacherComponent,
    ReclamationProfCreateTeacherComponent,
    ReclamationProfListTeacherComponent,
    ReclamationProfViewTeacherComponent,
    ReclamationProfEditTeacherComponent,
    TypeReclamationProfCreateTeacherComponent,
    TypeReclamationProfListTeacherComponent,
    TypeReclamationProfViewTeacherComponent,
    TypeReclamationProfEditTeacherComponent,
    TypeReclamationEtudiantCreateTeacherComponent,
    TypeReclamationEtudiantListTeacherComponent,
    TypeReclamationEtudiantViewTeacherComponent,
    TypeReclamationEtudiantEditTeacherComponent,
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
  ReclamationEtudiantCreateTeacherComponent,
  ReclamationEtudiantListTeacherComponent,
  ReclamationEtudiantViewTeacherComponent,
  ReclamationEtudiantEditTeacherComponent,
  RecommendTeacherCreateTeacherComponent,
  RecommendTeacherListTeacherComponent,
  RecommendTeacherViewTeacherComponent,
  RecommendTeacherEditTeacherComponent,
  ReclamationProfCreateTeacherComponent,
  ReclamationProfListTeacherComponent,
  ReclamationProfViewTeacherComponent,
  ReclamationProfEditTeacherComponent,
  TypeReclamationProfCreateTeacherComponent,
  TypeReclamationProfListTeacherComponent,
  TypeReclamationProfViewTeacherComponent,
  TypeReclamationProfEditTeacherComponent,
  TypeReclamationEtudiantCreateTeacherComponent,
  TypeReclamationEtudiantListTeacherComponent,
  TypeReclamationEtudiantViewTeacherComponent,
  TypeReclamationEtudiantEditTeacherComponent,
  ],
  entryComponents: [],
})
export class Recom-reclaTeacherModule { }