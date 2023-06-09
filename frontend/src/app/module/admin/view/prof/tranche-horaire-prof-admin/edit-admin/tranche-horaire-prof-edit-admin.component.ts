import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {TrancheHoraireProfService} from 'src/app/controller/service/TrancheHoraireProf.service';
import {TrancheHoraireProfDto} from 'src/app/controller/model/TrancheHoraireProf.model';
import {TrancheHoraireProfCriteria} from 'src/app/controller/criteria/TrancheHoraireProfCriteria.model';


import {ProfDto} from 'src/app/controller/model/Prof.model';
import {ProfService} from 'src/app/controller/service/Prof.service';

@Component({
  selector: 'app-tranche-horaire-prof-edit-admin',
  templateUrl: './tranche-horaire-prof-edit-admin.component.html'
})
export class TrancheHoraireProfEditAdminComponent extends AbstractEditController<TrancheHoraireProfDto, TrancheHoraireProfCriteria, TrancheHoraireProfService>   implements OnInit {



    private _validProfRef = true;



    constructor( private trancheHoraireProfService: TrancheHoraireProfService , private profService: ProfService) {
        super(trancheHoraireProfService);
    }

    ngOnInit(): void {
    this.prof = new ProfDto();
    this.profService.findAll().subscribe((data) => this.profs = data);
}


    public setValidation(value : boolean){
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }



   public async openCreateProf(prof: string) {
        const isPermistted = await this.roleService.isPermitted('Prof', 'edit');
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



    get validProfRef(): boolean {
        return this._validProfRef;
    }
    set validProfRef(value: boolean) {
        this._validProfRef = value;
    }
}
