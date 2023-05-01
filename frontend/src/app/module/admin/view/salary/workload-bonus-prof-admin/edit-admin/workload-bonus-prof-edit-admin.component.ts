import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {WorkloadBonusProfService} from 'src/app/controller/service/WorkloadBonusProf.service';
import {WorkloadBonusProfDto} from 'src/app/controller/model/WorkloadBonusProf.model';
import {WorkloadBonusProfCriteria} from 'src/app/controller/criteria/WorkloadBonusProfCriteria.model';


import {WorkloadBonusDto} from 'src/app/controller/model/WorkloadBonus.model';
import {WorkloadBonusService} from 'src/app/controller/service/WorkloadBonus.service';
import {SalaryDto} from 'src/app/controller/model/Salary.model';
import {SalaryService} from 'src/app/controller/service/Salary.service';
import {ProfDto} from 'src/app/controller/model/Prof.model';
import {ProfService} from 'src/app/controller/service/Prof.service';

@Component({
  selector: 'app-workload-bonus-prof-edit-admin',
  templateUrl: './workload-bonus-prof-edit-admin.component.html'
})
export class WorkloadBonusProfEditAdminComponent extends AbstractEditController<WorkloadBonusProfDto, WorkloadBonusProfCriteria, WorkloadBonusProfService>   implements OnInit {



    private _validWorkloadBonusCode = true;
    private _validProfRef = true;
    private _validSalaryCode = true;



    constructor( private workloadBonusProfService: WorkloadBonusProfService , private workloadBonusService: WorkloadBonusService, private salaryService: SalaryService, private profService: ProfService) {
        super(workloadBonusProfService);
    }

    ngOnInit(): void {
    this.workloadBonus = new WorkloadBonusDto();
    this.workloadBonusService.findAll().subscribe((data) => this.workloadBonuss = data);
    this.prof = new ProfDto();
    this.profService.findAll().subscribe((data) => this.profs = data);
    this.salary = new SalaryDto();
    this.salaryService.findAll().subscribe((data) => this.salarys = data);
}


    public setValidation(value : boolean){
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }



   public async openCreateWorkloadBonus(workloadBonus: string) {
        const isPermistted = await this.roleService.isPermitted('WorkloadBonus', 'edit');
        if(isPermistted) {
             this.workloadBonus = new WorkloadBonusDto();
             this.createWorkloadBonusDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateSalary(salary: string) {
        const isPermistted = await this.roleService.isPermitted('Salary', 'edit');
        if(isPermistted) {
             this.salary = new SalaryDto();
             this.createSalaryDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

   get workloadBonus(): WorkloadBonusDto {
       return this.workloadBonusService.item;
   }
  set workloadBonus(value: WorkloadBonusDto) {
        this.workloadBonusService.item = value;
   }
   get workloadBonuss(): Array<WorkloadBonusDto> {
        return this.workloadBonusService.items;
   }
   set workloadBonuss(value: Array<WorkloadBonusDto>) {
        this.workloadBonusService.items = value;
   }
   get createWorkloadBonusDialog(): boolean {
       return this.workloadBonusService.createDialog;
   }
  set createWorkloadBonusDialog(value: boolean) {
       this.workloadBonusService.createDialog= value;
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
   get salary(): SalaryDto {
       return this.salaryService.item;
   }
  set salary(value: SalaryDto) {
        this.salaryService.item = value;
   }
   get salarys(): Array<SalaryDto> {
        return this.salaryService.items;
   }
   set salarys(value: Array<SalaryDto>) {
        this.salaryService.items = value;
   }
   get createSalaryDialog(): boolean {
       return this.salaryService.createDialog;
   }
  set createSalaryDialog(value: boolean) {
       this.salaryService.createDialog= value;
   }



    get validWorkloadBonusCode(): boolean {
        return this._validWorkloadBonusCode;
    }
    set validWorkloadBonusCode(value: boolean) {
        this._validWorkloadBonusCode = value;
    }
    get validProfRef(): boolean {
        return this._validProfRef;
    }
    set validProfRef(value: boolean) {
        this._validProfRef = value;
    }
    get validSalaryCode(): boolean {
        return this._validSalaryCode;
    }
    set validSalaryCode(value: boolean) {
        this._validSalaryCode = value;
    }
}
