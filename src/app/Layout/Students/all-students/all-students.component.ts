import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../../Services/students.service';
import { StudentObj } from 'src/app/model/StudentObj';
import { ActivatedRoute } from '@angular/router';
import { SelectItem } from 'primeng/api/selectitem';
import { organization } from 'src/app/model/organization';
import { ApiService } from 'src/app/Services/api.service';
import * as _ from 'lodash';
import { DialogService } from 'src/app/Services/dialog.service';
import { Department } from 'src/app/model/Department';
import { DepartmentService } from 'src/app/Services/department.service';


@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css'],
  providers: [StudentsService]
})
export class AllStudentsComponent implements OnInit {

  students: StudentObj[];
  flag = false;
  name: string[];
  ask;
  search:string;
  selectedyear;
  selectedInst;
  selectedDept;
  years: SelectItem[];
  orgObj: organization[];
  departments:Department[];
  p:number=1;
  constructor(private deptService:DepartmentService,private dialog: DialogService,private orgService: ApiService, private _studentService: StudentsService, private _activatedroute: ActivatedRoute) {
    this.orgService.getAllOrg().subscribe((data: any) => { this.orgObj = data });
    this.deptService.getDepartment().subscribe((data: any)=>{this.departments = data});

  }

  ngOnInit(): void {
    this.years = []
    this.years.push({ label: 'All Year', value: '0' })
    this.years.push({ label: 'First Year', value: '1' });
    this.years.push({ label: 'Second Year', value: '2' });
    this.years.push({ label: 'Third Year', value: '3' });
    this.years.push({ label: 'Fourth Year', value: '4' });
    this.load();
  }
  load() {
    this._studentService.getAllStudents().subscribe((data: StudentObj[]) => { this.students = data, _.isEmpty(this.students) ? this.flag = false : this.flag = true });
  }
  reload() {
    this._studentService.getStudentByYear(this.selectedyear).subscribe(data => { this.students = data, _.isEmpty(this.students) ? this.flag = false : this.flag = true });

  }
  reloadOrg() {
    this._studentService.getStudentByInstitution(this.selectedInst).subscribe(data => { this.students = data, _.isEmpty(this.students) ? this.flag = false : this.flag = true });
  }

  reloadDept(){
    this._studentService.getStudentByDepartment(this.selectedDept).subscribe(data => { this.students = data, _.isEmpty(this.students) ? this.flag = false : this.flag = true });
  }

  reloadOrgYear() {
    this._studentService.getStudentByInstYear(this.selectedInst, this.selectedyear).subscribe(data => { this.students = data, _.isEmpty(this.students) ? this.flag = false : this.flag = true });
  }

  getstudents(){
    this._studentService.getStudentByInstYearDept(this.selectedInst,this.selectedyear, this.selectedDept).subscribe(data => { this.students = data, _.isEmpty(this.students) ? this.flag = false : this.flag = true});
  }

  save(){
    console.log(this.selectedInst, this.selectedyear, this.selectedDept);
    this.getstudents();
  }

  delete(id:number){
    this.dialog.openConfirmDialog("Do you want to continue?").afterClosed().subscribe(
      data => {
        if(data){
          this._studentService.deleteStudent(id).subscribe(data=>this.load());
        }
      }
    )
  }
  organization(id: number) {
    this.selectedInst = id;
    // if (this.selectedInst != 0 && this.selectedyear != 0) {
    //   this.reloadOrgYear();
    // }
    // else if (this.selectedInst == 0 && this.selectedyear != 0) {
    //   this.reload();
    // }
    // else if (this.selectedInst != 0 && this.selectedyear == 0) {
    //   this.reloadOrg();
    // }
    // else {
    //   this.load();
    // }
  }
  year(id: number) {
    this.selectedyear = id;
    // if (this.selectedyear == 0 || this.selectedInst == 0) {
    //   this.load();
    // }
    // else {
    //   this.reload();
    // }
  }
  department(id: number) {
    this.selectedDept = id;
    // if(this.selectedDept !=0 ){
    //   this.reloadDept();
    // }
    // else{
    //   this.load();
    // }
  }
}
