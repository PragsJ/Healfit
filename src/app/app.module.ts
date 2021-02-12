import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScheduleAllModule } from '@syncfusion/ej2-angular-schedule';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PeriodTrackingComponent } from './period-tracking/period-tracking.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from './home/carousel/carousel.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FooterComponent } from './home/footer/footer.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { Routes, RouterModule } from '@angular/router';
import { AnalysisComponent } from './analysis/analysis.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { HighchartsChartModule } from "highcharts-angular";
import { HttpClientModule } from '@angular/common/http';
import { PredictComponent } from './predict/predict.component';

const appRoutes: Routes=[
  { path : '', component: HomeComponent},
  { path : 'blogs', component: BlogsComponent},
  { path : 'tracker', component: PeriodTrackingComponent},
  { path : 'consultation', component: ConsultationComponent},
  { path : 'analysis', component: AnalysisComponent},
  { path : 'predict', component: PredictComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeriodTrackingComponent,
    BlogsComponent,
    CarouselComponent,
    FooterComponent,
    NavbarComponent,
    AnalysisComponent,
    ConsultationComponent,
    PredictComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScheduleAllModule,
    CheckBoxModule,
    BrowserAnimationsModule,
    HighchartsChartModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
