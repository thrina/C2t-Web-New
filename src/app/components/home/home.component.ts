import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myForm: FormGroup;
  loginForm: FormGroup;

  constructor() {
    const firstName = new FormControl('', Validators.required);
    const lastName = new FormControl('', Validators.required);
    const mobile = new FormControl('', Validators.required);
    const password = new FormControl('', Validators.required);
    const gender = new FormControl('', Validators.required);
    const email = new FormControl('', [Validators.required, Validators.email]);
    const rpassword = new FormControl('', [Validators.required]);

    this.myForm = new FormGroup({
      firstName: firstName,
      lastName: lastName,
      mobile:mobile,
      email: email,
      password: password,
      rpassword: rpassword,
      gender: gender
    });

    this.loginForm = new FormGroup({
      emailID: email,
      currtpassword: password,
    });
   }

  ngOnInit() {
  }

  onSignup(){
    console.log("sign up");
    
  }

  register(){
    
  }

  onSubmit(){
    
  }
}
