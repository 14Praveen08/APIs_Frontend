import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { FacultyService } from 'src/app/Services/faculty.service';
import { Roles } from 'src/app/model/Roles';
import { Faculty } from 'src/app/model/Faculty';
import { organization } from 'src/app/model/organization';
import { ApiService } from 'src/app/Services/api.service';
import { RoleService } from 'src/app/Services/role.service';



@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrls: ['./add-faculty.component.css'],
  providers: [FacultyService, ApiService]
})
export class AddFacultyComponent implements OnInit {
  orgid: Number;
  orgname: String;
  roles: Roles[];
  facultyObj: Faculty;
  orgObj: organization[];
  facultyform: FormGroup;
  constructor(private _activatedroute: ActivatedRoute, private roleService: RoleService,private facultyService: FacultyService, private router: Router, private orgService: ApiService) {


    this.orgid = parseInt(this._activatedroute.snapshot.paramMap.get('id'));
    this.orgname = this._activatedroute.snapshot.paramMap.get('name');
    this.roleService.getRoles().subscribe((data: any) => { this.roles = data });
    this.orgService.getAllOrgActive().subscribe((data: any) => { this.orgObj = data });


  }

  ngOnInit(): void {
    this.form();

  }
  form() {
    this.facultyform = new FormGroup({

      employee_id: new FormControl(),
      institution_id: new FormControl(),
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      mobile_no: new FormControl('', Validators.required),
      role_id: new FormControl('', Validators.required),


    });
    this.facultyform.patchValue({ institution_id: this.orgid })


  }
  save() {

    this.facultyObj = this.facultyform.value;
    this.facultyService.addFaculty(this.facultyObj).subscribe(data =>{ this.orgid && this.orgname!=null? this.router.navigate(['/faculty',this.orgid,this.orgname]): this.router.navigate(['/faculty'])});

  }
  role(id: number) {
    this.facultyform.patchValue({ role_id: id })
  }
  organization(id: number) {
    this.facultyform.patchValue({ institution_id: id });
  }




}
