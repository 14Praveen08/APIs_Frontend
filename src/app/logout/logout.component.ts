import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _auth:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
    this._auth.logOut();
    this.router.navigate(['']);
  }

}
