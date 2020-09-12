import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrowseDealsPageRoutingModule } from './browse-deals-routing.module';

import { BrowseDealsPage } from './browse-deals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowseDealsPageRoutingModule
  ],
  declarations: [BrowseDealsPage]
})
export class BrowseDealsPageModule {}
