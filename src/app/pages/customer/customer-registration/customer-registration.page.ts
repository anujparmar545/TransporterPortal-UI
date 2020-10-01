import { Component, OnInit, ViewChild } from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './../../../services/api/api.service';
import { HelperService } from './../../../services/helper/helper.service';
import { Router, NavigationExtras } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoadingService } from 'src/app/services/loading-service/loading.service';
//import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.page.html',
  styleUrls: ['./customer-registration.page.scss'],
})
export class CustomerRegistrationPage implements OnInit {

  private customerForm : FormGroup;
  name:any
  
 constructor( private formBuilder: FormBuilder,
              private loadingService:LoadingService,
               private apiService:ApiService,
               private help:HelperService,
               private router:Router ) {}

// formErrors = {
//   'name':  '',
//   'email': '',
//   'username':  '',
//   'password': '',
//   'confirmPassword':  '',
//   'address':  '',
//   'city':   '',
//   'state':  '',
//   'country': '',
//   'zipcode': ''
// };

validationMessages = {
  'name': {
    'required':      ' Name is required.',
    'minLength':     ' Name must be at least 2 characters long.',
    'maxLength':     ' Name cannot be more than 25 characters long.'
  },
  'email': {
    'required':      'Email is required.',
    'email':         'Email not in valid format.'
  },
  'username': {
    'required':      'username is required.',
    'minLength':     'username must be at least 2 characters long.',
    'maxLength':     'username cannot be more than 25 characters long.'
  },
  'password': {
    'required':      'password is required.',
    'minLength':     'password must be at least 2 characters long.',
    'maxLength':     'password cannot be more than 25 characters long.'
  },
  'confirmPassword': {
    'required':      'Password should be confirmed.',
    'mustMatch':     'Password must match'
  },
  'city': {
    'required':      'City is required.',
  },
  'address': {
    'required':      'address is required.',
    'minLength':     'address must be at least 2 characters long.',
    'maxLength':     'address cannot be more than 25 characters long.'
  },
  'state': {
    'required':      'State is required.',
  },
  'country': {
    'required':      'country is required.',
  },
  'zipcode': {
    'required':      'zipcode is required.',
    'maxLength':     'zipcode cannot be more than 7 characters long.'
  }
  
};

  createCustomerForm() {
    this.customerForm = this.formBuilder.group({
      name:             ['', [Validators.required, Validators.minLength(1), Validators.maxLength(25)]],
      email:            ['', [Validators.required]],
      username:         ['', [Validators.required, Validators.minLength(1), Validators.maxLength(25)]],
      password:         ['', [Validators.required, Validators.minLength(1), Validators.maxLength(25)]],
      confirmPassword:  ['', Validators.required],
      address:          ['', [Validators.required, Validators.minLength(1), Validators.maxLength(25)]],
      city:             ['', Validators.required],
      state:            ['', Validators.required],
      country:          ['', Validators.required],
      zipcode:          ['', [Validators.required, Validators.maxLength(7)]]

    });


  }

  get f() { return this.customerForm.controls; }

  ngOnInit() {
    this.createCustomerForm();
    
  }

  
   async onSubmit(){
     this.loadingService.wait();
    console.log('@@@@',this.customerForm.value)

    const request={
      "name": this.customerForm.get('name').value,
      "email" : this.customerForm.get('email').value,
      "username" : this.customerForm.get('username').value,
      "password"  : this.customerForm.get('password').value,
      "address"  : this.customerForm.get('address').value,
      "city"   : this.customerForm.get('city').value,
      "state"  : this.customerForm.get('state').value,
      "country"  : this.customerForm.get('country').value,
      "zipcode"  : this.customerForm.get('zipcode').value
    };
    
    if(request.password==this.customerForm.get('confirmPassword').value)
    this.apiService.saveCustomer(request);
    //this.router.navigate(['transporter-tabs']); 
    
    
        
    this.loadingService.ready();
    //this.customerForm.reset();

  }


}
