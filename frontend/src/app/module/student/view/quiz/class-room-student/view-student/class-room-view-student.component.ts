import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {ClassRoomService} from 'src/app/controller/service/ClassRoom.service';
import {ClassRoomDto} from 'src/app/controller/model/ClassRoom.model';
import {ClassRoomCriteria} from 'src/app/controller/criteria/ClassRoomCriteria.model';

import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {EtudiantService} from 'src/app/controller/service/Etudiant.service';
import {EtudiantClassRoomDto} from 'src/app/controller/model/EtudiantClassRoom.model';
import {EtudiantClassRoomService} from 'src/app/controller/service/EtudiantClassRoom.service';
import {QuizClassRoomDto} from 'src/app/controller/model/QuizClassRoom.model';
import {QuizClassRoomService} from 'src/app/controller/service/QuizClassRoom.service';
import {QuizDto} from 'src/app/controller/model/Quiz.model';
import {QuizService} from 'src/app/controller/service/Quiz.service';
import {ProfDto} from 'src/app/controller/model/Prof.model';
import {ProfService} from 'src/app/controller/service/Prof.service';
@Component({
  selector: 'app-class-room-view-student',
  templateUrl: './class-room-view-student.component.html'
})
export class ClassRoomViewStudentComponent extends AbstractViewController<ClassRoomDto, ClassRoomCriteria, ClassRoomService> implements OnInit {

    etudiantClassRooms = new EtudiantClassRoomDto();
    etudiantClassRoomss: Array<EtudiantClassRoomDto> = [];
    quizClassRooms = new QuizClassRoomDto();
    quizClassRoomss: Array<QuizClassRoomDto> = [];

    constructor(private classRoomService: ClassRoomService, private etudiantService: EtudiantService, private etudiantClassRoomService: EtudiantClassRoomService, private quizClassRoomService: QuizClassRoomService, private quizService: QuizService, private profService: ProfService){
        super(classRoomService);
    }

    ngOnInit(): void {
        this.etudiantClassRooms.etudiant = new EtudiantDto();
        this.etudiantService.findAll().subscribe((data) => this.etudiants = data);
        this.quizClassRooms.quiz = new QuizDto();
        this.quizService.findAll().subscribe((data) => this.quizs = data);
        this.prof = new ProfDto();
        this.profService.findAll().subscribe((data) => this.profs = data);
    }


    get prof(): ProfDto {
       return this.profService.item;
    }
    set prof(value: ProfDto) {
        this.profService.item = value;
    }
    get profs():Array<ProfDto> {
       return this.profService.items;
    }
    set profs(value: Array<ProfDto>) {
        this.profService.items = value;
    }
    get quiz(): QuizDto {
       return this.quizService.item;
    }
    set quiz(value: QuizDto) {
        this.quizService.item = value;
    }
    get quizs():Array<QuizDto> {
       return this.quizService.items;
    }
    set quizs(value: Array<QuizDto>) {
        this.quizService.items = value;
    }
    get etudiant(): EtudiantDto {
       return this.etudiantService.item;
    }
    set etudiant(value: EtudiantDto) {
        this.etudiantService.item = value;
    }
    get etudiants():Array<EtudiantDto> {
       return this.etudiantService.items;
    }
    set etudiants(value: Array<EtudiantDto>) {
        this.etudiantService.items = value;
    }


}
