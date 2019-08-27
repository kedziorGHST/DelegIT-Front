import { Component, OnInit } from '@angular/core';
import { ChartType, LegendItem } from 'app/lbd/lbd-chart/lbd-chart.component';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-raports',
  templateUrl: './raports.component.html',
  styleUrls: ['./raports.component.scss']
})
export class RaportsComponent implements OnInit {

    public emailChartType: ChartType;
    public emailChartData: any;
    public emailChartLegendItems: LegendItem[];

    public hoursChartType: ChartType;
    public hoursChartData: any;
    public hoursChartOptions: any;
    public hoursChartResponsive: any[];
    public hoursChartLegendItems: LegendItem[];

    public activityChartType: ChartType;
    public activityChartData: any;
    public activityChartOptions: any;
    public activityChartResponsive: any[];
    public activityChartLegendItems: LegendItem[];
  constructor() { }

  ngOnInit() {
      this.emailChartType = ChartType.Pie;
      this.emailChartData = {
        labels: ['62%', '38%'],
        series: [62, 32]
      };
      this.emailChartLegendItems = [
        { title: 'Praca w firmie', imageClass: 'fa fa-circle text-info' },
        { title: 'Delegacja', imageClass: 'fa fa-circle text-danger' }
      ];

      this.hoursChartType = ChartType.Line;
      this.hoursChartData = {
        labels: ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'],
        series: [
          [287, 385, 490, 355, 554, 672, 698, 695, 752, 422, 266, 357],
          [613, 515, 410, 545, 346, 228, 263, 205, 148, 478, 634, 543]
        ]
      };
      this.hoursChartOptions = {
        low: 0,
        high: 800,
        showArea: true,
        height: '245px',
        axisX: {
          showGrid: false,
        },
        lineSmooth: Chartist.Interpolation.simple({
          divisor: 3
        }),
        showLine: false,
        showPoint: false,
      };
      this.hoursChartResponsive = [
        ['screen and (max-width: 640px)', {
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      this.hoursChartLegendItems = [
        { title: 'Praca w firmie', imageClass: 'fa fa-circle text-info' },
        { title: 'Delegacja', imageClass: 'fa fa-circle text-danger' }
      ];

      this.activityChartType = ChartType.Bar;
      this.activityChartData = {
        labels: ['AlKę', 'MaRu', 'KrPi', 'MaPo', 'MaRa', 'KoKo', 'MoNo', 'PaWo'],
        series: [
          [11, 13, 8, 9, 17, 12, 0, 4],
          [9, 7, 12, 11, 3, 8, 20, 16]
        ]
      };
      this.activityChartOptions = {
        seriesBarDistance: 10,
        axisX: {
          showGrid: false
        },
        height: '245px'
      };
      this.activityChartResponsive = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      this.activityChartLegendItems = [
        { title: 'Praca w firmie', imageClass: 'fa fa-circle text-info' },
        { title: 'Delegacja', imageClass: 'fa fa-circle text-danger' }
      ];


    }

}
