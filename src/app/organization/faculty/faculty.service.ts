import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Faculty } from 'src/app/model/Faculty';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, retry } from 'rxjs/operators';
import { Roles } from 'src/app/model/Roles';
import { FacultyObj } from 'src/app/model/FacultyObj';
import { JsonPipe } from '@angular/common';


@Injectable({
  providedIn: 'root'
})






export class FacultyService {


  private base_url = "http://localhost:8081/emp";

  constructor(private _httpClient: HttpClient) { }
  faculty: Faculty[];

  roles: Roles[];

  header = new HttpHeaders({ 'Content-Type': 'application/text; charset=utf-8' });

  getAllFactulty() {
    return this._httpClient.get(`${this.base_url}/faculty`).pipe(map((res: any) => res));
  }

  getFaculty(id: Number) {
    return this._httpClient.get(`${this.base_url}/faculty/${id}`).pipe(map((res: any) => res));

  }
  getFacultyByInstitution(id: Number): Observable<FacultyObj[]> {

    return this._httpClient.get<FacultyObj[]>(`${this.base_url}/faculty/institution/${id}`).pipe(map(res=>res),catchError(this.handleError));
  }




  deleteFaculty(id: Number): Observable<any> {
    return this._httpClient.delete(`${this.base_url}/faculty/${id}`,httpOptions).pipe(map(res=>res));

  }
  addFaculty(fac: Faculty): Observable<Faculty> {
    
    return this._httpClient.post<Faculty>(`${this.base_url}/faculty`, fac).pipe(map(res=>res),catchError(this.handleError));
  }
  editFaculty(fac: Faculty): Observable<Faculty> {
    return this._httpClient.put<Faculty>(`${this.base_url}/faculty`, fac).pipe(map(res=>res),catchError(this.handleError));
  }



  //htpp calls for Roles Api
  getRoles(): Observable<Roles> {
    return this._httpClient.get<Roles[]>(`${this.base_url}/role`).pipe(map((res: any) => this.roles = res));

  }
  getRolesByid(id: number) {
    return this._httpClient.get<Roles>(`${this.base_url}/role/${id}`).pipe(map((res: any) => res));
  }
  addRole(role: Roles) {
    return this._httpClient.post<Roles>(`${this.base_url}/role`, role).pipe(map((res: any) => res));
  }
  deleteRole(id: Number) {
    return this._httpClient.delete(`${this.base_url}/role`).pipe(map((res => console.log(res))));
  }




  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json, charset=utf-8' })
};