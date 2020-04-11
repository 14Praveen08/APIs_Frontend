import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../Services/api.service';
import { Router } from '@angular/router';
import { organization } from 'src/app/model/organization';

import { FormGroup, FormControl } from '@angular/forms';
import { AlertdialogService } from 'src/app/Services/alertdialog.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [ApiService]
})
export class AddComponent implements OnInit {

  org: organization = new organization();
  submitted = false;
  constructor(private alertdialog:AlertdialogService,private _apiService: ApiService, private _router: Router) { }

  ngOnInit(): void {
  }



  addForm = new FormGroup({
    name: new FormControl,
    alias: new FormControl,
    university: new FormControl,

  });
  save(){
    this.org = this.addForm.value;
    this.alertdialog.openDialog("Organization Created Successfully").afterClosed().subscribe(
      data=>{
        if(data){
          this._apiService.addOrg(this.org).subscribe(data=>this._router.navigateByUrl('home'));
        }
      });
  }
}
