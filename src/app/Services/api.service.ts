import { Injectable } from '@angular/core';
import{HttpClient, HttpErrorResponse } from '@angular/common/http';
import{organization} from 'src/app/model/organization';
import {Observable, throwError} from 'rxjs';
import{map, catchError} from 'rxjs/operators';
import { AlertdialogService } from 'src/app/Services/alertdialog.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  _org: any;
   body:any;

  private org_url="http://localhost:8080/core/organization";


  constructor(private alertdialog:AlertdialogService,private _httpClient: HttpClient) { }

  
    //api call to list all organization ,return type :List of objects

    getAllOrg():Observable<organization[]>{
      return this._httpClient.get<organization[]>(this.org_url).pipe(map((res:any)=>res.data));
    }

    //api call to list all organization those are active ,return type :List of objects

     getAllOrgActive():Observable<organization[]>{
      return this._httpClient.get<organization[]>(`${this.org_url}/active`).pipe(map((res:any)=>res.data));
    }


    //api call to get organization by id, input : Integer id,return type:org object

    getOrg(id:Number):Observable<organization>{
      let id1= id.toString();
     return this._httpClient.get<organization>(`${this.org_url}/${id1}`).pipe(map((res:any)=>res.data));
    }


    // api call to add organization, Input: org Object

   addOrg(_org:Object):Observable<organization>
   {
    return this._httpClient.post<organization>(this.org_url,_org);
   }



   //api call to edit organization ,Input : Updated object

  editOrg(_org:Object):Observable<organization>
   {
     return this._httpClient.put<organization>(this.org_url,_org).pipe(map((res:any)=>res.data));
   }


   //api call to delete organization ,Input :org Id

   deleteOrg(id:Number):Observable<any>{
    return this._httpClient.delete(`${this.org_url}/${id}`,{responseType:"text"}).pipe(catchError(this.deleteError));
   }

 //api call to change status,Input :Organization Id

   statusOrg(id:Number){
     return this._httpClient.put(`${this.org_url}/status/${id}`,{responseType:"text"});
   }

   private deleteError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      alert("Could Not Delete Organization because Students or Faculties are present!!!");
    }
    // return an observable with a user-facing error message
    return throwError("No Value");
  };

   }