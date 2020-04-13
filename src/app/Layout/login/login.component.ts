import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../Authentication/authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  invalidLogin = false;
  constructor(private _auth: AuthenticationService,
    private route: Router,private toaster: ToastrService) { }

  ngOnInit(): void {
  }
  check() {
    if (this._auth.authenticate(this.username, this.password)) {
      this.toaster.success('Logging In','Success');
      this.route.navigate(['home']);
      this.invalidLogin = false;

    }
    else {
      this.invalidLogin = true;
      this.toaster.error('Invalid UserName or Password!!','Error',{
        progressBar:false,
      });

    }
  }

}





