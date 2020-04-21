import { Component, OnInit } from '@angular/core';
import { FacultyService } from 'src/app/Services/faculty.service';
import { organization } from 'src/app/model/organization';
import { ActivatedRoute } from '@angular/router';
import { FacultyObj } from 'src/app/model/FacultyObj';
import { ApiService } from 'src/app/Services/api.service';
import * as _ from 'lodash';
import { DialogService } from 'src/app/Services/dialog.service';
import { Roles } from 'src/app/model/Roles';
import { RoleService } from 'src/app/Services/role.service';

@Component({
  selector: 'app-all-faculty',
  templateUrl: './all-faculty.component.html',
  styleUrls: ['./all-faculty.component.css'],
  providers: [FacultyService]
})
export class AllFacultyComponent implements OnInit {
  faculty: FacultyObj[];
  flag = false;
  orgObj: organization[];
  roles: Roles[];
  search:string;
  ask;
  p:number=1;
  selectedInst;
  selectedRole;
  constructor(private roleService:RoleService,private dialog: DialogService,private orgService: ApiService, private _facultyService: FacultyService) {
    this.roleService.getRoles().subscribe((data: any) => { this.roles = data });
    this.orgService.getAllOrg().subscribe((data: any) => { this.orgObj = data });

  }

  save(){
    if(this.selectedInst !=0 && this.selectedRole !=0){
      this.reloadInstRole();
    }
    else if(this.selectedInst !=0){
      this.reload();
    }
    else if(this.selectedRole !=0){
      this.reloadRole();
    }
    else{
      this.load();
    }
  }

  ngOnInit(): void {
    this.load();
  }
  load() {
    this._facultyService.getAllFactulty().subscribe(data => { this.faculty = data, _.isEmpty(this.faculty) ? this.flag = false : this.flag = true });
  }
  reload() {
    this._facultyService.getFacultyByInstitution(this.selectedInst).subscribe(data => { this.faculty = data, _.isEmpty(this.faculty) ? this.flag = false : this.flag = true });
  }
  reloadInstRole(){
    this._facultyService.getFacultyByInstRole(this.selectedInst, this.selectedRole).subscribe(data => { this.faculty = data, _.isEmpty(this.faculty) ? this.flag = false : this.flag = true });
  }
  reloadRole(){
    this._facultyService.getFacultyByRole(this.selectedRole).subscribe(data => { this.faculty = data, _.isEmpty(this.faculty) ? this.flag = false : this.flag = true });
  }

  delete(id:number){
    this.dialog.openConfirmDialog("Do you want to continue?").afterClosed().subscribe(
      data => {
        if(data){
          this._facultyService.deleteFaculty(id).subscribe(data=>this.load());
        }
      }
    )
  }
  organization(id: number) {
    this.selectedInst = id;
  }
  role(id: number) {
    this.selectedRole = id;
  }
}