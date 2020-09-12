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
  }

 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
