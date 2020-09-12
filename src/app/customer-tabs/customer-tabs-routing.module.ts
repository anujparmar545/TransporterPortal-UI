import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerTabsPage } from './customer-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerTabsPage,
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
        loadChildren: () => import('../pages/customer/browse-deals/browse-deals.module').then(m => m.BrowseDealsPageModule)
          }
        ]
      },
      // {
      //   path: 'tab3',
      //   children:[
      //     {
      //     path: '',
      //   loadChildren: () => import('../pages/map/map.module').then(m => m.MapPageModule)
      //     }
      //   ]
      // },
      {
        path: 'tab4',
        children:[
          {
          path: '',
        loadChildren: () => import('../pages/customer/customer-profile/customer-profile.module').then(m => m.CustomerProfilePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/customer-tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/customer-tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerTabsPageRoutingModule {}
