import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {CategorieSectionService} from 'src/app/controller/service/CategorieSection.service';
import {CategorieSectionDto} from 'src/app/controller/model/CategorieSection.model';
import {CategorieSectionCriteria} from 'src/app/controller/criteria/CategorieSectionCriteria.model';

import {SectionItemDto} from 'src/app/controller/model/SectionItem.model';
import {SectionItemService} from 'src/app/controller/service/SectionItem.service';
import {SuperCategorieSectionDto} from 'src/app/controller/model/SuperCategorieSection.model';
import {SuperCategorieSectionService} from 'src/app/controller/service/SuperCategorieSection.service';
import {SessionCoursDto} from 'src/app/controller/model/SessionCours.model';
import {SessionCoursService} from 'src/app/controller/service/SessionCours.service';
import {SectionDto} from 'src/app/controller/model/Section.model';
import {SectionService} from 'src/app/controller/service/Section.service';
import {CoursDto} from 'src/app/controller/model/Cours.model';
import {CoursService} from 'src/app/controller/service/Cours.service';
@Component({
  selector: 'app-categorie-section-view-teacher',
  templateUrl: './categorie-section-view-teacher.component.html'
})
export class CategorieSectionViewTeacherComponent extends AbstractViewController<CategorieSectionDto, CategorieSectionCriteria, CategorieSectionService> implements OnInit {

    sections = new SectionDto();
    sectionss: Array<SectionDto> = [];

    constructor(private categorieSectionService: CategorieSectionService, private sessionCoursService: SessionCoursService, private superCategorieSectionService: SuperCategorieSectionService, private sectionService: SectionService, private coursService: CoursService){
        super(categorieSectionService);
    }

    ngOnInit(): void {
        this.sections.cours = new CoursDto();
        this.coursService.findAll().subscribe((data) => this.courss = data);
        this.sections.sessionCours = new SessionCoursDto();
        this.sessionCoursService.findAll().subscribe((data) => this.sessionCourss = data);
        this.superCategorieSection = new SuperCategorieSectionDto();
        this.superCategorieSectionService.findAll().subscribe((data) => this.superCategorieSections = data);
    }


    get superCategorieSection(): SuperCategorieSectionDto {
       return this.superCategorieSectionService.item;
    }
    set superCategorieSection(value: SuperCategorieSectionDto) {
        this.superCategorieSectionService.item = value;
    }
    get superCategorieSections():Array<SuperCategorieSectionDto> {
       return this.superCategorieSectionService.items;
    }
    set superCategorieSections(value: Array<SuperCategorieSectionDto>) {
        this.superCategorieSectionService.items = value;
    }
    get cours(): CoursDto {
       return this.coursService.item;
    }
    set cours(value: CoursDto) {
        this.coursService.item = value;
    }
    get courss():Array<CoursDto> {
       return this.coursService.items;
    }
    set courss(value: Array<CoursDto>) {
        this.coursService.items = value;
    }
    get sessionCours(): SessionCoursDto {
       return this.sessionCoursService.item;
    }
    set sessionCours(value: SessionCoursDto) {
        this.sessionCoursService.item = value;
    }
    get sessionCourss():Array<SessionCoursDto> {
       return this.sessionCoursService.items;
    }
    set sessionCourss(value: Array<SessionCoursDto>) {
        this.sessionCoursService.items = value;
    }


}
