import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {ReponseService} from 'src/app/controller/service/Reponse.service';
import {ReponseDto} from 'src/app/controller/model/Reponse.model';
import {ReponseCriteria} from 'src/app/controller/criteria/ReponseCriteria.model';
import {QuestionDto} from 'src/app/controller/model/Question.model';
import {QuestionService} from 'src/app/controller/service/Question.service';
import {EtatReponseDto} from 'src/app/controller/model/EtatReponse.model';
import {EtatReponseService} from 'src/app/controller/service/EtatReponse.service';
@Component({
  selector: 'app-reponse-create-student',
  templateUrl: './reponse-create-student.component.html'
})
export class ReponseCreateStudentComponent extends AbstractCreateController<ReponseDto, ReponseCriteria, ReponseService>  implements OnInit {



   private _validReponseRef = true;
   private _validReponseLib = true;
    private _validEtatReponseCode = true;
    private _validEtatReponseLibelle = true;
    private _validQuestionRef = true;

    constructor( private reponseService: ReponseService , private questionService: QuestionService, private etatReponseService: EtatReponseService) {
        super(reponseService);
    }

    ngOnInit(): void {
    this.etatReponse = new EtatReponseDto();
    this.etatReponseService.findAll().subscribe((data) => this.etatReponses = data);
    this.question = new QuestionDto();
    this.questionService.findAll().subscribe((data) => this.questions = data);
}





    public setValidation(value: boolean){
        this.validReponseRef = value;
        this.validReponseLib = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateReponseRef();
        this.validateReponseLib();
    }

    public validateReponseRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
        this.errorMessages.push('Ref non valide');
        this.validReponseRef = false;
        } else {
            this.validReponseRef = true;
        }
    }
    public validateReponseLib(){
        if (this.stringUtilService.isEmpty(this.item.lib)) {
        this.errorMessages.push('Lib non valide');
        this.validReponseLib = false;
        } else {
            this.validReponseLib = true;
        }
    }


    public async openCreateQuestion(question: string) {
    const isPermistted = await this.roleService.isPermitted('Question', 'add');
    if(isPermistted) {
         this.question = new QuestionDto();
         this.createQuestionDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreateEtatReponse(etatReponse: string) {
    const isPermistted = await this.roleService.isPermitted('EtatReponse', 'add');
    if(isPermistted) {
         this.etatReponse = new EtatReponseDto();
         this.createEtatReponseDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }

    get question(): QuestionDto {
        return this.questionService.item;
    }
    set question(value: QuestionDto) {
        this.questionService.item = value;
    }
    get questions(): Array<QuestionDto> {
        return this.questionService.items;
    }
    set questions(value: Array<QuestionDto>) {
        this.questionService.items = value;
    }
    get createQuestionDialog(): boolean {
       return this.questionService.createDialog;
    }
    set createQuestionDialog(value: boolean) {
        this.questionService.createDialog= value;
    }
    get etatReponse(): EtatReponseDto {
        return this.etatReponseService.item;
    }
    set etatReponse(value: EtatReponseDto) {
        this.etatReponseService.item = value;
    }
    get etatReponses(): Array<EtatReponseDto> {
        return this.etatReponseService.items;
    }
    set etatReponses(value: Array<EtatReponseDto>) {
        this.etatReponseService.items = value;
    }
    get createEtatReponseDialog(): boolean {
       return this.etatReponseService.createDialog;
    }
    set createEtatReponseDialog(value: boolean) {
        this.etatReponseService.createDialog= value;
    }



    get validReponseRef(): boolean {
        return this._validReponseRef;
    }

    set validReponseRef(value: boolean) {
         this._validReponseRef = value;
    }
    get validReponseLib(): boolean {
        return this._validReponseLib;
    }

    set validReponseLib(value: boolean) {
         this._validReponseLib = value;
    }

    get validEtatReponseCode(): boolean {
        return this._validEtatReponseCode;
    }
    set validEtatReponseCode(value: boolean) {
        this._validEtatReponseCode = value;
    }
    get validEtatReponseLibelle(): boolean {
        return this._validEtatReponseLibelle;
    }
    set validEtatReponseLibelle(value: boolean) {
        this._validEtatReponseLibelle = value;
    }
    get validQuestionRef(): boolean {
        return this._validQuestionRef;
    }
    set validQuestionRef(value: boolean) {
        this._validQuestionRef = value;
    }


}
