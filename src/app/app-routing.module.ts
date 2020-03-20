import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './organization/update/form.component';
import { AddComponent } from './organization/add/add.component';
import { DetailsComponent } from './organization/details/details.component';
import { OrganizationComponent } from '../app/organization/organization.component';
import { LoginComponent } from './login/login.component'



import { FacultyComponent } from './organization/faculty/faculty.component';
import { AllFacultyComponent } from './faculty/all-faculty/all-faculty.component';
import { AddFacultyComponent } from './faculty/add-faculty/add-faculty.component';
import { RolesComponent } from './faculty/roles/roles.component';

import { EditfacultyComponent } from './faculty/editfaculty/editfaculty.component';
import { OrgStudentsComponent } from './Students/org-students/org-students.component';
import { AllStudentsComponent } from './Students/all-students/all-students.component';
import { EditStudentsComponent } from './Students/edit-students/edit-students.component';
import { AddStudentsComponent } from './Students/add-students/add-students.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: "home",
    component: OrganizationComponent,

  },
  {
    path: "edit/:id",
    component: FormComponent
  },

  {
    path: "add",
    component: AddComponent
  },
  {
    path: "details/:id",
    component: DetailsComponent
  },

  {
    path: "faculty/:id/:name",
    component: FacultyComponent
  },
  {
    path: "students/:id/:name",
    component: OrgStudentsComponent
  }, 
  {
    path:"allstudents",
    component:AllStudentsComponent
  },
  {
    path:"students",
    component:AllStudentsComponent
  },
  {
    path:"editStudent/:id/:instid",
    component:EditStudentsComponent

  },
  { path:"addStudent/:id/:name",
  component:AddStudentsComponent
  },
  {
    path:"addStudent",
    component: AddStudentsComponent
  },
  {
    path: "faculty",
    component: AllFacultyComponent
  },
  {
    path: "addFaculties/:id/:name",
    component: AddFacultyComponent
  },
  {
    path: "addFaculties",
    component: AddFacultyComponent
  },
  {
    path: "editfaculty/:id/:id1/:name",
    component: EditfacultyComponent
  },
  {
    path: "roles",
    component: RolesComponent,

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
