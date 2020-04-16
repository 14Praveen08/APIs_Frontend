import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { StudentsService } from '../../../Services/students.service';
import { Student } from 'src/app/model/Student'
import { SelectItem } from 'primeng/api/selectitem';
import { ActivatedRoute, Router } from '@angular/router'
import { organization } from 'src/app/model/organization';
import { ApiService } from 'src/app/Services/api.service';
import { AlertdialogService } from 'src/app/Services/alertdialog.service';
import { ToastrService } from 'ngx-toastr';
import { Department } from 'src/app/Model/Department';
import { DepartmentService } from 'src/app/Services/department.service';
@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css'],
  providers: [StudentsService, ApiService]
})
export class AddStudentsComponent implements OnInit {
  inst_id: number;
  inst_name: String;
  years: SelectItem[];
  department: Department[];
  stud: Student;
  search:string;
  orgObj: organization[];
  studentForm: FormGroup;
  // submitted: boolean;


  constructor(private toaster: ToastrService,private alertdialog:AlertdialogService,private _activatedRoute: ActivatedRoute, private studService: StudentsService, private router: Router, private orgService: ApiService, private departmentService:DepartmentService) {
    this.inst_id = parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
    this.inst_name = this._activatedRoute.snapshot.paramMap.get('name');
    this.orgService.getAllOrgActive().subscribe((data: any) => { this.orgObj = data });
    this.departmentService.getDepartment().subscribe((data : any) => { this.department = data});
  }
  ngOnInit(): void {
    this.form();
  }

  form() {
    this.studentForm = new FormGroup({

      'institutionid': new FormControl('', Validators.required),
      'redgno': new FormControl('', Validators.required),
      'fname': new FormControl('', Validators.required),
      'lname': new FormControl('', Validators.required),
      'dob': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'mobileno': new FormControl('', Validators.required),
      'year': new FormControl('', Validators.required),
      'department_id': new FormControl('', Validators.required),
    });

    this.years = [];
    this.years.push({ label: 'First Year', value: '1' });
    this.years.push({ label: 'Second Year', value: '2' });
    this.years.push({ label: 'Third Year', value: '3' });
    this.years.push({ label: 'Fourth Year', value: '4' });

    this.studentForm.patchValue({ institutionid: this.inst_id })
  }
  save() {
    this.stud = this.studentForm.value;
    this.studService.addStudent(this.stud).subscribe((res:any)=>{
      if(res.status == 201){
        this.alertdialog.openDialog("Student Created Successfully").afterClosed().subscribe(
      data=>{
        if(data){
          this.inst_id && this.inst_name != null ? this.router.navigate(['/students', this.inst_id, this.inst_name]) : this.router.navigate(['/students']);
        }
      });
    }
    else{
      this.toaster.error('Enter Valid Data!!','Error');
    }
    });
    }
  organization(id: number) {
    this.studentForm.patchValue({ institutionid: id });
  }
  years_(id: number) {
    this.studentForm.patchValue({ year: id });
  }
  department_(id:number){
    this.studentForm.patchValue({department_id:id});
  }
}
