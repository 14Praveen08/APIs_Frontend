import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../../../Services/faculty.service';
import { ActivatedRoute } from '@angular/router';
import { Roles } from 'src/app/model/Roles';
import * as _ from 'lodash';
import { RoleService } from 'src/app/Services/role.service';
import { DialogService } from 'src/app/Services/dialog.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css'],
  providers: [FacultyService]
})
export class FacultyComponent implements OnInit {

  faculty: Object[];
  id: Number;
  flag = false;
  name: string;
  role: Roles;
  ask;
  constructor(private dialog: DialogService,private roleservice: RoleService, private fac: FacultyService, private _activatedroute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.getbyInst();
  }

  getbyInst() {
    this.id = parseInt(this._activatedroute.snapshot.paramMap.get('id'));
    this.name = this._activatedroute.snapshot.paramMap.get('name');
    this.fac.getFacultyByInstitution(this.id).subscribe(data => { this.faculty = data, _.isEmpty(this.faculty) ? this.flag = false : this.flag = true });//console.log(this.faculty) ;


  }
  getRole(id: number) {
    this.roleservice.getRolesByid(id).subscribe(data => this.role = data);

  }

  delete(id:number){
    this.dialog.openConfirmDialog("Do you want to continue?").afterClosed().subscribe(
      data => {
        if(data){
          this.fac.deleteFaculty(id).subscribe(data=>this.getbyInst());
        }
      }
    )
  }
}
