
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { ClassAverageBonusListStudentComponent } from './class-average-bonus-student/list-student/class-average-bonus-list-student.component';
import { NewsListStudentComponent } from './news-student/list-student/news-list-student.component';
import { ContactListStudentComponent } from './contact-student/list-student/contact-list-student.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'class-average-bonus',
                            children: [
                                {
                                    path: 'list',
                                    component: ClassAverageBonusListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'news',
                            children: [
                                {
                                    path: 'list',
                                    component: NewsListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'contact',
                            children: [
                                {
                                    path: 'list',
                                    component: ContactListStudentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class CommonStudentRoutingModule { }
