import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Roles } from '../model/Roles';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private base_url = "http://localhost:8080/core";

  constructor(private _httpClient: HttpClient) { }
  
  roles: Roles[];

  header = new HttpHeaders({ 'Content-Type': 'application/text; charset=utf-8' });
  getRoles(): Observable<Roles> {
    return this._httpClient.get<Roles[]>(`${this.base_url}/role`).pipe(map((res: any) => this.roles = res.data));

  }
  getRolesByid(id: number) {
    return this._httpClient.get<Roles>(`${this.base_url}/role/${id}`);
  }
  addRole(role: Roles) {
    return this._httpClient.post<Roles>(`${this.base_url}/role`, role);
  }
  deleteRole(id: Number) {
    return this._httpClient.delete(`${this.base_url}/role`);
  }
}
