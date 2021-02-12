import { Component, OnInit, ViewChild, Inject, ViewEncapsulation } from '@angular/core';
import { MonthService, AgendaService,ActionEventArgs, ToolbarActionArgs,ExcelExportService, ExportOptions } from '@syncfusion/ej2-angular-schedule';
import {
  ScheduleComponent, EventSettingsModel,
  TimelineViewsService,View,
  TimelineMonthService, ResizeService, DragAndDropService
} from '@syncfusion/ej2-angular-schedule';
import { EventsapiService } from './eventsapi.service'

@Component({
  selector: 'app-period-tracking',
  templateUrl: './period-tracking.component.html',
  styleUrls: ['./period-tracking.component.css'],
  providers: [MonthService, TimelineViewsService, TimelineMonthService, ResizeService, DragAndDropService, EventsapiService]
})
export class PeriodTrackingComponent implements OnInit {

public events: any;
public setView: View = 'Month';
public allowMultiple: Boolean = true;
public eventSettings: EventSettingsModel;
@ViewChild('scheduleObj')
public scheduleObj: ScheduleComponent;

constructor(private eventsapi: EventsapiService) { 
    this.getEvents();
}
  getEvents = () =>{
    this.eventsapi.getAllEvents().subscribe(
      data =>{
        this.events = data;
        this.eventSettings = { dataSource: this.events};
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    )}  
  ngOnInit(): void {
  }

}
