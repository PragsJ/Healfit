import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highstock'

declare var require: any;

const IndicatorsCore = require("highcharts/indicators/indicators");
IndicatorsCore(Highcharts);
const IndicatorZigZag = require("highcharts/indicators/zigzag");
IndicatorZigZag(Highcharts);

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Highcharts = Highcharts;

  lineChartOptions = {
    chart: {
      type: "line",
      renderTo: "container"
    },
    credits: {
      enabled: false
    },
    title: {
      text: "Typical Period length"
    },
    subtitle: {
      text: "2019-2020"
    },
    xAxis: {
      categories: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    yAxis: {
      title: {
        text: "Days"
      },
      plotLines: [
        {
          value: 0,
          width: 1,
          color: "#808080"
        }
      ]
    },
    tooltip: {
      formatter: function() {
        return "<b>" + this.series.name + "</b><br/>" + this.x + ": " + this.y;
      }
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "top",
      x: -10,
      y: 100,
      borderWidth: 0
    },
    series: [
      {
        name: "2019",
        data: [28, 27, 29, 30, 29, 31, 27, 28, 28, 31, 27, 30]
      },
      {
        name: "2020",
        data: [30, 29, 31, 27, 28, 28,28, 27, 29, 30, 29, 30]
      }
    ]
  };

  columnChartOptions = {
    chart: {
      type: "column",
      renderTo: "container"
    },
    credits: {
      enabled: false
    },
    title: {
      text: "Typical Cycle Length"
    },
    subtitle: {
      text: "2019-2020"
    },
    xAxis: {
      categories: ["January", "Feb", "March","April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    yAxis: {
      min: 0,
      title: {
        text: "Days"
      }
    },
    legend: {
      layout: "vertical",
      backgroundColor: "#FFFFFF",
      align: "left",
      verticalAlign: "top",
      x: 100,
      y: 70,
      floating: true,
      shadow: true
    },
    tooltip: {
      formatter: function() {
        return "" + this.x + ": " + this.y;
      }
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [
      {
        name: "2019",
        data: [4,5,6,6,7,6,5,5,4,6,5,6]
      },
      {
        name: "2020",
        data: [6,7,6,5,5,4,6,7,6,5,7,6]
      }
    ]
  };

 
  chartOptions = [
    { chartConfig: this.lineChartOptions },
    { chartConfig: this.columnChartOptions }
  ];
}
