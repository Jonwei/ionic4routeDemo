import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import 'echarts-liquidfill';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    const ec = echarts as any;
    const container = document.getElementById('container');

    const chart = ec.init(container);
    chart.setOption({
      series: {
        type: 'liquidFill',
        data: [0.5, 0.4, 0.3, 0.2]
      }
    });
  }

  navigate() {
    this.router.navigate(['detail']);
  }

  tabBar() {
    this.router.navigate(['tabs/detail']);
  }
}
