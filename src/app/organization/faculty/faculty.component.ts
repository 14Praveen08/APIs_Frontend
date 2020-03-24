import { Component, OnInit } from '@angular/core';
import { FacultyService } from './faculty.service';
import { ActivatedRoute } from '@angular/router';
import { Roles } from 'src/app/model/Roles';
import {TableModule} from 'primeng/table';
import * as _ from 'lodash';
@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css'],
  providers:[FacultyService]
})
export class FacultyComponent implements OnInit {
 
  faculty:Object[]; 
  id:Number;
  flag=false;
  name:string;
  role:Roles;
  ask;
  constructor(private fac:FacultyService,private _activatedroute:ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.getbyInst();    
  }

getbyInst(){
  this.id=parseInt(this._activatedroute.snapshot.paramMap.get('id'));
  this.name=this._activatedroute.snapshot.paramMap.get('name');
  this.fac.getFacultyByInstitution(this.id).subscribe(data =>{ this.faculty = data, _.isEmpty(this.faculty) ? this.flag = false : this.flag = true });//console.log(this.faculty) ;
  
  
}
getRole(id:number){
  this.fac.getRolesByid(id).subscribe(data=>this.role=data);

}

delete(id:Number)
{
  this.ask=confirm("Press OK to Delete ");
  if(this.ask){
    this.fac.deleteFaculty(id).subscribe(data => {this.getbyInst()});
     }
 

}}
