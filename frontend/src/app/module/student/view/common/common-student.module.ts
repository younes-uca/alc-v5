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

import { ClassAverageBonusCreateStudentComponent } from './class-average-bonus-student/create-student/class-average-bonus-create-student.component';
import { ClassAverageBonusEditStudentComponent } from './class-average-bonus-student/edit-student/class-average-bonus-edit-student.component';
import { ClassAverageBonusViewStudentComponent } from './class-average-bonus-student/view-student/class-average-bonus-view-student.component';
import { ClassAverageBonusListStudentComponent } from './class-average-bonus-student/list-student/class-average-bonus-list-student.component';
import { NewsCreateStudentComponent } from './news-student/create-student/news-create-student.component';
import { NewsEditStudentComponent } from './news-student/edit-student/news-edit-student.component';
import { NewsViewStudentComponent } from './news-student/view-student/news-view-student.component';
import { NewsListStudentComponent } from './news-student/list-student/news-list-student.component';
import { ContactCreateStudentComponent } from './contact-student/create-student/contact-create-student.component';
import { ContactEditStudentComponent } from './contact-student/edit-student/contact-edit-student.component';
import { ContactViewStudentComponent } from './contact-student/view-student/contact-view-student.component';
import { ContactListStudentComponent } from './contact-student/list-student/contact-list-student.component';

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

    ClassAverageBonusCreateStudentComponent,
    ClassAverageBonusListStudentComponent,
    ClassAverageBonusViewStudentComponent,
    ClassAverageBonusEditStudentComponent,
    NewsCreateStudentComponent,
    NewsListStudentComponent,
    NewsViewStudentComponent,
    NewsEditStudentComponent,
    ContactCreateStudentComponent,
    ContactListStudentComponent,
    ContactViewStudentComponent,
    ContactEditStudentComponent,
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
  ClassAverageBonusCreateStudentComponent,
  ClassAverageBonusListStudentComponent,
  ClassAverageBonusViewStudentComponent,
  ClassAverageBonusEditStudentComponent,
  NewsCreateStudentComponent,
  NewsListStudentComponent,
  NewsViewStudentComponent,
  NewsEditStudentComponent,
  ContactCreateStudentComponent,
  ContactListStudentComponent,
  ContactViewStudentComponent,
  ContactEditStudentComponent,
  ],
  entryComponents: [],
})
export class CommonStudentModule { }