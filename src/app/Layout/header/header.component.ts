import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../Authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sidebar;

  constructor(public _auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  check() {
    return this._auth.isUserLoggedIn()
  }

}
