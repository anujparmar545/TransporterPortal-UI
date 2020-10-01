import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerRegistrationPageRoutingModule } from './customer-registration-routing.module';

import { CustomerRegistrationPage } from './customer-registration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CustomerRegistrationPageRoutingModule
  ],
  declarations: [CustomerRegistrationPage]
})
export class CustomerRegistrationPageModule {}
