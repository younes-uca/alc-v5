import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {TypeDeQuestionService} from 'src/app/controller/service/TypeDeQuestion.service';
import {TypeDeQuestionDto} from 'src/app/controller/model/TypeDeQuestion.model';
import {TypeDeQuestionCriteria} from 'src/app/controller/criteria/TypeDeQuestionCriteria.model';
@Component({
  selector: 'app-type-de-question-create-admin',
  templateUrl: './type-de-question-create-admin.component.html'
})
export class TypeDeQuestionCreateAdminComponent extends AbstractCreateController<TypeDeQuestionDto, TypeDeQuestionCriteria, TypeDeQuestionService>  implements OnInit {



   private _validTypeDeQuestionRef = true;
   private _validTypeDeQuestionLib = true;

    constructor( private typeDeQuestionService: TypeDeQuestionService ) {
        super(typeDeQuestionService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validTypeDeQuestionRef = value;
        this.validTypeDeQuestionLib = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateTypeDeQuestionRef();
        this.validateTypeDeQuestionLib();
    }

    public validateTypeDeQuestionRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
        this.errorMessages.push('Ref non valide');
        this.validTypeDeQuestionRef = false;
        } else {
            this.validTypeDeQuestionRef = true;
        }
    }
    public validateTypeDeQuestionLib(){
        if (this.stringUtilService.isEmpty(this.item.lib)) {
        this.errorMessages.push('Lib non valide');
        this.validTypeDeQuestionLib = false;
        } else {
            this.validTypeDeQuestionLib = true;
        }
    }






    get validTypeDeQuestionRef(): boolean {
        return this._validTypeDeQuestionRef;
    }

    set validTypeDeQuestionRef(value: boolean) {
         this._validTypeDeQuestionRef = value;
    }
    get validTypeDeQuestionLib(): boolean {
        return this._validTypeDeQuestionLib;
    }

    set validTypeDeQuestionLib(value: boolean) {
         this._validTypeDeQuestionLib = value;
    }



}
