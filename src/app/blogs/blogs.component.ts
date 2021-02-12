import { Component, OnInit } from '@angular/core';
import { BlogapiService } from './blogapi.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  public posts:any;
  constructor(private blogapi: BlogapiService) { 
      this.getBlogs();
  }
  
  getBlogs = () =>{
    this.blogapi.getAllBlogs().subscribe(
      data =>{
        this.posts = data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    )}  

  ngOnInit(): void {
  }
}
