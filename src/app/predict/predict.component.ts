import { Component, OnInit } from '@angular/core';
import { PredictapiService } from './predictapi.service';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.css'],
  providers: [PredictapiService]
})
export class PredictComponent implements OnInit {
  public user: any;
  public yourDate: Date;
  constructor(private predictapi: PredictapiService) {
     this.getData();
   }

   getData = () =>{
     this.predictapi.getData().subscribe(
       data =>{
         this.user = data[0];
         this.yourDate = new Date(this.user["lastperiod"]);
         this.yourDate.setDate(this.yourDate.getDate() + this.user["avgperioddays"]);
         console.log(this.yourDate);
       },
       error =>{
         console.log(error);
        }
    )}
     calculate = ()=>{
      
     }
     
  ngOnInit(): void {
  }

}
