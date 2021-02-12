import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class BlogapiService {
  
  baseurl = "https://healfit.herokuapp.com/";
  
  constructor(private http: HttpClient) { }

  getAllBlogs(): Observable<any>{
    return this.http.get(this.baseurl + 'blogs');
 }

}
