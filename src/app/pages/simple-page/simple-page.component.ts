import { Component, OnInit } from '@angular/core';

import '../../../assets/charts/amchart/amcharts.js';
import '../../../assets/charts/amchart/gauge.js';
import '../../../assets/charts/amchart/pie.js';
import '../../../assets/charts/amchart/serial.js';
import '../../../assets/charts/amchart/light.js';
import '../../../assets/charts/amchart/ammap.js';
import '../../../assets/charts/amchart/worldLow.js';

declare const $: any;
declare const AmCharts: any;
import '../../../../node_modules/peity/jquery.peity.min.js';

@Component({
  selector: 'app-simple-page',
  templateUrl: './simple-page.component.html',
  styleUrls: ['./simple-page.component.css']
})
export class SimplePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AmCharts.makeChart('visitor-list-graph', {
      'type': 'serial',
      'hideCredits': true,
      'theme': 'light',
      'dataDateFormat': 'YYYY-MM-DD',
      'precision': 2,
      'valueAxes': [{
        'id': 'v1',
        'title': 'Visitors',
        'position': 'left',
        'autoGridCount': false,
        'labelFunction': function(value) {
          return '$' + Math.round(value) + 'M';
        }
      }, {
        'id': 'v2',
        'title': 'New Visitors',
        'gridAlpha': 0,
        'position': 'right',
        'autoGridCount': false
      }],
      'graphs': [{
        'id': 'g3',
        'valueAxis': 'v1',
        'lineColor': '#9BBAFF',
        'fillColors': '#9BBAFF',
        'fillAlphas': 1,
        'type': 'column',
        'title': 'old Visitor',
        'valueField': 'sales2',
        'clustered': false,
        'columnWidth': 0.5,
        'legendValueText': '$[[value]]M',
        'balloonText': '[[title]]<br /><b style="font-size: 130%">$[[value]]M</b>'
      }, {
        'id': 'g4',
        'valueAxis': 'v1',
        'lineColor': '#4680ff',
        'fillColors': '#4680ff',
        'fillAlphas': 1,
        'type': 'column',
        'title': 'New visitor',
        'valueField': 'sales1',
        'clustered': false,
        'columnWidth': 0.3,
        'legendValueText': '$[[value]]M',
        'balloonText': '[[title]]<br /><b style="font-size: 130%">$[[value]]M</b>'
      }, {
        'id': 'g1',
        'valueAxis': 'v2',
        'bullet': 'round',
        'bulletBorderAlpha': 1,
        'bulletColor': '#FFFFFF',
        'bulletSize': 5,
        'hideBulletsCount': 50,
        'lineThickness': 2,
        'lineColor': '#93be52',
        'type': 'smoothedLine',
        'title': 'Last Month Visitor',
        'useLineColorForBulletBorder': true,
        'valueField': 'market1',
        'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
      }, {
        'id': 'g2',
        'valueAxis': 'v2',
        'bullet': 'round',
        'bulletBorderAlpha': 1,
        'bulletColor': '#FFFFFF',
        'bulletSize': 5,
        'hideBulletsCount': 50,
        'lineThickness': 2,
        'lineColor': '#FC6180',
        // 'type': 'smoothedLine',
        'dashLength': 5,
        'title': 'Average Visitor',
        'useLineColorForBulletBorder': true,
        'valueField': 'market2',
        'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
      }],
      'chartCursor': {
        'pan': true,
        'valueLineEnabled': true,
        'valueLineBalloonEnabled': true,
        'cursorAlpha': 0,
        'valueLineAlpha': 0.2
      },
      'categoryField': 'date',
      'categoryAxis': {
        'parseDates': true,
        'dashLength': 1,
        'minorGridEnabled': true
      },
      'legend': {
        'useGraphSettings': true,
        'position': 'top'
      },
      'balloon': {
        'borderThickness': 1,
        'cornerRadius': 5,
        'shadowAlpha': 0
      },
      'dataProvider': [{
        'date': '2013-01-16',
        'market1': 71,
        'market2': 75,
        'sales1': 5,
        'sales2': 8
      }, {
        'date': '2013-01-17',
        'market1': 74,
        'market2': 78,
        'sales1': 4,
        'sales2': 6
      }, {
        'date': '2013-01-18',
        'market1': 78,
        'market2': 88,
        'sales1': 5,
        'sales2': 2
      }, {
        'date': '2013-01-19',
        'market1': 85,
        'market2': 89,
        'sales1': 8,
        'sales2': 9
      }, {
        'date': '2013-01-20',
        'market1': 82,
        'market2': 89,
        'sales1': 9,
        'sales2': 6
      }, {
        'date': '2013-01-21',
        'market1': 83,
        'market2': 85,
        'sales1': 3,
        'sales2': 5
      }, {
        'date': '2013-01-22',
        'market1': 88,
        'market2': 92,
        'sales1': 5,
        'sales2': 7
      }, {
        'date': '2013-01-23',
        'market1': 85,
        'market2': 90,
        'sales1': 7,
        'sales2': 6
      }, {
        'date': '2013-01-24',
        'market1': 85,
        'market2': 91,
        'sales1': 9,
        'sales2': 5
      }, {
        'date': '2013-01-25',
        'market1': 80,
        'market2': 84,
        'sales1': 5,
        'sales2': 8
      }, {
        'date': '2013-01-26',
        'market1': 87,
        'market2': 92,
        'sales1': 4,
        'sales2': 8
      }, {
        'date': '2013-01-27',
        'market1': 84,
        'market2': 87,
        'sales1': 3,
        'sales2': 4
      }, {
        'date': '2013-01-28',
        'market1': 83,
        'market2': 88,
        'sales1': 5,
        'sales2': 7
      }, {
        'date': '2013-01-29',
        'market1': 84,
        'market2': 87,
        'sales1': 5,
        'sales2': 8
      }, {
        'date': '2013-01-30',
        'market1': 81,
        'market2': 85,
        'sales1': 4,
        'sales2': 7
      }]
    });

    $('span.visitor1').peity('line', {
      fill: 'rgba(70, 128, 254,0.2)',
      stroke: 'rgb(70, 128, 254)',
      width: 100
    });

    $('span.visitor2').peity('line', {
      fill: 'rgba(252, 97, 128,0.2)',
      stroke: 'rgb(252, 97, 128)',
      width: 100
    });

    $('span.visitor3').peity('line', {
      fill: 'rgba(147, 190, 82,0.2)',
      stroke: 'rgb(147, 190, 82)',
      width: 100
    });

    $('span.visitor4').peity('line', {
      fill: 'rgba(255, 182, 77,0.2)',
      stroke: 'rgb(255, 182, 77)',
      width: 100
    });

    $('span.visitor5').peity('line', {
      fill: 'rgba(254, 138, 125,0.2)',
      stroke: 'rgb(254, 138, 125)',
      width: 100
    });
  }

  onTaskStatusChange(event) {
    const parentNode = (event.target.parentNode.parentNode);
    parentNode.classList.toggle('done-task');
  }

}
