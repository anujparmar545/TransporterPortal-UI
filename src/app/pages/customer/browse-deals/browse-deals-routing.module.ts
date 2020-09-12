import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowseDealsPage } from './browse-deals.page';

const routes: Routes = [
  {
    path: '',
    component: BrowseDealsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrowseDealsPageRoutingModule {}
