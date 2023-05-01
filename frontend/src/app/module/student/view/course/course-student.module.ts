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

import { ParcoursCreateStudentComponent } from './parcours-student/create-student/parcours-create-student.component';
import { ParcoursEditStudentComponent } from './parcours-student/edit-student/parcours-edit-student.component';
import { ParcoursViewStudentComponent } from './parcours-student/view-student/parcours-view-student.component';
import { ParcoursListStudentComponent } from './parcours-student/list-student/parcours-list-student.component';
import { CoursCreateStudentComponent } from './cours-student/create-student/cours-create-student.component';
import { CoursEditStudentComponent } from './cours-student/edit-student/cours-edit-student.component';
import { CoursViewStudentComponent } from './cours-student/view-student/cours-view-student.component';
import { CoursListStudentComponent } from './cours-student/list-student/cours-list-student.component';
import { EtatCoursCreateStudentComponent } from './etat-cours-student/create-student/etat-cours-create-student.component';
import { EtatCoursEditStudentComponent } from './etat-cours-student/edit-student/etat-cours-edit-student.component';
import { EtatCoursViewStudentComponent } from './etat-cours-student/view-student/etat-cours-view-student.component';
import { EtatCoursListStudentComponent } from './etat-cours-student/list-student/etat-cours-list-student.component';
import { VocabularyCreateStudentComponent } from './vocabulary-student/create-student/vocabulary-create-student.component';
import { VocabularyEditStudentComponent } from './vocabulary-student/edit-student/vocabulary-edit-student.component';
import { VocabularyViewStudentComponent } from './vocabulary-student/view-student/vocabulary-view-student.component';
import { VocabularyListStudentComponent } from './vocabulary-student/list-student/vocabulary-list-student.component';
import { SuperCategorieSectionCreateStudentComponent } from './super-categorie-section-student/create-student/super-categorie-section-create-student.component';
import { SuperCategorieSectionEditStudentComponent } from './super-categorie-section-student/edit-student/super-categorie-section-edit-student.component';
import { SuperCategorieSectionViewStudentComponent } from './super-categorie-section-student/view-student/super-categorie-section-view-student.component';
import { SuperCategorieSectionListStudentComponent } from './super-categorie-section-student/list-student/super-categorie-section-list-student.component';
import { CategorieSectionCreateStudentComponent } from './categorie-section-student/create-student/categorie-section-create-student.component';
import { CategorieSectionEditStudentComponent } from './categorie-section-student/edit-student/categorie-section-edit-student.component';
import { CategorieSectionViewStudentComponent } from './categorie-section-student/view-student/categorie-section-view-student.component';
import { CategorieSectionListStudentComponent } from './categorie-section-student/list-student/categorie-section-list-student.component';
import { CentreCreateStudentComponent } from './centre-student/create-student/centre-create-student.component';
import { CentreEditStudentComponent } from './centre-student/edit-student/centre-edit-student.component';
import { CentreViewStudentComponent } from './centre-student/view-student/centre-view-student.component';
import { CentreListStudentComponent } from './centre-student/list-student/centre-list-student.component';
import { SectionCreateStudentComponent } from './section-student/create-student/section-create-student.component';
import { SectionEditStudentComponent } from './section-student/edit-student/section-edit-student.component';
import { SectionViewStudentComponent } from './section-student/view-student/section-view-student.component';
import { SectionListStudentComponent } from './section-student/list-student/section-list-student.component';
import { VocabularyQuizCreateStudentComponent } from './vocabulary-quiz-student/create-student/vocabulary-quiz-create-student.component';
import { VocabularyQuizEditStudentComponent } from './vocabulary-quiz-student/edit-student/vocabulary-quiz-edit-student.component';
import { VocabularyQuizViewStudentComponent } from './vocabulary-quiz-student/view-student/vocabulary-quiz-view-student.component';
import { VocabularyQuizListStudentComponent } from './vocabulary-quiz-student/list-student/vocabulary-quiz-list-student.component';
import { SectionItemCreateStudentComponent } from './section-item-student/create-student/section-item-create-student.component';
import { SectionItemEditStudentComponent } from './section-item-student/edit-student/section-item-edit-student.component';
import { SectionItemViewStudentComponent } from './section-item-student/view-student/section-item-view-student.component';
import { SectionItemListStudentComponent } from './section-item-student/list-student/section-item-list-student.component';
import { LevelTestConfigurationCreateStudentComponent } from './level-test-configuration-student/create-student/level-test-configuration-create-student.component';
import { LevelTestConfigurationEditStudentComponent } from './level-test-configuration-student/edit-student/level-test-configuration-edit-student.component';
import { LevelTestConfigurationViewStudentComponent } from './level-test-configuration-student/view-student/level-test-configuration-view-student.component';
import { LevelTestConfigurationListStudentComponent } from './level-test-configuration-student/list-student/level-test-configuration-list-student.component';

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

    ParcoursCreateStudentComponent,
    ParcoursListStudentComponent,
    ParcoursViewStudentComponent,
    ParcoursEditStudentComponent,
    CoursCreateStudentComponent,
    CoursListStudentComponent,
    CoursViewStudentComponent,
    CoursEditStudentComponent,
    EtatCoursCreateStudentComponent,
    EtatCoursListStudentComponent,
    EtatCoursViewStudentComponent,
    EtatCoursEditStudentComponent,
    VocabularyCreateStudentComponent,
    VocabularyListStudentComponent,
    VocabularyViewStudentComponent,
    VocabularyEditStudentComponent,
    SuperCategorieSectionCreateStudentComponent,
    SuperCategorieSectionListStudentComponent,
    SuperCategorieSectionViewStudentComponent,
    SuperCategorieSectionEditStudentComponent,
    CategorieSectionCreateStudentComponent,
    CategorieSectionListStudentComponent,
    CategorieSectionViewStudentComponent,
    CategorieSectionEditStudentComponent,
    CentreCreateStudentComponent,
    CentreListStudentComponent,
    CentreViewStudentComponent,
    CentreEditStudentComponent,
    SectionCreateStudentComponent,
    SectionListStudentComponent,
    SectionViewStudentComponent,
    SectionEditStudentComponent,
    VocabularyQuizCreateStudentComponent,
    VocabularyQuizListStudentComponent,
    VocabularyQuizViewStudentComponent,
    VocabularyQuizEditStudentComponent,
    SectionItemCreateStudentComponent,
    SectionItemListStudentComponent,
    SectionItemViewStudentComponent,
    SectionItemEditStudentComponent,
    LevelTestConfigurationCreateStudentComponent,
    LevelTestConfigurationListStudentComponent,
    LevelTestConfigurationViewStudentComponent,
    LevelTestConfigurationEditStudentComponent,
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
  ParcoursCreateStudentComponent,
  ParcoursListStudentComponent,
  ParcoursViewStudentComponent,
  ParcoursEditStudentComponent,
  CoursCreateStudentComponent,
  CoursListStudentComponent,
  CoursViewStudentComponent,
  CoursEditStudentComponent,
  EtatCoursCreateStudentComponent,
  EtatCoursListStudentComponent,
  EtatCoursViewStudentComponent,
  EtatCoursEditStudentComponent,
  VocabularyCreateStudentComponent,
  VocabularyListStudentComponent,
  VocabularyViewStudentComponent,
  VocabularyEditStudentComponent,
  SuperCategorieSectionCreateStudentComponent,
  SuperCategorieSectionListStudentComponent,
  SuperCategorieSectionViewStudentComponent,
  SuperCategorieSectionEditStudentComponent,
  CategorieSectionCreateStudentComponent,
  CategorieSectionListStudentComponent,
  CategorieSectionViewStudentComponent,
  CategorieSectionEditStudentComponent,
  CentreCreateStudentComponent,
  CentreListStudentComponent,
  CentreViewStudentComponent,
  CentreEditStudentComponent,
  SectionCreateStudentComponent,
  SectionListStudentComponent,
  SectionViewStudentComponent,
  SectionEditStudentComponent,
  VocabularyQuizCreateStudentComponent,
  VocabularyQuizListStudentComponent,
  VocabularyQuizViewStudentComponent,
  VocabularyQuizEditStudentComponent,
  SectionItemCreateStudentComponent,
  SectionItemListStudentComponent,
  SectionItemViewStudentComponent,
  SectionItemEditStudentComponent,
  LevelTestConfigurationCreateStudentComponent,
  LevelTestConfigurationListStudentComponent,
  LevelTestConfigurationViewStudentComponent,
  LevelTestConfigurationEditStudentComponent,
  ],
  entryComponents: [],
})
export class CourseStudentModule { }