import { Component, OnInit } from '@angular/core';
import { ConsultantapiService } from './consultantapi.service'

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css'],
  providers: [ConsultantapiService]
})
export class ConsultationComponent implements OnInit {
  public consultants: any;
  constructor(private consultationapi: ConsultantapiService) {
     this.getConsultants()
   }
  
  getConsultants = () =>{
    this.consultationapi.getAllConsultants().subscribe(
      data =>{
        this.consultants = data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    )}  

    ngOnInit(): void {
    }
}
