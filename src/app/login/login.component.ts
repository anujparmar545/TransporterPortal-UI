import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { 
    this.router=router;
  }

  ngOnInit() {
      }

      doLogin(name:string){

        
        if(name=='customer')
            this.router.navigate(['customer-tabs']);
        if(name=='transporter')
            this.router.navigate(['transporter-tabs']);
      }
}
