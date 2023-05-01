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

import { ParcoursCreateTeacherComponent } from './parcours-teacher/create-teacher/parcours-create-teacher.component';
import { ParcoursEditTeacherComponent } from './parcours-teacher/edit-teacher/parcours-edit-teacher.component';
import { ParcoursViewTeacherComponent } from './parcours-teacher/view-teacher/parcours-view-teacher.component';
import { ParcoursListTeacherComponent } from './parcours-teacher/list-teacher/parcours-list-teacher.component';
import { CoursCreateTeacherComponent } from './cours-teacher/create-teacher/cours-create-teacher.component';
import { CoursEditTeacherComponent } from './cours-teacher/edit-teacher/cours-edit-teacher.component';
import { CoursViewTeacherComponent } from './cours-teacher/view-teacher/cours-view-teacher.component';
import { CoursListTeacherComponent } from './cours-teacher/list-teacher/cours-list-teacher.component';
import { EtatCoursCreateTeacherComponent } from './etat-cours-teacher/create-teacher/etat-cours-create-teacher.component';
import { EtatCoursEditTeacherComponent } from './etat-cours-teacher/edit-teacher/etat-cours-edit-teacher.component';
import { EtatCoursViewTeacherComponent } from './etat-cours-teacher/view-teacher/etat-cours-view-teacher.component';
import { EtatCoursListTeacherComponent } from './etat-cours-teacher/list-teacher/etat-cours-list-teacher.component';
import { VocabularyCreateTeacherComponent } from './vocabulary-teacher/create-teacher/vocabulary-create-teacher.component';
import { VocabularyEditTeacherComponent } from './vocabulary-teacher/edit-teacher/vocabulary-edit-teacher.component';
import { VocabularyViewTeacherComponent } from './vocabulary-teacher/view-teacher/vocabulary-view-teacher.component';
import { VocabularyListTeacherComponent } from './vocabulary-teacher/list-teacher/vocabulary-list-teacher.component';
import { SuperCategorieSectionCreateTeacherComponent } from './super-categorie-section-teacher/create-teacher/super-categorie-section-create-teacher.component';
import { SuperCategorieSectionEditTeacherComponent } from './super-categorie-section-teacher/edit-teacher/super-categorie-section-edit-teacher.component';
import { SuperCategorieSectionViewTeacherComponent } from './super-categorie-section-teacher/view-teacher/super-categorie-section-view-teacher.component';
import { SuperCategorieSectionListTeacherComponent } from './super-categorie-section-teacher/list-teacher/super-categorie-section-list-teacher.component';
import { CategorieSectionCreateTeacherComponent } from './categorie-section-teacher/create-teacher/categorie-section-create-teacher.component';
import { CategorieSectionEditTeacherComponent } from './categorie-section-teacher/edit-teacher/categorie-section-edit-teacher.component';
import { CategorieSectionViewTeacherComponent } from './categorie-section-teacher/view-teacher/categorie-section-view-teacher.component';
import { CategorieSectionListTeacherComponent } from './categorie-section-teacher/list-teacher/categorie-section-list-teacher.component';
import { CentreCreateTeacherComponent } from './centre-teacher/create-teacher/centre-create-teacher.component';
import { CentreEditTeacherComponent } from './centre-teacher/edit-teacher/centre-edit-teacher.component';
import { CentreViewTeacherComponent } from './centre-teacher/view-teacher/centre-view-teacher.component';
import { CentreListTeacherComponent } from './centre-teacher/list-teacher/centre-list-teacher.component';
import { SectionCreateTeacherComponent } from './section-teacher/create-teacher/section-create-teacher.component';
import { SectionEditTeacherComponent } from './section-teacher/edit-teacher/section-edit-teacher.component';
import { SectionViewTeacherComponent } from './section-teacher/view-teacher/section-view-teacher.component';
import { SectionListTeacherComponent } from './section-teacher/list-teacher/section-list-teacher.component';
import { VocabularyQuizCreateTeacherComponent } from './vocabulary-quiz-teacher/create-teacher/vocabulary-quiz-create-teacher.component';
import { VocabularyQuizEditTeacherComponent } from './vocabulary-quiz-teacher/edit-teacher/vocabulary-quiz-edit-teacher.component';
import { VocabularyQuizViewTeacherComponent } from './vocabulary-quiz-teacher/view-teacher/vocabulary-quiz-view-teacher.component';
import { VocabularyQuizListTeacherComponent } from './vocabulary-quiz-teacher/list-teacher/vocabulary-quiz-list-teacher.component';
import { SectionItemCreateTeacherComponent } from './section-item-teacher/create-teacher/section-item-create-teacher.component';
import { SectionItemEditTeacherComponent } from './section-item-teacher/edit-teacher/section-item-edit-teacher.component';
import { SectionItemViewTeacherComponent } from './section-item-teacher/view-teacher/section-item-view-teacher.component';
import { SectionItemListTeacherComponent } from './section-item-teacher/list-teacher/section-item-list-teacher.component';
import { LevelTestConfigurationCreateTeacherComponent } from './level-test-configuration-teacher/create-teacher/level-test-configuration-create-teacher.component';
import { LevelTestConfigurationEditTeacherComponent } from './level-test-configuration-teacher/edit-teacher/level-test-configuration-edit-teacher.component';
import { LevelTestConfigurationViewTeacherComponent } from './level-test-configuration-teacher/view-teacher/level-test-configuration-view-teacher.component';
import { LevelTestConfigurationListTeacherComponent } from './level-test-configuration-teacher/list-teacher/level-test-configuration-list-teacher.component';

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

    ParcoursCreateTeacherComponent,
    ParcoursListTeacherComponent,
    ParcoursViewTeacherComponent,
    ParcoursEditTeacherComponent,
    CoursCreateTeacherComponent,
    CoursListTeacherComponent,
    CoursViewTeacherComponent,
    CoursEditTeacherComponent,
    EtatCoursCreateTeacherComponent,
    EtatCoursListTeacherComponent,
    EtatCoursViewTeacherComponent,
    EtatCoursEditTeacherComponent,
    VocabularyCreateTeacherComponent,
    VocabularyListTeacherComponent,
    VocabularyViewTeacherComponent,
    VocabularyEditTeacherComponent,
    SuperCategorieSectionCreateTeacherComponent,
    SuperCategorieSectionListTeacherComponent,
    SuperCategorieSectionViewTeacherComponent,
    SuperCategorieSectionEditTeacherComponent,
    CategorieSectionCreateTeacherComponent,
    CategorieSectionListTeacherComponent,
    CategorieSectionViewTeacherComponent,
    CategorieSectionEditTeacherComponent,
    CentreCreateTeacherComponent,
    CentreListTeacherComponent,
    CentreViewTeacherComponent,
    CentreEditTeacherComponent,
    SectionCreateTeacherComponent,
    SectionListTeacherComponent,
    SectionViewTeacherComponent,
    SectionEditTeacherComponent,
    VocabularyQuizCreateTeacherComponent,
    VocabularyQuizListTeacherComponent,
    VocabularyQuizViewTeacherComponent,
    VocabularyQuizEditTeacherComponent,
    SectionItemCreateTeacherComponent,
    SectionItemListTeacherComponent,
    SectionItemViewTeacherComponent,
    SectionItemEditTeacherComponent,
    LevelTestConfigurationCreateTeacherComponent,
    LevelTestConfigurationListTeacherComponent,
    LevelTestConfigurationViewTeacherComponent,
    LevelTestConfigurationEditTeacherComponent,
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
  ParcoursCreateTeacherComponent,
  ParcoursListTeacherComponent,
  ParcoursViewTeacherComponent,
  ParcoursEditTeacherComponent,
  CoursCreateTeacherComponent,
  CoursListTeacherComponent,
  CoursViewTeacherComponent,
  CoursEditTeacherComponent,
  EtatCoursCreateTeacherComponent,
  EtatCoursListTeacherComponent,
  EtatCoursViewTeacherComponent,
  EtatCoursEditTeacherComponent,
  VocabularyCreateTeacherComponent,
  VocabularyListTeacherComponent,
  VocabularyViewTeacherComponent,
  VocabularyEditTeacherComponent,
  SuperCategorieSectionCreateTeacherComponent,
  SuperCategorieSectionListTeacherComponent,
  SuperCategorieSectionViewTeacherComponent,
  SuperCategorieSectionEditTeacherComponent,
  CategorieSectionCreateTeacherComponent,
  CategorieSectionListTeacherComponent,
  CategorieSectionViewTeacherComponent,
  CategorieSectionEditTeacherComponent,
  CentreCreateTeacherComponent,
  CentreListTeacherComponent,
  CentreViewTeacherComponent,
  CentreEditTeacherComponent,
  SectionCreateTeacherComponent,
  SectionListTeacherComponent,
  SectionViewTeacherComponent,
  SectionEditTeacherComponent,
  VocabularyQuizCreateTeacherComponent,
  VocabularyQuizListTeacherComponent,
  VocabularyQuizViewTeacherComponent,
  VocabularyQuizEditTeacherComponent,
  SectionItemCreateTeacherComponent,
  SectionItemListTeacherComponent,
  SectionItemViewTeacherComponent,
  SectionItemEditTeacherComponent,
  LevelTestConfigurationCreateTeacherComponent,
  LevelTestConfigurationListTeacherComponent,
  LevelTestConfigurationViewTeacherComponent,
  LevelTestConfigurationEditTeacherComponent,
  ],
  entryComponents: [],
})
export class CourseTeacherModule { }