import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransporterRegistrationPage } from './transporter-registration.page';

const routes: Routes = [
  {
    path: '',
    component: TransporterRegistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransporterRegistrationPageRoutingModule {}
