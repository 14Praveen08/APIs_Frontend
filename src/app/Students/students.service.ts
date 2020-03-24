import { Injectable } from '@angular/core';
import{Student} from 'src/app/model/Student';
import{HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Observable,throwError} from 'rxjs';
import { StudentObj } from '../model/StudentObj';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private _httpClient:HttpClient) { }

  private base_url = "http://localhost:8080/core";

  getAllStudents():Observable<StudentObj[]> {
    return this._httpClient.get<StudentObj[]>(`${this.base_url}/getstud`);
  }

  getStudent(id: number):Observable<StudentObj> {
    return  this._httpClient.get<StudentObj>(`${this.base_url}/getstud/${id}`);
  }
  getStudentByInstitution(inst_id: number):Observable<StudentObj[]> {
    return  this._httpClient.get<StudentObj[]>(`${this.base_url}/getstud/institution/${inst_id}`);
  }
  getStudentByInstYear(inst_id: number, year: number):Observable<StudentObj[]> {
    return this._httpClient.get<StudentObj[]>(`${this.base_url}/getstud/instyearwise/${inst_id}/${year}`).pipe(catchError(this.handleError));
  }
  getStudentByYear(year: number):Observable<StudentObj[]>{
    return this._httpClient.get<StudentObj[]>(`${this.base_url}/getstud/year/${year}`);
  }
  addStudent(obj:Student):Observable<Student> {
    console.log(obj);
    return this._httpClient.post<Student>(`${this.base_url}/insert`,obj);
  }
  updateStudent(obj:Student):Observable<Student> {
    return  this._httpClient.put<Student>(`${this.base_url}/update`,obj);
  }
  deleteStudent(id: number) {
    return this._httpClient.delete(`${this.base_url}/delete/${id}`);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      alert("No Values Present in your particular Selection");
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError("No Value");
  };

}
