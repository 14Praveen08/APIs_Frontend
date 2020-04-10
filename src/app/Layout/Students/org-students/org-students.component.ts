import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../../Services/students.service';
import { ActivatedRoute, Router } from '@angular/router'
import { StudentObj } from 'src/app/model/StudentObj';
import { SelectItem } from 'primeng/api/selectitem';
import * as _ from 'lodash';
import { DialogService } from 'src/app/Services/dialog.service';

@Component({
  selector: 'app-org-students',
  templateUrl: './org-students.component.html',
  styleUrls: ['./org-students.component.css'],
  providers: [StudentsService]
})
export class OrgStudentsComponent implements OnInit {
  inst_id;
  flag = false;
  inst_name;
  students: StudentObj[];
  ask;
  years: SelectItem[];
  selectedyear;
  constructor(private dialog: DialogService,private _studentsService: StudentsService, private _activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.inst_id = this._activatedRoute.snapshot.paramMap.get('id');
    this.inst_name = this._activatedRoute.snapshot.paramMap.get('name');
    this.years = []
    this.years.push({ label: 'All', value: '0' })
    this.years.push({ label: 'First Year', value: '1' });
    this.years.push({ label: 'Second Year', value: '2' });
    this.years.push({ label: 'Third Year', value: '3' });
    this.years.push({ label: 'Fourth Year', value: '4' });
    this.load();
  }
  load() {
    this._studentsService.getStudentByInstitution(this.inst_id).subscribe(data => { this.students = data, _.isEmpty(this.students) ? this.flag = true : this.flag = true });
  }
  reload() {
    this._studentsService.getStudentByYear(this.selectedyear).subscribe(data => { this.students = data, _.isEmpty(this.students) ? this.flag = true : this.flag = true });
  }
  delete(id:number){
    this.dialog.openConfirmDialog("Do you want to continue?").afterClosed().subscribe(
      data => {
        if(data){
          this._studentsService.deleteStudent(id).subscribe(data=>this.load());
        }
      }
    )
  }
  year(id: number) {
    this.selectedyear = id;
    this.selectedyear == 0 ? this.load() : this.reload();
  }
}
