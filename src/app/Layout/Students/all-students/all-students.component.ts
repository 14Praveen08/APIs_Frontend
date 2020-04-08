import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../../Services/students.service';
import { StudentObj } from 'src/app/model/StudentObj';
import { ActivatedRoute } from '@angular/router';
import { SelectItem } from 'primeng/api/selectitem';
import { organization } from 'src/app/model/organization';
import { ApiService } from 'src/app/Services/api.service';
import * as _ from 'lodash';


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
  selectedyear;
  selectedInst;
  years: SelectItem[];
  orgObj: organization[];

  constructor(private orgService: ApiService, private _studentService: StudentsService, private _activatedroute: ActivatedRoute) {
    this.orgService.getAllOrg().subscribe((data: any) => { this.orgObj = data });

  }

  ngOnInit(): void {
    this.years = []
    this.years.push({ label: 'All', value: '0' })
    this.years.push({ label: 'First Year', value: '1' });
    this.years.push({ label: 'Second Year', value: '2' });
    this.years.push({ label: 'Third Year', value: '3' });
    this.years.push({ label: 'Fourth Year', value: '4' });
    this.load();
  }
  load() {
    this._studentService.getAllStudents().subscribe((data: StudentObj[]) => { this.students = data, _.isEmpty(this.students) ? this.flag = true : this.flag = true });
  }
  reload() {
    this._studentService.getStudentByYear(this.selectedyear).subscribe(data => { this.students = data, _.isEmpty(this.students) ? this.flag = true : this.flag = true });

  }
  reloadOrg() {
    this._studentService.getStudentByInstitution(this.selectedInst).subscribe(data => { this.students = data, _.isEmpty(this.students) ? this.flag = true : this.flag = true });
  }

  reloadOrgYear() {
    this._studentService.getStudentByInstYear(this.selectedInst, this.selectedyear).subscribe(data => { this.students = data, _.isEmpty(this.students) ? this.flag = true : this.flag = true });
  }

  delete(id: number) {
    this.ask = confirm("Press OK to delete");
    if (this.ask) {
      this._studentService.deleteStudent(id).subscribe(data => this.load());
    }
  }
  organization(id: number) {
    this.selectedInst = id;
    if (this.selectedInst != 0 && this.selectedyear != 0) {
      this.reloadOrgYear();
    }
    else if (this.selectedInst == 0 && this.selectedyear != 0) {
      this.reload();
    }
    else if (this.selectedInst != 0 && this.selectedyear == 0) {
      this.reloadOrg();
    }
    else {
      this.load();
    }
  }
  year(id: number) {
    this.selectedyear = id;
    if (this.selectedyear == 0 || this.selectedInst == 0) {
      this.load();
    }
    else {
      this.reload();
    }
  }
}
