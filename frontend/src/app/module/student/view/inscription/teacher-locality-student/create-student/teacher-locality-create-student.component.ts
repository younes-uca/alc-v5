import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {TeacherLocalityService} from 'src/app/controller/service/TeacherLocality.service';
import {TeacherLocalityDto} from 'src/app/controller/model/TeacherLocality.model';
import {TeacherLocalityCriteria} from 'src/app/controller/criteria/TeacherLocalityCriteria.model';
@Component({
  selector: 'app-teacher-locality-create-student',
  templateUrl: './teacher-locality-create-student.component.html'
})
export class TeacherLocalityCreateStudentComponent extends AbstractCreateController<TeacherLocalityDto, TeacherLocalityCriteria, TeacherLocalityService>  implements OnInit {



   private _validTeacherLocalityCode = true;
   private _validTeacherLocalityLibelle = true;

    constructor( private teacherLocalityService: TeacherLocalityService ) {
        super(teacherLocalityService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validTeacherLocalityCode = value;
        this.validTeacherLocalityLibelle = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateTeacherLocalityCode();
        this.validateTeacherLocalityLibelle();
    }

    public validateTeacherLocalityCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validTeacherLocalityCode = false;
        } else {
            this.validTeacherLocalityCode = true;
        }
    }
    public validateTeacherLocalityLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validTeacherLocalityLibelle = false;
        } else {
            this.validTeacherLocalityLibelle = true;
        }
    }






    get validTeacherLocalityCode(): boolean {
        return this._validTeacherLocalityCode;
    }

    set validTeacherLocalityCode(value: boolean) {
         this._validTeacherLocalityCode = value;
    }
    get validTeacherLocalityLibelle(): boolean {
        return this._validTeacherLocalityLibelle;
    }

    set validTeacherLocalityLibelle(value: boolean) {
         this._validTeacherLocalityLibelle = value;
    }



}
