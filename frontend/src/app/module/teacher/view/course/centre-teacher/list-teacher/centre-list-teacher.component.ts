import {Component, OnInit} from '@angular/core';
import {CentreService} from 'src/app/controller/service/Centre.service';
import {CentreDto} from 'src/app/controller/model/Centre.model';
import {CentreCriteria} from 'src/app/controller/criteria/CentreCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';


import {ParcoursDto} from 'src/app/controller/model/Parcours.model';


@Component({
  selector: 'app-centre-list-teacher',
  templateUrl: './centre-list-teacher.component.html'
})
export class CentreListTeacherComponent extends AbstractListController<CentreDto, CentreCriteria, CentreService>  implements OnInit {

    fileName = 'Centre';

  
    constructor(centreService: CentreService) {
        super(centreService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadCentres(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Centre', 'list');
        isPermistted ? this.service.findAll().subscribe(centres => this.items = centres,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'ref', header: 'Ref'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'description', header: 'Description'},
            {field: 'log', header: 'Log'},
            {field: 'password', header: 'Password'},
        ];
    }



	public initDuplicate(res: CentreDto) {
        if (res.parcourss != null) {
             res.parcourss.forEach(d => { d.centre = null; d.id = null; });
        }
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Ref': e.ref ,
                 'Libelle': e.libelle ,
                 'Description': e.description ,
                 'Log': e.log ,
                 'Password': e.password ,
            }
        });

        this.criteriaData = [{
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
            'Log': this.criteria.log ? this.criteria.log : environment.emptyForExport ,
            'Password': this.criteria.password ? this.criteria.password : environment.emptyForExport ,
        }];
      }
}
