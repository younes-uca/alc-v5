import {Component, OnInit} from '@angular/core';
import {FaqTypeService} from 'src/app/controller/service/FaqType.service';
import {FaqTypeDto} from 'src/app/controller/model/FaqType.model';
import {FaqTypeCriteria} from 'src/app/controller/criteria/FaqTypeCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-faq-type-list-teacher',
  templateUrl: './faq-type-list-teacher.component.html'
})
export class FaqTypeListTeacherComponent extends AbstractListController<FaqTypeDto, FaqTypeCriteria, FaqTypeService>  implements OnInit {

    fileName = 'FaqType';

  
    constructor(faqTypeService: FaqTypeService) {
        super(faqTypeService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadFaqTypes(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('FaqType', 'list');
        isPermistted ? this.service.findAll().subscribe(faqTypes => this.items = faqTypes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
        ];
    }



	public initDuplicate(res: FaqTypeDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Destinataire': e.destinataire ,
                 'Libelle': e.libelle ,
            }
        });

        this.criteriaData = [{
            'Destinataire': this.criteria.destinataire ? this.criteria.destinataire : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
        }];
      }
}
