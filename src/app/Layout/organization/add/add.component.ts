import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../Services/api.service';
import { Router } from '@angular/router';
import { organization } from 'src/app/model/organization';

import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [ApiService]
})
export class AddComponent implements OnInit {

  org: organization = new organization();
  submitted = false;
  constructor(private _apiService: ApiService, private _router: Router) { }

  ngOnInit(): void {
  }



  addForm = new FormGroup({
    name: new FormControl,
    alias: new FormControl,
    university: new FormControl,

  });
  save() {

    this.org = this.addForm.value;
    console.log(this.org);
    this._apiService.addOrg(this.org).subscribe(data => { console.log(data); });
    this._router.navigateByUrl('home');

  }
}
