import {Component, OnInit} from '@angular/core';
import {TypeTeacherService} from 'src/app/controller/service/TypeTeacher.service';
import {TypeTeacherDto} from 'src/app/controller/model/TypeTeacher.model';
import {TypeTeacherCriteria} from 'src/app/controller/criteria/TypeTeacherCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-type-teacher-list-admin',
  templateUrl: './type-teacher-list-admin.component.html'
})
export class TypeTeacherListAdminComponent extends AbstractListController<TypeTeacherDto, TypeTeacherCriteria, TypeTeacherService>  implements OnInit {

    fileName = 'TypeTeacher';

  
    constructor(typeTeacherService: TypeTeacherService) {
        super(typeTeacherService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadTypeTeachers(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('TypeTeacher', 'list');
        isPermistted ? this.service.findAll().subscribe(typeTeachers => this.items = typeTeachers,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'code', header: 'Code'},
        ];
    }



	public initDuplicate(res: TypeTeacherDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Libelle': e.libelle ,
                 'Code': e.code ,
            }
        });

        this.criteriaData = [{
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
        }];
      }
}
