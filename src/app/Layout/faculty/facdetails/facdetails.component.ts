import { Component, OnInit } from '@angular/core';
import { Faculty } from 'src/app/model/Faculty';
import { FacultyService } from 'src/app/Services/faculty.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';
import { organization } from 'src/app/model/organization';

@Component({
  selector: 'app-facdetails',
  templateUrl: './facdetails.component.html',
  styleUrls: ['./facdetails.component.css']
})
export class FacdetailsComponent implements OnInit {
  faculty: Faculty;
  orgobj:organization;

  id:Number;
  flag = false;
  constructor(private fac:FacultyService,
    private _activatedroute: ActivatedRoute,
    private _router: Router) {
      this.load();
     }

  load(){
    this.id = parseInt(this._activatedroute.snapshot.paramMap.get('id'));
    this.fac.getFaculty(this.id).subscribe(data => { this.faculty = data; this.flag = true; });

  }

  ngOnInit(): void {
  }

}
