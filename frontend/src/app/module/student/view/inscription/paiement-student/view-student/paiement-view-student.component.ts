import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {PaiementService} from 'src/app/controller/service/Paiement.service';
import {PaiementDto} from 'src/app/controller/model/Paiement.model';
import {PaiementCriteria} from 'src/app/controller/criteria/PaiementCriteria.model';

import {GroupeEtudiantDto} from 'src/app/controller/model/GroupeEtudiant.model';
import {GroupeEtudiantService} from 'src/app/controller/service/GroupeEtudiant.service';
import {ProfDto} from 'src/app/controller/model/Prof.model';
import {ProfService} from 'src/app/controller/service/Prof.service';
@Component({
  selector: 'app-paiement-view-student',
  templateUrl: './paiement-view-student.component.html'
})
export class PaiementViewStudentComponent extends AbstractViewController<PaiementDto, PaiementCriteria, PaiementService> implements OnInit {


    constructor(private paiementService: PaiementService, private groupeEtudiantService: GroupeEtudiantService, private profService: ProfService){
        super(paiementService);
    }

    ngOnInit(): void {
        this.prof = new ProfDto();
        this.profService.findAll().subscribe((data) => this.profs = data);
        this.groupeEtudiant = new GroupeEtudiantDto();
        this.groupeEtudiantService.findAll().subscribe((data) => this.groupeEtudiants = data);
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
    get groupeEtudiant(): GroupeEtudiantDto {
       return this.groupeEtudiantService.item;
    }
    set groupeEtudiant(value: GroupeEtudiantDto) {
        this.groupeEtudiantService.item = value;
    }
    get groupeEtudiants():Array<GroupeEtudiantDto> {
       return this.groupeEtudiantService.items;
    }
    set groupeEtudiants(value: Array<GroupeEtudiantDto>) {
        this.groupeEtudiantService.items = value;
    }


}
