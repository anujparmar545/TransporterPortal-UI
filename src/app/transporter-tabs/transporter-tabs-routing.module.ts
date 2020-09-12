import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransporterTabsPage } from './transporter-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TransporterTabsPage,
    children: [
      
      {
        path: 'tab1',
        children:[
          {
          path: '',
        loadChildren: () => import('../pages/schedule/schedule.module').then(m => m.SchedulePageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children:[
          {
          path: '',
          loadChildren: () => import('../pages/schedule/schedule.module').then(m => m.SchedulePageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children:[
          {
          path: '',
          loadChildren: () => import('../pages/schedule/schedule.module').then(m => m.SchedulePageModule)
          }
        ]
      },
      {
        path: 'tab4',
        children:[
          {
          path: '',
          loadChildren: () => import('../pages/schedule/schedule.module').then(m => m.SchedulePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/transporter-tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/transporter-tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransporterTabsPageRoutingModule {}
