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

import { ClassAverageBonusCreateTeacherComponent } from './class-average-bonus-teacher/create-teacher/class-average-bonus-create-teacher.component';
import { ClassAverageBonusEditTeacherComponent } from './class-average-bonus-teacher/edit-teacher/class-average-bonus-edit-teacher.component';
import { ClassAverageBonusViewTeacherComponent } from './class-average-bonus-teacher/view-teacher/class-average-bonus-view-teacher.component';
import { ClassAverageBonusListTeacherComponent } from './class-average-bonus-teacher/list-teacher/class-average-bonus-list-teacher.component';
import { NewsCreateTeacherComponent } from './news-teacher/create-teacher/news-create-teacher.component';
import { NewsEditTeacherComponent } from './news-teacher/edit-teacher/news-edit-teacher.component';
import { NewsViewTeacherComponent } from './news-teacher/view-teacher/news-view-teacher.component';
import { NewsListTeacherComponent } from './news-teacher/list-teacher/news-list-teacher.component';
import { ContactCreateTeacherComponent } from './contact-teacher/create-teacher/contact-create-teacher.component';
import { ContactEditTeacherComponent } from './contact-teacher/edit-teacher/contact-edit-teacher.component';
import { ContactViewTeacherComponent } from './contact-teacher/view-teacher/contact-view-teacher.component';
import { ContactListTeacherComponent } from './contact-teacher/list-teacher/contact-list-teacher.component';

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

    ClassAverageBonusCreateTeacherComponent,
    ClassAverageBonusListTeacherComponent,
    ClassAverageBonusViewTeacherComponent,
    ClassAverageBonusEditTeacherComponent,
    NewsCreateTeacherComponent,
    NewsListTeacherComponent,
    NewsViewTeacherComponent,
    NewsEditTeacherComponent,
    ContactCreateTeacherComponent,
    ContactListTeacherComponent,
    ContactViewTeacherComponent,
    ContactEditTeacherComponent,
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
  ClassAverageBonusCreateTeacherComponent,
  ClassAverageBonusListTeacherComponent,
  ClassAverageBonusViewTeacherComponent,
  ClassAverageBonusEditTeacherComponent,
  NewsCreateTeacherComponent,
  NewsListTeacherComponent,
  NewsViewTeacherComponent,
  NewsEditTeacherComponent,
  ContactCreateTeacherComponent,
  ContactListTeacherComponent,
  ContactViewTeacherComponent,
  ContactEditTeacherComponent,
  ],
  entryComponents: [],
})
export class CommonTeacherModule { }