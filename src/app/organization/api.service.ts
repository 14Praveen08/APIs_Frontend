import { Injectable } from '@angular/core';
import{HttpClient } from '@angular/common/http';
import{organization} from 'src/app/model/organization';
import {Observable} from 'rxjs';
import{map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  _org: any;
   body:any;

  private org_url="http://localhost:8080/core/organization";


  constructor(private _httpClient: HttpClient) { }

  
    //api call to list all organization ,return type :List of objects

    getAllOrg():Observable<organization[]>{
      return this._httpClient.get<organization[]>(this.org_url).pipe(map((res:any)=>res));
    }

    //api call to list all organization those are active ,return type :List of objects

     getAllOrgActive():Observable<organization[]>{
      return this._httpClient.get<organization[]>(`${this.org_url}/active`).pipe(map((res:any)=>res));
    }


    //api call to get organization by id, input : Integer id,return type:org object

    getOrg(id:Number):Observable<organization>{
     this._org=this._httpClient.get<organization>(`${this.org_url}/${id}`).pipe();
      return this._org;
          }


    // api call to add organization, Input: org Object

   addOrg(_org:Object):Observable<organization>
   {
    return this._httpClient.post<organization>(this.org_url,_org).pipe();
   }



   //api call to edit organization ,Input : Updated object

  editOrg(_org:Object):Observable<organization>
   {
     return this._httpClient.put<organization>(this.org_url,_org).pipe();
   }


   //api call to delete organization ,Input :org Id

   deleteOrg(id:Number):Observable<any>{
    return this._httpClient.delete(`${this.org_url}/${id}`,{responseType:"text"});
   }

 //api call to change status,Input :Organization Id

   statusOrg(id:Number){
     return this._httpClient.put(`${this.org_url}/status/${id}`,{responseType:"text"});
   }

   }


