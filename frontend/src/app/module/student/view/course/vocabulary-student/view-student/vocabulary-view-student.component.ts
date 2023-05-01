import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {VocabularyService} from 'src/app/controller/service/Vocabulary.service';
import {VocabularyDto} from 'src/app/controller/model/Vocabulary.model';
import {VocabularyCriteria} from 'src/app/controller/criteria/VocabularyCriteria.model';

import {SectionDto} from 'src/app/controller/model/Section.model';
import {SectionService} from 'src/app/controller/service/Section.service';
import {VocabularyQuizDto} from 'src/app/controller/model/VocabularyQuiz.model';
import {VocabularyQuizService} from 'src/app/controller/service/VocabularyQuiz.service';
@Component({
  selector: 'app-vocabulary-view-student',
  templateUrl: './vocabulary-view-student.component.html'
})
export class VocabularyViewStudentComponent extends AbstractViewController<VocabularyDto, VocabularyCriteria, VocabularyService> implements OnInit {


    constructor(private vocabularyService: VocabularyService, private sectionService: SectionService, private vocabularyQuizService: VocabularyQuizService){
        super(vocabularyService);
    }

    ngOnInit(): void {
        this.section = new SectionDto();
        this.sectionService.findAll().subscribe((data) => this.sections = data);
        this.vocabularyQuiz = new VocabularyQuizDto();
        this.vocabularyQuizService.findAll().subscribe((data) => this.vocabularyQuizs = data);
    }


    get vocabularyQuiz(): VocabularyQuizDto {
       return this.vocabularyQuizService.item;
    }
    set vocabularyQuiz(value: VocabularyQuizDto) {
        this.vocabularyQuizService.item = value;
    }
    get vocabularyQuizs():Array<VocabularyQuizDto> {
       return this.vocabularyQuizService.items;
    }
    set vocabularyQuizs(value: Array<VocabularyQuizDto>) {
        this.vocabularyQuizService.items = value;
    }
    get section(): SectionDto {
       return this.sectionService.item;
    }
    set section(value: SectionDto) {
        this.sectionService.item = value;
    }
    get sections():Array<SectionDto> {
       return this.sectionService.items;
    }
    set sections(value: Array<SectionDto>) {
        this.sectionService.items = value;
    }


}
