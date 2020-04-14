import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../Authentication/authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private toaster: ToastrService,private _auth: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this._auth.logOut();
    this.toaster.success('Logging Out','Success',{
      progressBar:true,
      timeOut:1000,
      progressAnimation:"decreasing"
    });
    this.router.navigate(['']);
  }

}
