import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Layout/app.component';
import { OrganizationComponent } from './Layout/organization/organization.component';
import { FormComponent } from './Layout/organization/update/form.component';
import{ReactiveFormsModule} from '@angular/forms';
import{ApiService} from './Services/api.service';
import { DetailsComponent } from './Layout/organization/details/details.component';
import { AddComponent } from './Layout/organization/add/add.component' ;
import{FormsModule} from '@angular/forms';
import { LoginComponent } from './Layout/login/login.component';
import { StatusPipe } from './Pipes/status.pipe';
import{OAuthModule} from 'angular-oauth2-oidc';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { FacultyComponent } from './Layout/organization/faculty/faculty.component';
import { FacultyService } from './Services/faculty.service';
import { AllFacultyComponent } from './Layout/faculty/all-faculty/all-faculty.component';
import { HeaderComponent } from './Layout/header/header.component';
import { AddFacultyComponent } from './Layout/faculty/add-faculty/add-faculty.component';
import { RolesComponent } from './Layout/roles/roles.component';
import { EditfacultyComponent } from './Layout/faculty/editfaculty/editfaculty.component';

//PrimeNg Modules
import {TabViewModule} from 'primeng/tabview';
import {TabMenuModule} from 'primeng/tabmenu';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { AllStudentsComponent } from './Layout/Students/all-students/all-students.component';
import { OrgStudentsComponent } from './Layout/Students/org-students/org-students.component';
import { AddStudentsComponent } from './Layout/Students/add-students/add-students.component';
import { EditStudentsComponent } from './Layout/Students/edit-students/edit-students.component';
import {ToastModule} from 'primeng/toast';
import {PanelModule} from 'primeng/panel';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import { LogoutComponent } from './Layout/logout/logout.component';
import { FacdetailsComponent } from './Layout/faculty/facdetails/facdetails.component';
import { StuddetailsComponent } from './Layout/Students/studdetails/studdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    OrganizationComponent,
    FormComponent,   
    DetailsComponent,
    AddComponent,
    LoginComponent,
    StatusPipe,      
    FacultyComponent,   
    AllFacultyComponent,   
    AddFacultyComponent, RolesComponent, EditfacultyComponent, AllStudentsComponent, OrgStudentsComponent, AddStudentsComponent, EditStudentsComponent, HeaderComponent, LogoutComponent, RolesComponent, FacdetailsComponent, StuddetailsComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    OAuthModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule,
    NgbAlertModule,
    CommonModule,
    TabViewModule,
    TabMenuModule,
    SidebarModule,
    ButtonModule,
    TableModule,
    ToastModule,PanelModule,MessagesModule,MessageModule,DropdownModule,CalendarModule,
    
    RouterModule.forRoot([])
  ],
  providers: [ApiService,FacultyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
