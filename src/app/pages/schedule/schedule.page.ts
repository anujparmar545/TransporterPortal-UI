import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormsModule,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  cf:FormGroup
  
  constructor(private formBuilder: FormBuilder) { }
  

  ngOnInit() {
   
  }

}
