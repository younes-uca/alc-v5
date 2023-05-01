import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {TypeReclamationEtudiantService} from 'src/app/controller/service/TypeReclamationEtudiant.service';
import {TypeReclamationEtudiantDto} from 'src/app/controller/model/TypeReclamationEtudiant.model';
import {TypeReclamationEtudiantCriteria} from 'src/app/controller/criteria/TypeReclamationEtudiantCriteria.model';

@Component({
  selector: 'app-type-reclamation-etudiant-view-teacher',
  templateUrl: './type-reclamation-etudiant-view-teacher.component.html'
})
export class TypeReclamationEtudiantViewTeacherComponent extends AbstractViewController<TypeReclamationEtudiantDto, TypeReclamationEtudiantCriteria, TypeReclamationEtudiantService> implements OnInit {


    constructor(private typeReclamationEtudiantService: TypeReclamationEtudiantService){
        super(typeReclamationEtudiantService);
    }

    ngOnInit(): void {
    }




}
