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

import { ReclamationEtudiantCreateStudentComponent } from './reclamation-etudiant-student/create-student/reclamation-etudiant-create-student.component';
import { ReclamationEtudiantEditStudentComponent } from './reclamation-etudiant-student/edit-student/reclamation-etudiant-edit-student.component';
import { ReclamationEtudiantViewStudentComponent } from './reclamation-etudiant-student/view-student/reclamation-etudiant-view-student.component';
import { ReclamationEtudiantListStudentComponent } from './reclamation-etudiant-student/list-student/reclamation-etudiant-list-student.component';
import { RecommendTeacherCreateStudentComponent } from './recommend-teacher-student/create-student/recommend-teacher-create-student.component';
import { RecommendTeacherEditStudentComponent } from './recommend-teacher-student/edit-student/recommend-teacher-edit-student.component';
import { RecommendTeacherViewStudentComponent } from './recommend-teacher-student/view-student/recommend-teacher-view-student.component';
import { RecommendTeacherListStudentComponent } from './recommend-teacher-student/list-student/recommend-teacher-list-student.component';
import { ReclamationProfCreateStudentComponent } from './reclamation-prof-student/create-student/reclamation-prof-create-student.component';
import { ReclamationProfEditStudentComponent } from './reclamation-prof-student/edit-student/reclamation-prof-edit-student.component';
import { ReclamationProfViewStudentComponent } from './reclamation-prof-student/view-student/reclamation-prof-view-student.component';
import { ReclamationProfListStudentComponent } from './reclamation-prof-student/list-student/reclamation-prof-list-student.component';
import { TypeReclamationProfCreateStudentComponent } from './type-reclamation-prof-student/create-student/type-reclamation-prof-create-student.component';
import { TypeReclamationProfEditStudentComponent } from './type-reclamation-prof-student/edit-student/type-reclamation-prof-edit-student.component';
import { TypeReclamationProfViewStudentComponent } from './type-reclamation-prof-student/view-student/type-reclamation-prof-view-student.component';
import { TypeReclamationProfListStudentComponent } from './type-reclamation-prof-student/list-student/type-reclamation-prof-list-student.component';
import { TypeReclamationEtudiantCreateStudentComponent } from './type-reclamation-etudiant-student/create-student/type-reclamation-etudiant-create-student.component';
import { TypeReclamationEtudiantEditStudentComponent } from './type-reclamation-etudiant-student/edit-student/type-reclamation-etudiant-edit-student.component';
import { TypeReclamationEtudiantViewStudentComponent } from './type-reclamation-etudiant-student/view-student/type-reclamation-etudiant-view-student.component';
import { TypeReclamationEtudiantListStudentComponent } from './type-reclamation-etudiant-student/list-student/type-reclamation-etudiant-list-student.component';

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

    ReclamationEtudiantCreateStudentComponent,
    ReclamationEtudiantListStudentComponent,
    ReclamationEtudiantViewStudentComponent,
    ReclamationEtudiantEditStudentComponent,
    RecommendTeacherCreateStudentComponent,
    RecommendTeacherListStudentComponent,
    RecommendTeacherViewStudentComponent,
    RecommendTeacherEditStudentComponent,
    ReclamationProfCreateStudentComponent,
    ReclamationProfListStudentComponent,
    ReclamationProfViewStudentComponent,
    ReclamationProfEditStudentComponent,
    TypeReclamationProfCreateStudentComponent,
    TypeReclamationProfListStudentComponent,
    TypeReclamationProfViewStudentComponent,
    TypeReclamationProfEditStudentComponent,
    TypeReclamationEtudiantCreateStudentComponent,
    TypeReclamationEtudiantListStudentComponent,
    TypeReclamationEtudiantViewStudentComponent,
    TypeReclamationEtudiantEditStudentComponent,
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
  ReclamationEtudiantCreateStudentComponent,
  ReclamationEtudiantListStudentComponent,
  ReclamationEtudiantViewStudentComponent,
  ReclamationEtudiantEditStudentComponent,
  RecommendTeacherCreateStudentComponent,
  RecommendTeacherListStudentComponent,
  RecommendTeacherViewStudentComponent,
  RecommendTeacherEditStudentComponent,
  ReclamationProfCreateStudentComponent,
  ReclamationProfListStudentComponent,
  ReclamationProfViewStudentComponent,
  ReclamationProfEditStudentComponent,
  TypeReclamationProfCreateStudentComponent,
  TypeReclamationProfListStudentComponent,
  TypeReclamationProfViewStudentComponent,
  TypeReclamationProfEditStudentComponent,
  TypeReclamationEtudiantCreateStudentComponent,
  TypeReclamationEtudiantListStudentComponent,
  TypeReclamationEtudiantViewStudentComponent,
  TypeReclamationEtudiantEditStudentComponent,
  ],
  entryComponents: [],
})
export class Recom-reclaStudentModule { }