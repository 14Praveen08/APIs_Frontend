import { Component, OnInit } from '@angular/core';
import { StudentObj } from 'src/app/model/StudentObj';
import { organization } from 'src/app/model/organization';
import { StudentsService } from 'src/app/Services/students.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-studdetails',
  templateUrl: './studdetails.component.html',
  styleUrls: ['./studdetails.component.css']
})
export class StuddetailsComponent implements OnInit {
  student: StudentObj;
  org:organization;
  id:number;
  constructor(private stud:StudentsService,
    private _activatedroute: ActivatedRoute) {
      this.load();
     }
     
     load(){
      this.id = parseInt(this._activatedroute.snapshot.paramMap.get('id'));
      this.stud.getStudent(this.id).subscribe(data => { this.student = data; });
    }

     

  ngOnInit(): void {
  }

}
