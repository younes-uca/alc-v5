import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppMainComponent } from './app.main.component';
import { AuthGuard } from './controller/guards/auth.guard';
import { AccessDeniedComponent } from './auth/access-denied/access-denied.component';
import {HomeComponent} from './module/home/home.component';

import {LoginAdminComponent} from './module/admin/login-admin/login-admin.component';
import {RegisterAdminComponent} from './module/admin/register-admin/register-admin.component';
import {LoginTeacherComponent} from './module/teacher/login-teacher/login-teacher.component';
import {RegisterTeacherComponent} from './module/teacher/register-teacher/register-teacher.component';
import {LoginStudentComponent} from './module/student/login-student/login-student.component';
import {RegisterStudentComponent} from './module/student/register-student/register-student.component';
@NgModule({
  imports: [
    RouterModule.forRoot(
      [
          { path: '', component: HomeComponent },
        {path: 'admin/login', component: LoginAdminComponent },
        {path: 'admin/register', component: RegisterAdminComponent },
        {path: 'teacher/login', component: LoginTeacherComponent },
        {path: 'teacher/register', component: RegisterTeacherComponent },
        {path: 'student/login', component: LoginStudentComponent },
        {path: 'student/register', component: RegisterStudentComponent },
         {
          path: 'app', // '\'' + root + '\'',
          component: AppMainComponent,
          children: [
            {
              path: 'admin',
              loadChildren: () => import( './module/admin/admin-routing.module').then(x => x.AdminRoutingModule),
              canActivate: [AuthGuard],
            },
            {
              path: 'teacher',
              loadChildren: () => import( './module/teacher/teacher-routing.module').then(x => x.TeacherRoutingModule),
              canActivate: [AuthGuard],
            },
            {
              path: 'student',
              loadChildren: () => import( './module/student/student-routing.module').then(x => x.StudentRoutingModule),
              canActivate: [AuthGuard],
            },
            { path: 'denied', component: AccessDeniedComponent },
          ],
          canActivate: [AuthGuard]
        },
      ],
      { scrollPositionRestoration: 'enabled' }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
