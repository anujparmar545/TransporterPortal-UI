import { Component, OnInit, ViewChild } from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './../../../services/api/api.service';
import { HelperService } from './../../../services/helper/helper.service';
import { Router, NavigationExtras } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoadingService } from 'src/app/services/loading-service/loading.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-transporter-registration',
  templateUrl: './transporter-registration.page.html',
  styleUrls: ['./transporter-registration.page.scss'],
})
export class TransporterRegistrationPage implements OnInit {

  
  private transporterForm : FormGroup;
  name:any
  
 constructor( private formBuilder: FormBuilder,
              private loadingService:LoadingService,
               private apiService:ApiService,
               private help:HelperService,
               private router:Router,
               private alertController:AlertController ) {}


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

  createTransporterForm() {
    this.transporterForm = this.formBuilder.group({
      name:             ['', [Validators.required, Validators.minLength(1), Validators.maxLength(25)]],
      email:            ['', [Validators.required]],
      username:         ['', [Validators.required, Validators.minLength(1), Validators.maxLength(25)]],
      password:         ['', [Validators.required, Validators.minLength(1), Validators.maxLength(25)]],
      confirmPassword:  ['', Validators.required],
      address:          ['', [Validators.required, Validators.minLength(1), Validators.maxLength(25)]],
      city:             ['', Validators.required],
      state:            ['', Validators.required],
      country:          ['', Validators.required],
      zipcode:          ['', [Validators.required, Validators.maxLength(7)]],
      gstReg:          ['', Validators.required],
      pancard:          ['', Validators.required]

    });


  }

  get f() { return this.transporterForm.controls; }

  ngOnInit() {
    this.createTransporterForm();
    
  }

  
   async onSubmit(){
     this.loadingService.wait();
    console.log('@@@@',this.transporterForm.value)

    const request={
      "name": this.transporterForm.get('name').value,
      "email" : this.transporterForm.get('email').value,
      "username" : this.transporterForm.get('username').value,
      "password"  : this.transporterForm.get('password').value,
      "address"  : this.transporterForm.get('address').value,
      "city"   : this.transporterForm.get('city').value,
      "state"  : this.transporterForm.get('state').value,
      "country"  : this.transporterForm.get('country').value,
      "zipcode"  : this.transporterForm.get('zipcode').value,
      "gstReg"  : this.transporterForm.get('gstReg').value,
      "pancard"  : this.transporterForm.get('pancard').value
    };
    

    const alert = await this.alertController.create({
      header: 'Transporter',
      message: 'Your Registration is under process...You will receive an email once your request is approved.',
      buttons: ['OK']
      });

    if(request.password==this.transporterForm.get('confirmPassword').value)
        this.apiService.saveTransporter(request).subscribe(res=>{
          alert.present();
        },err => {console.log(err)});

    this.router.navigate(['']); 
    
    this.loadingService.ready();
    this.transporterForm.reset();

  }


}
