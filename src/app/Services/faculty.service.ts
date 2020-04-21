import { Injectable,Injector,Inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Faculty } from 'src/app/model/Faculty';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, retry } from 'rxjs/operators';
import { Roles } from 'src/app/model/Roles';
import { FacultyObj } from 'src/app/model/FacultyObj';
import { AlertdialogService } from 'src/app/Services/alertdialog.service';


@Injectable({
  providedIn: 'root'
})






export class FacultyService {


  private base_url = "http://localhost:8080/core";

  constructor(private _httpClient: HttpClient, @Inject(Injector)private inj: Injector) { }

  private get alert(): AlertdialogService {
    return this.inj.get(AlertdialogService);
  }

  faculty: Faculty[];

  roles: Roles[];

  header = new HttpHeaders({ 'Content-Type': 'application/text; charset=utf-8' });

  getAllFactulty() {
    return this._httpClient.get(`${this.base_url}/faculty`).pipe(map((res: any) => res.data));
  }

  getFaculty(id: Number) {
    return this._httpClient.get(`${this.base_url}/faculty/${id}`).pipe(map((res: any) => res.data));

  }
  getFacultyByInstitution(id: Number): Observable<FacultyObj[]> {

    return this._httpClient.get<FacultyObj[]>(`${this.base_url}/faculty/institution/${id}`).pipe(map((res: any) => res.data),catchError(this.handleError));
  }
  getFacultyByInstRole(inst_id:Number,role_id: Number): Observable<FacultyObj[]> {

    return this._httpClient.get<FacultyObj[]>(`${this.base_url}/faculty/instrole/${inst_id}/${role_id}`).pipe(map((res: any) => res.data),catchError(this.handleError));
  }
  getFacultyByRole(role_id: Number): Observable<FacultyObj[]> {

    return this._httpClient.get<FacultyObj[]>(`${this.base_url}/faculty/role/${role_id}`).pipe(map((res: any) => res.data),catchError(this.handleError));
  }
  deleteFaculty(id: Number): Observable<any> {
    return this._httpClient.delete(`${this.base_url}/faculty/${id}`);

  }
  addFaculty(fac: Faculty): Observable<Faculty> {
    // return this._httpClient.post<Faculty>(`${this.base_url}/faculty`, fac);
    return this._httpClient.post<Faculty>(`${this.base_url}/faculty`, fac).pipe(catchError(this.addError));
  }
  editFaculty(fac: Faculty): Observable<Faculty> {
    return this._httpClient.put<Faculty>(`${this.base_url}/faculty`, fac).pipe(catchError(this.editError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      alert("No Faculties Present!!");
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError("No Value");
  };
  public addError(error: any) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      alert("Enter Valid Data and Proceed adding Faculties");
      this.alert.openDialog("Faculty Created Successfully");
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError("No Value");
  };
  private editError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      alert("Enter Valid Data and Proceed editing Faculties");
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError("No Value");
  };

}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json, charset=utf-8' })
};