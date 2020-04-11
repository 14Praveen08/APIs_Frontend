import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { organization } from 'src/app/model/organization';
import { ApiService } from '../../../Services/api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AlertdialogService } from 'src/app/Services/alertdialog.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [ApiService]
})
export class FormComponent implements OnInit {
  org: organization;
  updated_org: organization;
  editForm;
  id: Number;

  constructor(private alertdialog:AlertdialogService,private _activatedroute: ActivatedRoute,
    private _router: Router,
    private _api: ApiService
  ) {

    this.getdetails();


  }
  getdetails() {
    this.id = parseInt(this._activatedroute.snapshot.paramMap.get('id'));
    this._api.getOrg(this.id).subscribe(data => { this.org = data; this.load(); });

  }



  ngOnInit(): void {

    this.editForm = new FormGroup({

      // name:new FormControl({value:'',disabled:true}), 
      name: new FormControl(),
      alias: new FormControl(),
      university: new FormControl(),
      createdon: new FormControl,
      modifiedon: new FormControl,
      isActive: new FormControl(1)

    });


  }
  load() {

    this.editForm.patchValue({
      name: this.org.name,
      alias: this.org.alias,
      university: this.org.university,
      createdon: this.org.createdon,
      isActive: this.org.isActive

    });

  }

  update(){
    this.org = this.editForm.value;
    this.org.id = this.id;
    this.alertdialog.openDialog("Organization Updated Successfully").afterClosed().subscribe(
      data=>{
        if(data){
          this._api.editOrg(this.org).subscribe(data=>this._router.navigateByUrl('home'));
        }
      });
  }


}
