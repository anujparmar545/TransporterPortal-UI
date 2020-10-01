import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerRegistrationPage } from './customer-registration.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerRegistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRegistrationPageRoutingModule {}
