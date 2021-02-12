import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class ConsultantapiService {

  baseurl = "https://healfit.herokuapp.com/";

  constructor(private http: HttpClient) { }

  getAllConsultants(): Observable<any>{
     return this.http.get(this.baseurl + 'consultants')
  }
}
