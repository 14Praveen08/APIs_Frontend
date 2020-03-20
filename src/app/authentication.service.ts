import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }


  authenticate(username, password) {
    if (username === "admin" && password === "admin") {
      
      return true;
    } else {
      return false;
    }
  }

 
}
