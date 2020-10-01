import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
   {
    path: '',
    component: LoginComponent
  },
  {
    path: 'transporter-tabs',
    loadChildren: () => import('./transporter-tabs/transporter-tabs.module').then( m => m.TransporterTabsPageModule)
  },
  {
    path: 'customer-tabs',
    loadChildren: () => import('./customer-tabs/customer-tabs.module').then( m => m.CustomerTabsPageModule)
  },
  {
    path: 'browse-deals',
    loadChildren: () => import('./pages/customer/browse-deals/browse-deals.module').then( m => m.BrowseDealsPageModule)
  },
  {
    path: 'my-deals',
    loadChildren: () => import('./pages/customer/my-deals/my-deals.module').then( m => m.MyDealsPageModule)
  },
  {
    path: 'customer-profile',
    loadChildren: () => import('./pages/customer/customer-profile/customer-profile.module').then( m => m.CustomerProfilePageModule)
  },
  // {
  //   path: 'customer-registration',
  //   component: CustomerRegistrationComponent
  // },
  {
    path: 'customer-registration',
    loadChildren: () => import('./pages/customer/customer-registration/customer-registration.module').then( m => m.CustomerRegistrationPageModule)
  },



 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
