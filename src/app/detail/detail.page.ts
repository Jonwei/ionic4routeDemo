import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  @ViewChild('chart') chartNode: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    const container = this.chartNode.nativeElement;
    this.makeChart(container);
  }

  makeChart(container) {
    const ec = echarts as any;
    const chart = ec.init(container);
    chart.setOption({
      series: {
        type: 'pie',
        data: [
          {
            name: 'A',
            value: 10
          },
          {
            name: 'B',
            value: 20
          },
          {
            name: 'C',
            value: 30
          }
        ]
      }
    });
  }

}
