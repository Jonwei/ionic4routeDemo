import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  },
  // 在tabs间跳转。children 值为 TabBarController 关联的页面。
  // 跳转代码示例: this.router.navigate(['tabs/detail']);
  {
    path: 'tabs', component: TabsPage, children: [
      { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
      { path: 'detail', loadChildren: '../detail/detail.module#DetailPageModule' },
    ]
  },
  // UINavigtion中跳转
  // 跳转代码示例: this.router.navigate(['detail']);
  { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
  { path: 'detail', loadChildren: '../detail/detail.module#DetailPageModule' },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
