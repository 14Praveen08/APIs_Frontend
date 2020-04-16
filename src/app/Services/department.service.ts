import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Department } from '../Model/Department';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private base_url = "http://localhost:8080/core";
  
  constructor(private _httpClient: HttpClient) { }

  department: Department[];
  
  header = new HttpHeaders({ 'Content-Type': 'application/text; charset=utf-8' });

  getDepartment(): Observable<Department[]>{
    return this._httpClient.get<Department[]>(`${this.base_url}/department`).pipe(map((res: any) => this.department = res.data));
  }

  getDepartmentByid(id: number) {
    return this._httpClient.get<Department[]>(`${this.base_url}/department/${id}`);

  }
}
