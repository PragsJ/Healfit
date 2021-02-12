import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class EventsapiService {

  baseurl = "https://healfit.herokuapp.com/";

  constructor(private http: HttpClient) { }

  getAllEvents(): Observable<any>{
    return this.http.get(this.baseurl + 'events')
 }
}
