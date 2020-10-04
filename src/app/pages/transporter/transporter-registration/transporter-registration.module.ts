import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransporterRegistrationPageRoutingModule } from './transporter-registration-routing.module';

import { TransporterRegistrationPage } from './transporter-registration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TransporterRegistrationPageRoutingModule
  ],
  declarations: [TransporterRegistrationPage]
})
export class TransporterRegistrationPageModule {}
