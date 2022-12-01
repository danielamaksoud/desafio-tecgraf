import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DisplayGrid, GridsterConfig, GridsterItem, GridType } from 'angular-gridster2';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  options!: GridsterConfig;
  dashboard!: GridsterItem[];

  constructor(private http: HttpClient) { }

  static itemChange(item: any, itemComponent: any) {
    //console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item: any, itemComponent: any) {
    //console.info('itemResized', item, itemComponent);
  }

  removeItem(item: any) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  getDataFromApi(endpoint: string) {
    interface Data {
      x: string;
      y: string;
    }

    return this.http.post<Data>('http://localhost:5000/' + endpoint, {});

    // return this.http.post<Data>('http://localhost:5000/' + endpoint, {}).subscribe((value) => {
    //   console.log('x: ' + value['x']);
    //   console.log('y: ' + value['y']);
    // });
  }

  buildContent(x: string[], y: number[], typeChart: number) {

    let content = {};

    if (typeChart == 1) {
      content = {
        legend: {
          align: 'left',
        },
        tooltip: {},
        xAxis: {
          type: 'category',
          data: x
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: y,
            type: 'line'
          }
        ],
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            dataView: { readOnly: false },
            magicType: { type: ['line', 'bar'] },
            restore: {},
            saveAsImage: {}
          }
        },
      }
    } else if (typeChart == 2) {
      content = {
        legend: {
          align: 'left',
        },
        tooltip: {},
        xAxis: {
          type: 'category',
          data: x
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: y,
            type: 'bar'
          }
        ],
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            dataView: { readOnly: false },
            magicType: { type: ['line', 'bar'] },
            restore: {},
            saveAsImage: {}
          }
        },
      }
    }
    else {
      content = {
        title: {
          text: 'Referer of a Website',
          subtext: 'Fake Data',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: y[0], name: x[0] },
              { value: y[1], name: x[1] },
              { value: y[2], name: x[2] },
              { value: y[3], name: x[3] },
              { value: y[4], name: x[4] }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    };

    return content;

  }

  ngOnInit(): void {
    this.dashboard = [];

    this.options = {
      itemChangeCallback: GridComponent.itemChange,
      itemResizeCallback: GridComponent.itemResize,
      gridType: GridType.Fit,
      displayGrid: DisplayGrid.Always,
      minCols: 6,
      maxCols: 8,
      minRows: 2,
      pushItems: true,
      swap: false,
      draggable: {
        delayStart: 0,
        enabled: true,
        ignoreContentClass: 'gridster-item-content',
        ignoreContent: true,
        dragHandleClass: 'drag-handler',
        dropOverItems: false,
      },
      resizable: {
        enabled: true
      }
    };

    this.getDataFromApi('example-1').subscribe((value) => {

      let x, y;
      let content;

      x = value['x'].split(',');
      y = value['y'].split(',').map((value) => {
        /*Converter para number*/
        return +value;
      });

      content = this.buildContent(x, y, 2);

      this.dashboard.push({
        cols: 2, rows: 1, y: 0, x: 0, content: content, dragEnabled: true,
        resizeEnabled: true
      });
    });

    this.getDataFromApi('example-2').subscribe((value) => {
      let x, y;
      let content;

      x = value['x'].split(',');
      y = value['y'].split(',').map((value) => {
        return +value;
      });

      content = this.buildContent(x, y, 1);

      this.dashboard.push({
        cols: 2, rows: 1, y: 0, x: 2, content: content, dragEnabled: true,
        resizeEnabled: true
      });
    });

    this.getDataFromApi('example-3').subscribe((value) => {
      let x, y;
      let content;

      x = value['x'].split(',');
      y = value['y'].split(',').map((value) => {
        return +value;
      });

      content = this.buildContent(x, y, 1);

      this.dashboard.push({
        cols: 2, rows: 1, y: 0, x: 4, content: content, dragEnabled: true,
        resizeEnabled: true
      });
    });

    this.getDataFromApi('example-4').subscribe((value) => {
      let x, y;
      let content;

      x = value['x'].split(',');
      y = value['y'].split(',').map((value) => {
        return +value;
      });

      content = this.buildContent(x, y, 2);

      this.dashboard.push({
        cols: 2, rows: 1, y: 1, x: 0, content: content, dragEnabled: true,
        resizeEnabled: true
      });
    });

    this.getDataFromApi('example-5').subscribe((value) => {
      let x, y;
      let content;

      x = value['x'].split(',');
      y = value['y'].split(',').map((value) => {
        return +value;
      });

      content = this.buildContent(x, y, 1);

      this.dashboard.push({
        cols: 2, rows: 1, y: 1, x: 2, content: content, dragEnabled: true,
        resizeEnabled: true
      });
    });

    this.getDataFromApi('example-6').subscribe((value) => {
      let x, y;
      let content;

      x = value['x'].split(',');
      y = value['y'].split(',').map((value) => {
        return +value;
      });

      content = this.buildContent(x, y, 3);

      this.dashboard.push({
        cols: 2, rows: 1, y: 1, x: 4, content: content, dragEnabled: true,
        resizeEnabled: true
      });
    });
  }
}
