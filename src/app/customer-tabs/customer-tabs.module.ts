import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerTabsPageRoutingModule } from './customer-tabs-routing.module';

import { CustomerTabsPage } from './customer-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerTabsPageRoutingModule
  ],
  declarations: [CustomerTabsPage]
})
export class CustomerTabsPageModule {}
