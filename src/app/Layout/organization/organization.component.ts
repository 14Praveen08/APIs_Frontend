import { Component, OnInit, Output } from '@angular/core';
import { ApiService } from '../../Services/api.service';
import { organization } from 'src/app/model/organization';
import { Router } from '@angular/router'
import * as _ from 'lodash';
import { DialogService } from 'src/app/Services/dialog.service';



@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css'],
  providers: [ApiService]
})
export class OrganizationComponent implements OnInit {
  flag = false;
  org: organization[];
  search:string;

  constructor(private dialog: DialogService,private _apiService: ApiService, private router: Router) {
    this.reload();

  }
  reload() {
    this._apiService.getAllOrg().subscribe(data => { this.org = data; _.isEmpty(this.org) ? this.flag = false : this.flag = true });
  }

  ngOnInit(): void {

  }
  ngAfterViewInit() {

  }

  delete(id:number){
    this.dialog.openConfirmDialog("Do you want to continue?").afterClosed().subscribe(
      data => {
        if(data){
          this._apiService.deleteOrg(id).subscribe(data=>this.reload());
        }
      }
    );
  }


  changeStatus(id: Number) {

    this._apiService.statusOrg(id).subscribe(data => { this.reload() });
  }


}