import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {ScheduleProfService} from 'src/app/controller/service/ScheduleProf.service';
import {ScheduleProfDto} from 'src/app/controller/model/ScheduleProf.model';
import {ScheduleProfCriteria} from 'src/app/controller/criteria/ScheduleProfCriteria.model';
import {GroupeEtudiantDto} from 'src/app/controller/model/GroupeEtudiant.model';
import {GroupeEtudiantService} from 'src/app/controller/service/GroupeEtudiant.service';
import {CoursDto} from 'src/app/controller/model/Cours.model';
import {CoursService} from 'src/app/controller/service/Cours.service';
import {ProfDto} from 'src/app/controller/model/Prof.model';
import {ProfService} from 'src/app/controller/service/Prof.service';
@Component({
  selector: 'app-schedule-prof-create-teacher',
  templateUrl: './schedule-prof-create-teacher.component.html'
})
export class ScheduleProfCreateTeacherComponent extends AbstractCreateController<ScheduleProfDto, ScheduleProfCriteria, ScheduleProfService>  implements OnInit {



    private _validProfRef = true;
    private _validCoursCode = true;
    private _validCoursLibelle = true;

    constructor( private scheduleProfService: ScheduleProfService , private groupeEtudiantService: GroupeEtudiantService, private coursService: CoursService, private profService: ProfService) {
        super(scheduleProfService);
    }

    ngOnInit(): void {
    this.groupeEtudiant = new GroupeEtudiantDto();
    this.groupeEtudiantService.findAll().subscribe((data) => this.groupeEtudiants = data);
    this.prof = new ProfDto();
    this.profService.findAll().subscribe((data) => this.profs = data);
    this.cours = new CoursDto();
    this.coursService.findAll().subscribe((data) => this.courss = data);
}





    public setValidation(value: boolean){
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }



    public async openCreateProf(prof: string) {
    const isPermistted = await this.roleService.isPermitted('Prof', 'add');
    if(isPermistted) {
         this.prof = new ProfDto();
         this.createProfDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }

    get prof(): ProfDto {
        return this.profService.item;
    }
    set prof(value: ProfDto) {
        this.profService.item = value;
    }
    get profs(): Array<ProfDto> {
        return this.profService.items;
    }
    set profs(value: Array<ProfDto>) {
        this.profService.items = value;
    }
    get createProfDialog(): boolean {
       return this.profService.createDialog;
    }
    set createProfDialog(value: boolean) {
        this.profService.createDialog= value;
    }
    get groupeEtudiant(): GroupeEtudiantDto {
        return this.groupeEtudiantService.item;
    }
    set groupeEtudiant(value: GroupeEtudiantDto) {
        this.groupeEtudiantService.item = value;
    }
    get groupeEtudiants(): Array<GroupeEtudiantDto> {
        return this.groupeEtudiantService.items;
    }
    set groupeEtudiants(value: Array<GroupeEtudiantDto>) {
        this.groupeEtudiantService.items = value;
    }
    get createGroupeEtudiantDialog(): boolean {
       return this.groupeEtudiantService.createDialog;
    }
    set createGroupeEtudiantDialog(value: boolean) {
        this.groupeEtudiantService.createDialog= value;
    }
    get cours(): CoursDto {
        return this.coursService.item;
    }
    set cours(value: CoursDto) {
        this.coursService.item = value;
    }
    get courss(): Array<CoursDto> {
        return this.coursService.items;
    }
    set courss(value: Array<CoursDto>) {
        this.coursService.items = value;
    }
    get createCoursDialog(): boolean {
       return this.coursService.createDialog;
    }
    set createCoursDialog(value: boolean) {
        this.coursService.createDialog= value;
    }




    get validProfRef(): boolean {
        return this._validProfRef;
    }
    set validProfRef(value: boolean) {
        this._validProfRef = value;
    }
    get validCoursCode(): boolean {
        return this._validCoursCode;
    }
    set validCoursCode(value: boolean) {
        this._validCoursCode = value;
    }
    get validCoursLibelle(): boolean {
        return this._validCoursLibelle;
    }
    set validCoursLibelle(value: boolean) {
        this._validCoursLibelle = value;
    }


}
