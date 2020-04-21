import { Injectable } from '@angular/core';
import{Student} from 'src/app/model/Student';
import{HttpClient,HttpErrorResponse} from '@angular/common/http';
import { map} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { StudentObj } from '../model/StudentObj';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private _httpClient:HttpClient) { }

  private base_url = "http://localhost:8080/core";

  getAllStudents():Observable<StudentObj[]> {
    return this._httpClient.get<StudentObj[]>(`${this.base_url}/getstud`).pipe(map((res: any) => res.data));
  }

  getStudent(id: number):Observable<StudentObj> {
    return  this._httpClient.get<StudentObj>(`${this.base_url}/getstud/${id}`).pipe(map((res: any) => res.data));
  }
  getStudentByInstitution(inst_id: number):Observable<StudentObj[]> {
    return  this._httpClient.get<StudentObj[]>(`${this.base_url}/getstud/institution/${inst_id}`).pipe(map((res: any) => res.data),catchError(this.handleError));
  }
  getStudentByInstYear(inst_id: number, year: number):Observable<StudentObj[]> {
    return this._httpClient.get<StudentObj[]>(`${this.base_url}/getstud/instyearwise/${inst_id}/${year}`).pipe(map((res: any) => res.data),catchError(this.handleError));
  }
  getStudentByInstDept(inst_id: number, dept: number):Observable<StudentObj[]> {
    return this._httpClient.get<StudentObj[]>(`${this.base_url}/getstud/instdeptwise/${inst_id}/${dept}`).pipe(map((res: any) => res.data),catchError(this.handleError));
  }
  getStudentByInstYearDept(inst_id: number, year: number, dept: number):Observable<StudentObj[]> {
    return this._httpClient.get<StudentObj[]>(`${this.base_url}/getstud/instyeardeptwise/${inst_id}/${year}/${dept}`).pipe(map((res: any) => res.data),catchError(this.handleError));
  }
  getStudentByYear(year: number):Observable<StudentObj[]>{
    return this._httpClient.get<StudentObj[]>(`${this.base_url}/getstud/year/${year}`).pipe(map((res: any) => res.data),catchError(this.handleError));
  }
  getStudentByDepartment(dept_id: number):Observable<StudentObj[]>{
    return  this._httpClient.get<StudentObj[]>(`${this.base_url}/getstud/department/${dept_id}`).pipe(map((res: any) => res.data),catchError(this.handleError));
  }
  getStudentByDeptYear(dept_id: number, year: number):Observable<StudentObj[]> {
    return this._httpClient.get<StudentObj[]>(`${this.base_url}/getstud/deptyearwise/${dept_id}/${year}`).pipe(map((res: any) => res.data),catchError(this.handleError));
  }
  addStudent(obj:Student):Observable<Student> {
    console.log(obj);
    return this._httpClient.post<Student>(`${this.base_url}/insert`,obj).pipe(catchError(this.insertError));
  }
  updateStudent(obj:Student):Observable<Student> {
    return  this._httpClient.put<Student>(`${this.base_url}/update`,obj).pipe(catchError(this.editError));
  }
  deleteStudent(id: number) {
    return this._httpClient.delete(`${this.base_url}/delete/${id}`);
  }

  private getError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      alert("Select Unselected Values!!");
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError("No Value");
  };

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      alert("No Students Present!!");
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError("No Value");
  };

  private insertError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      alert("Enter Valid Data and Proceed adding Students!!");
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
      alert("Enter Valid Data and Proceed editing Students!!");
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError("No Value");
  };

}
