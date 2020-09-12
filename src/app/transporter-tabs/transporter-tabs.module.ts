import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransporterTabsPageRoutingModule } from './transporter-tabs-routing.module';

import { TransporterTabsPage } from './transporter-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransporterTabsPageRoutingModule
  ],
  declarations: [TransporterTabsPage]
})
export class TransporterTabsPageModule {}
