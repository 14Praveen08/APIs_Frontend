import { Component, OnInit, Output } from '@angular/core';
import { ApiService } from '../../Services/api.service';
import { organization } from 'src/app/model/organization';
import { Router } from '@angular/router'
import * as _ from 'lodash';


@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css'],
  providers: [ApiService]
})
export class OrganizationComponent implements OnInit {
  flag = false;
  org: organization[];

  constructor(private _apiService: ApiService, private router: Router) {
    this.reload();

  }
  reload() {
    this._apiService.getAllOrg().subscribe(data => { this.org = data; _.isEmpty(this.org) ? this.flag = false : this.flag = true });
  }

  ngOnInit(): void {

  }
  ngAfterViewInit() {

  }



  delete(id: Number) {
    this._apiService.deleteOrg(id).subscribe(
      data => {
        console.log(data);
        this.reload();
      });

  }


  changeStatus(id: Number) {

    this._apiService.statusOrg(id).subscribe(data => { this.reload() });
  }


}