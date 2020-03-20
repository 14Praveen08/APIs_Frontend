import { Injectable } from '@angular/core';
import{Student} from 'src/app/model/Student';
import{HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { StudentObj } from '../model/StudentObj';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private _httpClient:HttpClient) { }

  private base_url = "http://localhost:8082/stud";

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
    return this._httpClient.get<StudentObj[]>(`${this.base_url}/getstud/instyearwise/${inst_id}/${year}`);
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

}
