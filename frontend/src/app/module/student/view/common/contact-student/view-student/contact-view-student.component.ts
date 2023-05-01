import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {ContactService} from 'src/app/controller/service/Contact.service';
import {ContactDto} from 'src/app/controller/model/Contact.model';
import {ContactCriteria} from 'src/app/controller/criteria/ContactCriteria.model';

@Component({
  selector: 'app-contact-view-student',
  templateUrl: './contact-view-student.component.html'
})
export class ContactViewStudentComponent extends AbstractViewController<ContactDto, ContactCriteria, ContactService> implements OnInit {


    constructor(private contactService: ContactService){
        super(contactService);
    }

    ngOnInit(): void {
    }




}
