import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../../Services/students.service';
import{ActivatedRoute,Router} from '@angular/router'
import { organization } from 'src/app/model/organization';
import { ApiService } from 'src/app/Services/api.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Student } from 'src/app/model/Student';
import { StudentObj } from 'src/app/model/StudentObj';
import { SelectItem } from 'primeng/api/selectitem';

@Component({
  selector: 'app-edit-students',
  templateUrl: './edit-students.component.html',
  styleUrls: ['./edit-students.component.css'],
  providers:[StudentsService,ApiService]
})
export class EditStudentsComponent implements OnInit {
flag=false;
stud_id:number;
inst_id:number;
inst_name:String;
studentObj:StudentObj;
student:Student;
orgObj:organization[];
years:SelectItem[]
error;
constructor(private _studentsService:StudentsService,private _activatedRoute:ActivatedRoute,private _router:Router ,private orgService:ApiService) { }

ngOnInit(): void {
this.stud_id=parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
this.inst_id=parseInt(this._activatedRoute.snapshot.paramMap.get('instid'));
this.inst_name=this._activatedRoute.snapshot.paramMap.get('name');
this._studentsService.getStudent(this.stud_id).subscribe(data=>{this.studentObj=data,this.loadValues(),this.flag=true});
this.orgService.getAllOrg().subscribe((data:any)=>{this.orgObj=data});
this.years=[];
this.years.push({label:'Select Year',value:''});
  this.years.push({label:'First Year',value:'1'});
  this.years.push({label:'Second Year',value:'2'});
  this.years.push({label:'Third Year',value:'3'});
  this.years.push({label:'Fourth Year',value:'4'});
  }
  editform=new FormGroup({
    id:new FormControl(),
    redgno:new FormControl(),
    institutionid: new FormControl(),
    fname: new FormControl(),
    lname: new FormControl(),
    dob: new FormControl(),
    email: new FormControl(),
    mobileno: new FormControl(),
    year: new FormControl()    
  });

  update(){
    this.student=this.editform.value;
    // this._studentsService.updateStudent(this.student).subscribe(data=>{this._router.navigate(['/students',this.stud_id,this.studentObj.org.name])})
    this._studentsService.updateStudent(this.student).subscribe(data=>{this.stud_id==null?this._router.navigate(['/students',this.inst_id,this.studentObj.org.name]):this._router.navigate(['/allstudents'])})
}

  years_(id:number){
    this.editform.patchValue({year:id});
  }
  
  organization(id:number){
    this.editform.patchValue({institutionid:id});
  }
loadValues(){
  this.editform.patchValue({
    id:this.stud_id,
    redgno:this.studentObj.redgno,
    institutionid:this.studentObj.org.id,
    fname:this.studentObj.fname,
    lname:this.studentObj.lname,
    dob:this.studentObj.dob,
    email:this.studentObj.email,
    mobileno:this.studentObj.mobileno,
    year:this.studentObj.year

  });

}

}
