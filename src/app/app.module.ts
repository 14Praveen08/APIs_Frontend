import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrganizationComponent } from './organization/organization.component';
import { FormComponent } from './organization/update/form.component';
import{ReactiveFormsModule} from '@angular/forms';
import{ApiService} from './organization/api.service';
import { DetailsComponent } from './organization/details/details.component';
import { AddComponent } from './organization/add/add.component' ;
import{FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { YesNoPipe } from './yes-no.pipe';
import { StatusPipe } from './status.pipe';
import{OAuthModule} from 'angular-oauth2-oidc';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { FacultyComponent } from './organization/faculty/faculty.component';
import { FacultyService } from './organization/faculty/faculty.service';
import { AllFacultyComponent } from './faculty/all-faculty/all-faculty.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddFacultyComponent } from './faculty/add-faculty/add-faculty.component';
import { RolesComponent } from './faculty/roles/roles.component';
import { EditfacultyComponent } from './faculty/editfaculty/editfaculty.component';

//PrimeNg Modules
import {TabViewModule} from 'primeng/tabview';
import {TabMenuModule} from 'primeng/tabmenu';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { AllStudentsComponent } from './Students/all-students/all-students.component';
import { OrgStudentsComponent } from './Students/org-students/org-students.component';
import { AddStudentsComponent } from './Students/add-students/add-students.component';
import { EditStudentsComponent } from './Students/edit-students/edit-students.component';
import {ToastModule} from 'primeng/toast';
import {PanelModule} from 'primeng/panel';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [
    AppComponent,
    OrganizationComponent,
    FormComponent,   
    DetailsComponent,
    AddComponent,
    LoginComponent,
    YesNoPipe,
    StatusPipe,   
       
    FacultyComponent,   
    AllFacultyComponent,   
    SidebarComponent, AddFacultyComponent, RolesComponent, EditfacultyComponent, AllStudentsComponent, OrgStudentsComponent, AddStudentsComponent, EditStudentsComponent,  
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
