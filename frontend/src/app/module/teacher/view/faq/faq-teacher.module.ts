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

import { FaqEtudiantCreateTeacherComponent } from './faq-etudiant-teacher/create-teacher/faq-etudiant-create-teacher.component';
import { FaqEtudiantEditTeacherComponent } from './faq-etudiant-teacher/edit-teacher/faq-etudiant-edit-teacher.component';
import { FaqEtudiantViewTeacherComponent } from './faq-etudiant-teacher/view-teacher/faq-etudiant-view-teacher.component';
import { FaqEtudiantListTeacherComponent } from './faq-etudiant-teacher/list-teacher/faq-etudiant-list-teacher.component';
import { FaqTypeCreateTeacherComponent } from './faq-type-teacher/create-teacher/faq-type-create-teacher.component';
import { FaqTypeEditTeacherComponent } from './faq-type-teacher/edit-teacher/faq-type-edit-teacher.component';
import { FaqTypeViewTeacherComponent } from './faq-type-teacher/view-teacher/faq-type-view-teacher.component';
import { FaqTypeListTeacherComponent } from './faq-type-teacher/list-teacher/faq-type-list-teacher.component';
import { FaqProfCreateTeacherComponent } from './faq-prof-teacher/create-teacher/faq-prof-create-teacher.component';
import { FaqProfEditTeacherComponent } from './faq-prof-teacher/edit-teacher/faq-prof-edit-teacher.component';
import { FaqProfViewTeacherComponent } from './faq-prof-teacher/view-teacher/faq-prof-view-teacher.component';
import { FaqProfListTeacherComponent } from './faq-prof-teacher/list-teacher/faq-prof-list-teacher.component';
import { FaqCreateTeacherComponent } from './faq-teacher/create-teacher/faq-create-teacher.component';
import { FaqEditTeacherComponent } from './faq-teacher/edit-teacher/faq-edit-teacher.component';
import { FaqViewTeacherComponent } from './faq-teacher/view-teacher/faq-view-teacher.component';
import { FaqListTeacherComponent } from './faq-teacher/list-teacher/faq-list-teacher.component';

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

    FaqEtudiantCreateTeacherComponent,
    FaqEtudiantListTeacherComponent,
    FaqEtudiantViewTeacherComponent,
    FaqEtudiantEditTeacherComponent,
    FaqTypeCreateTeacherComponent,
    FaqTypeListTeacherComponent,
    FaqTypeViewTeacherComponent,
    FaqTypeEditTeacherComponent,
    FaqProfCreateTeacherComponent,
    FaqProfListTeacherComponent,
    FaqProfViewTeacherComponent,
    FaqProfEditTeacherComponent,
    FaqCreateTeacherComponent,
    FaqListTeacherComponent,
    FaqViewTeacherComponent,
    FaqEditTeacherComponent,
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
  FaqEtudiantCreateTeacherComponent,
  FaqEtudiantListTeacherComponent,
  FaqEtudiantViewTeacherComponent,
  FaqEtudiantEditTeacherComponent,
  FaqTypeCreateTeacherComponent,
  FaqTypeListTeacherComponent,
  FaqTypeViewTeacherComponent,
  FaqTypeEditTeacherComponent,
  FaqProfCreateTeacherComponent,
  FaqProfListTeacherComponent,
  FaqProfViewTeacherComponent,
  FaqProfEditTeacherComponent,
  FaqCreateTeacherComponent,
  FaqListTeacherComponent,
  FaqViewTeacherComponent,
  FaqEditTeacherComponent,
  ],
  entryComponents: [],
})
export class FaqTeacherModule { }