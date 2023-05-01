import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {InscriptionService} from 'src/app/controller/service/Inscription.service';
import {InscriptionDto} from 'src/app/controller/model/Inscription.model';
import {InscriptionCriteria} from 'src/app/controller/criteria/InscriptionCriteria.model';


import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {EtudiantService} from 'src/app/controller/service/Etudiant.service';
import {ParcoursDto} from 'src/app/controller/model/Parcours.model';
import {ParcoursService} from 'src/app/controller/service/Parcours.service';
import {StatutSocialDto} from 'src/app/controller/model/StatutSocial.model';
import {StatutSocialService} from 'src/app/controller/service/StatutSocial.service';
import {NiveauEtudeDto} from 'src/app/controller/model/NiveauEtude.model';
import {NiveauEtudeService} from 'src/app/controller/service/NiveauEtude.service';
import {GroupeEtudeDto} from 'src/app/controller/model/GroupeEtude.model';
import {GroupeEtudeService} from 'src/app/controller/service/GroupeEtude.service';
import {InteretEtudiantDto} from 'src/app/controller/model/InteretEtudiant.model';
import {InteretEtudiantService} from 'src/app/controller/service/InteretEtudiant.service';
import {QuizDto} from 'src/app/controller/model/Quiz.model';
import {QuizService} from 'src/app/controller/service/Quiz.service';
import {SkillDto} from 'src/app/controller/model/Skill.model';
import {SkillService} from 'src/app/controller/service/Skill.service';
import {PackStudentDto} from 'src/app/controller/model/PackStudent.model';
import {PackStudentService} from 'src/app/controller/service/PackStudent.service';
import {EtatInscriptionDto} from 'src/app/controller/model/EtatInscription.model';
import {EtatInscriptionService} from 'src/app/controller/service/EtatInscription.service';
import {FonctionDto} from 'src/app/controller/model/Fonction.model';
import {FonctionService} from 'src/app/controller/service/Fonction.service';

@Component({
  selector: 'app-inscription-edit-student',
  templateUrl: './inscription-edit-student.component.html'
})
export class InscriptionEditStudentComponent extends AbstractEditController<InscriptionDto, InscriptionCriteria, InscriptionService>   implements OnInit {



    private _validEtudiantRef = true;
    private _validEtatInscriptionRef = true;
    private _validParcoursCode = true;
    private _validParcoursLibelle = true;
    private _validGroupeEtudeLibelle = true;
    private _validStatutSocialCode = true;
    private _validStatutSocialLibelle = true;
    private _validInteretEtudiantCode = true;
    private _validInteretEtudiantLibelle = true;
    private _validNiveauEtudeLibelle = true;
    private _validNiveauEtudeCode = true;
    private _validFonctionCode = true;
    private _validFonctionLibelle = true;
    private _validQuizRef = true;
    private _validQuizLib = true;
    private _validPackStudentCode = true;
    private _validPackStudentLibelle = true;
    private _validSkillCode = true;
    private _validSkillLibelle = true;



    constructor( private inscriptionService: InscriptionService , private etudiantService: EtudiantService, private parcoursService: ParcoursService, private statutSocialService: StatutSocialService, private niveauEtudeService: NiveauEtudeService, private groupeEtudeService: GroupeEtudeService, private interetEtudiantService: InteretEtudiantService, private quizService: QuizService, private skillService: SkillService, private packStudentService: PackStudentService, private etatInscriptionService: EtatInscriptionService, private fonctionService: FonctionService) {
        super(inscriptionService);
    }

    ngOnInit(): void {
    this.etudiant = new EtudiantDto();
    this.etudiantService.findAll().subscribe((data) => this.etudiants = data);
    this.etatInscription = new EtatInscriptionDto();
    this.etatInscriptionService.findAll().subscribe((data) => this.etatInscriptions = data);
    this.parcours = new ParcoursDto();
    this.parcoursService.findAll().subscribe((data) => this.parcourss = data);
    this.groupeEtude = new GroupeEtudeDto();
    this.groupeEtudeService.findAll().subscribe((data) => this.groupeEtudes = data);
    this.statutSocial = new StatutSocialDto();
    this.statutSocialService.findAll().subscribe((data) => this.statutSocials = data);
    this.interetEtudiant = new InteretEtudiantDto();
    this.interetEtudiantService.findAll().subscribe((data) => this.interetEtudiants = data);
    this.niveauEtude = new NiveauEtudeDto();
    this.niveauEtudeService.findAll().subscribe((data) => this.niveauEtudes = data);
    this.fonction = new FonctionDto();
    this.fonctionService.findAll().subscribe((data) => this.fonctions = data);
    this.quiz = new QuizDto();
    this.quizService.findAll().subscribe((data) => this.quizs = data);
    this.packStudent = new PackStudentDto();
    this.packStudentService.findAll().subscribe((data) => this.packStudents = data);
    this.skill = new SkillDto();
    this.skillService.findAll().subscribe((data) => this.skills = data);
}
    public prepareEdit() {
        this.item.datedebutinscription = this.inscriptionService.format(this.item.datedebutinscription);
        this.item.datefininscription = this.inscriptionService.format(this.item.datefininscription);
    }



    public setValidation(value : boolean){
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }



   public async openCreatePackStudent(packStudent: string) {
        const isPermistted = await this.roleService.isPermitted('PackStudent', 'edit');
        if(isPermistted) {
             this.packStudent = new PackStudentDto();
             this.createPackStudentDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateStatutSocial(statutSocial: string) {
        const isPermistted = await this.roleService.isPermitted('StatutSocial', 'edit');
        if(isPermistted) {
             this.statutSocial = new StatutSocialDto();
             this.createStatutSocialDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateNiveauEtude(niveauEtude: string) {
        const isPermistted = await this.roleService.isPermitted('NiveauEtude', 'edit');
        if(isPermistted) {
             this.niveauEtude = new NiveauEtudeDto();
             this.createNiveauEtudeDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateSkill(skill: string) {
        const isPermistted = await this.roleService.isPermitted('Skill', 'edit');
        if(isPermistted) {
             this.skill = new SkillDto();
             this.createSkillDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateEtudiant(etudiant: string) {
        const isPermistted = await this.roleService.isPermitted('Etudiant', 'edit');
        if(isPermistted) {
             this.etudiant = new EtudiantDto();
             this.createEtudiantDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateInteretEtudiant(interetEtudiant: string) {
        const isPermistted = await this.roleService.isPermitted('InteretEtudiant', 'edit');
        if(isPermistted) {
             this.interetEtudiant = new InteretEtudiantDto();
             this.createInteretEtudiantDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateEtatInscription(etatInscription: string) {
        const isPermistted = await this.roleService.isPermitted('EtatInscription', 'edit');
        if(isPermistted) {
             this.etatInscription = new EtatInscriptionDto();
             this.createEtatInscriptionDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateFonction(fonction: string) {
        const isPermistted = await this.roleService.isPermitted('Fonction', 'edit');
        if(isPermistted) {
             this.fonction = new FonctionDto();
             this.createFonctionDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateGroupeEtude(groupeEtude: string) {
        const isPermistted = await this.roleService.isPermitted('GroupeEtude', 'edit');
        if(isPermistted) {
             this.groupeEtude = new GroupeEtudeDto();
             this.createGroupeEtudeDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

   get packStudent(): PackStudentDto {
       return this.packStudentService.item;
   }
  set packStudent(value: PackStudentDto) {
        this.packStudentService.item = value;
   }
   get packStudents(): Array<PackStudentDto> {
        return this.packStudentService.items;
   }
   set packStudents(value: Array<PackStudentDto>) {
        this.packStudentService.items = value;
   }
   get createPackStudentDialog(): boolean {
       return this.packStudentService.createDialog;
   }
  set createPackStudentDialog(value: boolean) {
       this.packStudentService.createDialog= value;
   }
   get statutSocial(): StatutSocialDto {
       return this.statutSocialService.item;
   }
  set statutSocial(value: StatutSocialDto) {
        this.statutSocialService.item = value;
   }
   get statutSocials(): Array<StatutSocialDto> {
        return this.statutSocialService.items;
   }
   set statutSocials(value: Array<StatutSocialDto>) {
        this.statutSocialService.items = value;
   }
   get createStatutSocialDialog(): boolean {
       return this.statutSocialService.createDialog;
   }
  set createStatutSocialDialog(value: boolean) {
       this.statutSocialService.createDialog= value;
   }
   get niveauEtude(): NiveauEtudeDto {
       return this.niveauEtudeService.item;
   }
  set niveauEtude(value: NiveauEtudeDto) {
        this.niveauEtudeService.item = value;
   }
   get niveauEtudes(): Array<NiveauEtudeDto> {
        return this.niveauEtudeService.items;
   }
   set niveauEtudes(value: Array<NiveauEtudeDto>) {
        this.niveauEtudeService.items = value;
   }
   get createNiveauEtudeDialog(): boolean {
       return this.niveauEtudeService.createDialog;
   }
  set createNiveauEtudeDialog(value: boolean) {
       this.niveauEtudeService.createDialog= value;
   }
   get quiz(): QuizDto {
       return this.quizService.item;
   }
  set quiz(value: QuizDto) {
        this.quizService.item = value;
   }
   get quizs(): Array<QuizDto> {
        return this.quizService.items;
   }
   set quizs(value: Array<QuizDto>) {
        this.quizService.items = value;
   }
   get createQuizDialog(): boolean {
       return this.quizService.createDialog;
   }
  set createQuizDialog(value: boolean) {
       this.quizService.createDialog= value;
   }
   get parcours(): ParcoursDto {
       return this.parcoursService.item;
   }
  set parcours(value: ParcoursDto) {
        this.parcoursService.item = value;
   }
   get parcourss(): Array<ParcoursDto> {
        return this.parcoursService.items;
   }
   set parcourss(value: Array<ParcoursDto>) {
        this.parcoursService.items = value;
   }
   get createParcoursDialog(): boolean {
       return this.parcoursService.createDialog;
   }
  set createParcoursDialog(value: boolean) {
       this.parcoursService.createDialog= value;
   }
   get skill(): SkillDto {
       return this.skillService.item;
   }
  set skill(value: SkillDto) {
        this.skillService.item = value;
   }
   get skills(): Array<SkillDto> {
        return this.skillService.items;
   }
   set skills(value: Array<SkillDto>) {
        this.skillService.items = value;
   }
   get createSkillDialog(): boolean {
       return this.skillService.createDialog;
   }
  set createSkillDialog(value: boolean) {
       this.skillService.createDialog= value;
   }
   get etudiant(): EtudiantDto {
       return this.etudiantService.item;
   }
  set etudiant(value: EtudiantDto) {
        this.etudiantService.item = value;
   }
   get etudiants(): Array<EtudiantDto> {
        return this.etudiantService.items;
   }
   set etudiants(value: Array<EtudiantDto>) {
        this.etudiantService.items = value;
   }
   get createEtudiantDialog(): boolean {
       return this.etudiantService.createDialog;
   }
  set createEtudiantDialog(value: boolean) {
       this.etudiantService.createDialog= value;
   }
   get interetEtudiant(): InteretEtudiantDto {
       return this.interetEtudiantService.item;
   }
  set interetEtudiant(value: InteretEtudiantDto) {
        this.interetEtudiantService.item = value;
   }
   get interetEtudiants(): Array<InteretEtudiantDto> {
        return this.interetEtudiantService.items;
   }
   set interetEtudiants(value: Array<InteretEtudiantDto>) {
        this.interetEtudiantService.items = value;
   }
   get createInteretEtudiantDialog(): boolean {
       return this.interetEtudiantService.createDialog;
   }
  set createInteretEtudiantDialog(value: boolean) {
       this.interetEtudiantService.createDialog= value;
   }
   get etatInscription(): EtatInscriptionDto {
       return this.etatInscriptionService.item;
   }
  set etatInscription(value: EtatInscriptionDto) {
        this.etatInscriptionService.item = value;
   }
   get etatInscriptions(): Array<EtatInscriptionDto> {
        return this.etatInscriptionService.items;
   }
   set etatInscriptions(value: Array<EtatInscriptionDto>) {
        this.etatInscriptionService.items = value;
   }
   get createEtatInscriptionDialog(): boolean {
       return this.etatInscriptionService.createDialog;
   }
  set createEtatInscriptionDialog(value: boolean) {
       this.etatInscriptionService.createDialog= value;
   }
   get fonction(): FonctionDto {
       return this.fonctionService.item;
   }
  set fonction(value: FonctionDto) {
        this.fonctionService.item = value;
   }
   get fonctions(): Array<FonctionDto> {
        return this.fonctionService.items;
   }
   set fonctions(value: Array<FonctionDto>) {
        this.fonctionService.items = value;
   }
   get createFonctionDialog(): boolean {
       return this.fonctionService.createDialog;
   }
  set createFonctionDialog(value: boolean) {
       this.fonctionService.createDialog= value;
   }
   get groupeEtude(): GroupeEtudeDto {
       return this.groupeEtudeService.item;
   }
  set groupeEtude(value: GroupeEtudeDto) {
        this.groupeEtudeService.item = value;
   }
   get groupeEtudes(): Array<GroupeEtudeDto> {
        return this.groupeEtudeService.items;
   }
   set groupeEtudes(value: Array<GroupeEtudeDto>) {
        this.groupeEtudeService.items = value;
   }
   get createGroupeEtudeDialog(): boolean {
       return this.groupeEtudeService.createDialog;
   }
  set createGroupeEtudeDialog(value: boolean) {
       this.groupeEtudeService.createDialog= value;
   }



    get validEtudiantRef(): boolean {
        return this._validEtudiantRef;
    }
    set validEtudiantRef(value: boolean) {
        this._validEtudiantRef = value;
    }
    get validEtatInscriptionRef(): boolean {
        return this._validEtatInscriptionRef;
    }
    set validEtatInscriptionRef(value: boolean) {
        this._validEtatInscriptionRef = value;
    }
    get validParcoursCode(): boolean {
        return this._validParcoursCode;
    }
    set validParcoursCode(value: boolean) {
        this._validParcoursCode = value;
    }
    get validParcoursLibelle(): boolean {
        return this._validParcoursLibelle;
    }
    set validParcoursLibelle(value: boolean) {
        this._validParcoursLibelle = value;
    }
    get validGroupeEtudeLibelle(): boolean {
        return this._validGroupeEtudeLibelle;
    }
    set validGroupeEtudeLibelle(value: boolean) {
        this._validGroupeEtudeLibelle = value;
    }
    get validStatutSocialCode(): boolean {
        return this._validStatutSocialCode;
    }
    set validStatutSocialCode(value: boolean) {
        this._validStatutSocialCode = value;
    }
    get validStatutSocialLibelle(): boolean {
        return this._validStatutSocialLibelle;
    }
    set validStatutSocialLibelle(value: boolean) {
        this._validStatutSocialLibelle = value;
    }
    get validInteretEtudiantCode(): boolean {
        return this._validInteretEtudiantCode;
    }
    set validInteretEtudiantCode(value: boolean) {
        this._validInteretEtudiantCode = value;
    }
    get validInteretEtudiantLibelle(): boolean {
        return this._validInteretEtudiantLibelle;
    }
    set validInteretEtudiantLibelle(value: boolean) {
        this._validInteretEtudiantLibelle = value;
    }
    get validNiveauEtudeLibelle(): boolean {
        return this._validNiveauEtudeLibelle;
    }
    set validNiveauEtudeLibelle(value: boolean) {
        this._validNiveauEtudeLibelle = value;
    }
    get validNiveauEtudeCode(): boolean {
        return this._validNiveauEtudeCode;
    }
    set validNiveauEtudeCode(value: boolean) {
        this._validNiveauEtudeCode = value;
    }
    get validFonctionCode(): boolean {
        return this._validFonctionCode;
    }
    set validFonctionCode(value: boolean) {
        this._validFonctionCode = value;
    }
    get validFonctionLibelle(): boolean {
        return this._validFonctionLibelle;
    }
    set validFonctionLibelle(value: boolean) {
        this._validFonctionLibelle = value;
    }
    get validQuizRef(): boolean {
        return this._validQuizRef;
    }
    set validQuizRef(value: boolean) {
        this._validQuizRef = value;
    }
    get validQuizLib(): boolean {
        return this._validQuizLib;
    }
    set validQuizLib(value: boolean) {
        this._validQuizLib = value;
    }
    get validPackStudentCode(): boolean {
        return this._validPackStudentCode;
    }
    set validPackStudentCode(value: boolean) {
        this._validPackStudentCode = value;
    }
    get validPackStudentLibelle(): boolean {
        return this._validPackStudentLibelle;
    }
    set validPackStudentLibelle(value: boolean) {
        this._validPackStudentLibelle = value;
    }
    get validSkillCode(): boolean {
        return this._validSkillCode;
    }
    set validSkillCode(value: boolean) {
        this._validSkillCode = value;
    }
    get validSkillLibelle(): boolean {
        return this._validSkillLibelle;
    }
    set validSkillLibelle(value: boolean) {
        this._validSkillLibelle = value;
    }
}
