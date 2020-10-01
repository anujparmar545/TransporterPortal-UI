import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import {ApiService} from '../services/api/api.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  registerCredentials:any;
  username:any;
  password:any;
  constructor(private router:Router,
              private apiService:ApiService) { 
    this.router=router;
  }

  ngOnInit() {
    this.registerCredentials={
        username:'',
        password:''
    }
      }

      login(){
        console.log(this.registerCredentials.username,'\t',this.registerCredentials.password);
        if(this.registerCredentials.username=='c' && this.registerCredentials.password=='c'){
          this.router.navigate(['customer-tabs']);  }
        if(this.registerCredentials.username=='t' && this.registerCredentials.password=='t'){
          this.router.navigate(['transporter-tabs']); }
        else
          this.router.navigate(['transporter-tabs']);
        
        this.apiService.loginCustomer().subscribe(res=>{
          if(res){console.log('######',JSON.stringify(res))}
        },
        err => {console.log(err)});
      }

      doLogin(name:string){

        
        if(name=='customer')
            this.router.navigate(['customer-registration']);
            //this.router.navigate(['customer-tabs']);  
        if(name=='transporter'){
          this.apiService.getCity().subscribe(res=>{
            if(res){console.log('######',JSON.stringify(res))}
          },
          err => {console.log(err)});
          //this.router.navigate(['transporter-tabs']);
        }
      }
}
