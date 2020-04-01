import { Component, OnInit } from '@angular/core';
import { FacultyService } from 'src/app/organization/faculty/faculty.service';
import { organization } from 'src/app/model/organization';
import { ActivatedRoute } from '@angular/router';
import { FacultyObj } from 'src/app/model/FacultyObj';
import { ApiService } from 'src/app/organization/api.service';
import * as _ from 'lodash';


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
  ask;
  selectedInst;
  constructor(private orgService: ApiService, private _facultyService: FacultyService) {
    this.orgService.getAllOrg().subscribe((data: any) => { this.orgObj = data });

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
  delete(id: Number) {
    this.ask = confirm("Press OK to Delete");
    if (this.ask) {
      this._facultyService.deleteFaculty(id).subscribe(data => this.load());

    }
  }
  organization(id: number) {
    this.selectedInst = id;
    this.selectedInst == 0 ? this.load() : this.reload();
  }
}