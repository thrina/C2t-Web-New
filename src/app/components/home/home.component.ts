import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from './home.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    myForm: FormGroup;
    loginForm: FormGroup;
    loginMsg: any;
    isValidUser: boolean = true;
    currentUser: any = {}


    constructor(private homeService: HomeService, private router: Router) {
        const firstName = new FormControl('', Validators.required);
        const lastName = new FormControl('', Validators.required);
        const mobile = new FormControl('', Validators.required);
        const password = new FormControl('', Validators.required);
        const role = new FormControl('', Validators.required);
        const email = new FormControl('', [Validators.required, Validators.email]);
        const rpassword = new FormControl('', [Validators.required]);

        this.myForm = new FormGroup({
            firstName: firstName,
            lastName: lastName,
            mobile: mobile,
            email: email,
            password: password,
            rpassword: rpassword,
            role: role
        });

        this.loginForm = new FormGroup({
            emailID: email,
            currtpassword: password,
        });
    }

    ngOnInit() {
    }

    onSignup() {
    }

    register() {
        let data = this.homeService.getRegistered(this.myForm.value);

    }

    login() {
        let userCredentials = { "email": this.loginForm.value.emailID, "password": this.loginForm.value.currtpassword };
        this.homeService.userLogin(userCredentials).subscribe(data => {
            if (data && data['successMessage'] == "success") {
                this.currentUser = data.rowData;
                localStorage.setItem('currentUser', this.currentUser);
                this.router.navigate(['/user/profile']);
            } else {
                this.isValidUser = false;
            }
        })

    }


}
