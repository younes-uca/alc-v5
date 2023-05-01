
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { ClassAverageBonusListTeacherComponent } from './class-average-bonus-teacher/list-teacher/class-average-bonus-list-teacher.component';
import { NewsListTeacherComponent } from './news-teacher/list-teacher/news-list-teacher.component';
import { ContactListTeacherComponent } from './contact-teacher/list-teacher/contact-list-teacher.component';
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
                                    component: ClassAverageBonusListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'news',
                            children: [
                                {
                                    path: 'list',
                                    component: NewsListTeacherComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'contact',
                            children: [
                                {
                                    path: 'list',
                                    component: ContactListTeacherComponent ,
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
export class CommonTeacherRoutingModule { }
