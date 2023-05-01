import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {TypeReclamationProfService} from 'src/app/controller/service/TypeReclamationProf.service';
import {TypeReclamationProfDto} from 'src/app/controller/model/TypeReclamationProf.model';
import {TypeReclamationProfCriteria} from 'src/app/controller/criteria/TypeReclamationProfCriteria.model';

@Component({
  selector: 'app-type-reclamation-prof-view-student',
  templateUrl: './type-reclamation-prof-view-student.component.html'
})
export class TypeReclamationProfViewStudentComponent extends AbstractViewController<TypeReclamationProfDto, TypeReclamationProfCriteria, TypeReclamationProfService> implements OnInit {


    constructor(private typeReclamationProfService: TypeReclamationProfService){
        super(typeReclamationProfService);
    }

    ngOnInit(): void {
    }




}
