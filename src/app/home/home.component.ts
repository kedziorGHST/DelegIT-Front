import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import * as Chartist from 'chartist';
import { DelegationService} from '../delegation/delegation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
    public emailChartType: ChartType;
    public emailChartData: any;
    public emailChartLegendItems: LegendItem[];

    public monthsChartType: ChartType;
    public monthsChartData: any;
    public monthsChartOptions: any;
    public monthsChartResponsive: any[];
    public monthsChartLegendItems: LegendItem[];

    public activityChartType: ChartType;
    public activityChartData: any;
    public activityChartOptions: any;
    public activityChartResponsive: any[];
    public activityChartLegendItems: LegendItem[];
  constructor(private service: DelegationService) { }

  ngOnInit() {
      
      this.fillPieChart();

      this.monthsChartType = ChartType.Line;
      this.monthsChartData = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14',
                 '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
        series: [
          [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,],
          [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,]
        ]
      };
      this.monthsChartOptions = {
        low: 0,
        high: 5,
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
      this.monthsChartResponsive = [
        ['screen and (max-width: 640px)', {
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      this.monthsChartLegendItems = [
        { title: 'Open', imageClass: 'fa fa-circle text-info' },
        { title: 'Click', imageClass: 'fa fa-circle text-danger' },
        { title: 'Click Second Time', imageClass: 'fa fa-circle text-warning' }
      ];

      this.activityChartType = ChartType.Bar;
      this.activityChartData = {
        labels: ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'],
        series: [
          [14, 5, 10, 11, 16, 8, 9, 12, 5, 0, 21, 3],
          [5, 16, 11, 10, 5, 13, 12, 9, 16, 21, 0, 18]
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

    fillPieChart() {
      var numberOfDelegations = this.service.numberOfDelegations();
      var officeWork = 21 - this.service.numberOfDelegations(); //średnia liczba dni pracy w miesiacu - liczba delegacji
      var delegationPercent = Math.round((numberOfDelegations / 21) * 100);
      var officePercent = Math.round((officeWork / 21) * 100);
      this.emailChartType = ChartType.Pie;
      this.emailChartData = {
        labels: [officePercent + '%', delegationPercent + '%'],
        series: [officeWork, numberOfDelegations ]
      };
      this.emailChartLegendItems = [
        { title: 'Praca w firmie', imageClass: 'fa fa-circle text-info' },
        { title: 'Delegacja', imageClass: 'fa fa-circle text-danger' }
      ];
    }

}
