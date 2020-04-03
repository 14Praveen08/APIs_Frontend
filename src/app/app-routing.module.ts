import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './Layout/organization/update/form.component';
import { AddComponent } from './Layout/organization/add/add.component';
import { DetailsComponent } from './Layout/organization/details/details.component';
import { OrganizationComponent } from './Layout/organization/organization.component';
import { LoginComponent } from './Layout/login/login.component'



import { FacultyComponent } from './Layout/organization/faculty/faculty.component';
import { AllFacultyComponent } from './Layout/faculty/all-faculty/all-faculty.component';
import { AddFacultyComponent } from './Layout/faculty/add-faculty/add-faculty.component';
import { RolesComponent } from './Layout/roles/roles.component';

import { EditfacultyComponent } from './Layout/faculty/editfaculty/editfaculty.component';
import { OrgStudentsComponent } from './Layout/Students/org-students/org-students.component';
import { AllStudentsComponent } from './Layout/Students/all-students/all-students.component';
import { EditStudentsComponent } from './Layout/Students/edit-students/edit-students.component';
import { AddStudentsComponent } from './Layout/Students/add-students/add-students.component';
import { AuthGuard } from './Authentication/auth.guard';
import { LogoutComponent } from './Layout/logout/logout.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: "home",
    component: OrganizationComponent,
    canActivate:[AuthGuard]

  },
  {
    path:"logout",
    component: LogoutComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "edit/:id",
    component: FormComponent,
    canActivate:[AuthGuard]
  },

  {
    path: "add",
    component: AddComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "details/:id",
    component: DetailsComponent,
    canActivate:[AuthGuard]
  },

  {
    path: "faculty/:id/:name",
    component: FacultyComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "students/:id/:name",
    component: OrgStudentsComponent,
    canActivate:[AuthGuard]
  }, 
  {
    path:"allstudents",
    component:AllStudentsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"students",
    component:AllStudentsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"editStudent/:id/:instid",
    component:EditStudentsComponent,
    canActivate:[AuthGuard]

  },
  { path:"addStudent/:id/:name",
  component:AddStudentsComponent,
  canActivate:[AuthGuard]
  },
  {
    path:"addStudent",
    component: AddStudentsComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "faculty",
    component: AllFacultyComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "addFaculties/:id/:name",
    component: AddFacultyComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "addFaculties",
    component: AddFacultyComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "editfaculty/:id/:id1/:name",
    component: EditfacultyComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "roles",
    component: RolesComponent,
    canActivate:[AuthGuard]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
