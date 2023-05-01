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

import { FaqEtudiantCreateStudentComponent } from './faq-etudiant-student/create-student/faq-etudiant-create-student.component';
import { FaqEtudiantEditStudentComponent } from './faq-etudiant-student/edit-student/faq-etudiant-edit-student.component';
import { FaqEtudiantViewStudentComponent } from './faq-etudiant-student/view-student/faq-etudiant-view-student.component';
import { FaqEtudiantListStudentComponent } from './faq-etudiant-student/list-student/faq-etudiant-list-student.component';
import { FaqTypeCreateStudentComponent } from './faq-type-student/create-student/faq-type-create-student.component';
import { FaqTypeEditStudentComponent } from './faq-type-student/edit-student/faq-type-edit-student.component';
import { FaqTypeViewStudentComponent } from './faq-type-student/view-student/faq-type-view-student.component';
import { FaqTypeListStudentComponent } from './faq-type-student/list-student/faq-type-list-student.component';
import { FaqProfCreateStudentComponent } from './faq-prof-student/create-student/faq-prof-create-student.component';
import { FaqProfEditStudentComponent } from './faq-prof-student/edit-student/faq-prof-edit-student.component';
import { FaqProfViewStudentComponent } from './faq-prof-student/view-student/faq-prof-view-student.component';
import { FaqProfListStudentComponent } from './faq-prof-student/list-student/faq-prof-list-student.component';
import { FaqCreateStudentComponent } from './faq-student/create-student/faq-create-student.component';
import { FaqEditStudentComponent } from './faq-student/edit-student/faq-edit-student.component';
import { FaqViewStudentComponent } from './faq-student/view-student/faq-view-student.component';
import { FaqListStudentComponent } from './faq-student/list-student/faq-list-student.component';

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

    FaqEtudiantCreateStudentComponent,
    FaqEtudiantListStudentComponent,
    FaqEtudiantViewStudentComponent,
    FaqEtudiantEditStudentComponent,
    FaqTypeCreateStudentComponent,
    FaqTypeListStudentComponent,
    FaqTypeViewStudentComponent,
    FaqTypeEditStudentComponent,
    FaqProfCreateStudentComponent,
    FaqProfListStudentComponent,
    FaqProfViewStudentComponent,
    FaqProfEditStudentComponent,
    FaqCreateStudentComponent,
    FaqListStudentComponent,
    FaqViewStudentComponent,
    FaqEditStudentComponent,
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
  FaqEtudiantCreateStudentComponent,
  FaqEtudiantListStudentComponent,
  FaqEtudiantViewStudentComponent,
  FaqEtudiantEditStudentComponent,
  FaqTypeCreateStudentComponent,
  FaqTypeListStudentComponent,
  FaqTypeViewStudentComponent,
  FaqTypeEditStudentComponent,
  FaqProfCreateStudentComponent,
  FaqProfListStudentComponent,
  FaqProfViewStudentComponent,
  FaqProfEditStudentComponent,
  FaqCreateStudentComponent,
  FaqListStudentComponent,
  FaqViewStudentComponent,
  FaqEditStudentComponent,
  ],
  entryComponents: [],
})
export class FaqStudentModule { }