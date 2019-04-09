import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { log } from 'util';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    const container = document.getElementById('chart');
    this.makeChart(container);
  }

  makeChart(container) {
    const ec = echarts as any;
    console.log(ec.version);
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
