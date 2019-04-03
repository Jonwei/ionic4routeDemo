# ionic4routeDemo
使用ionic4开发，TabBarController和Navigation跳转 演示项目

文件 `tabs.module.ts`
```
[lang=typescript]
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
```
