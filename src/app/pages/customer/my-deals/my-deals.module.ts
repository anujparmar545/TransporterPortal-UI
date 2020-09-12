import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyDealsPageRoutingModule } from './my-deals-routing.module';

import { MyDealsPage } from './my-deals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyDealsPageRoutingModule
  ],
  declarations: [MyDealsPage]
})
export class MyDealsPageModule {}
