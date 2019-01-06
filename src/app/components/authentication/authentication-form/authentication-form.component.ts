import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../../home/home.service';
import { Router } from '@angular/router';
import { CustomNotifyService } from '../../shared/custom-notify.service';
import { CustomValidators } from 'ng2-validation';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
    selector: 'app-authentication-form',
    templateUrl: './authentication-form.component.html',
    styleUrls: ['./authentication-form.component.css']
})
export class AuthenticationFormComponent implements OnInit {
    pnotify: any;
    myForm: FormGroup;
    loginForm: FormGroup;
    currentUser: any = {}
    isSignUp: boolean;
    isSignIn: boolean;
    title: string;

    constructor(private homeService: HomeService, private router: Router, private notify: CustomNotifyService, public authForm: BsModalRef) {
        const firstName = new FormControl('', Validators.required);
        const lastName = new FormControl('', Validators.required);
        const mobile = new FormControl('', Validators.required);
        const password = new FormControl('', Validators.required);
        const role = new FormControl('', Validators.required);
        const email = new FormControl('', [Validators.required, Validators.email]);
        const rpassword = new FormControl('', [Validators.required, CustomValidators.equalTo(password)]);

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
        this.pnotify = this.notify.getPNotify();
    }

    public showConfirmationModal(title: string): void {
        this.title = title;
        if (title == "Sign Up") {
            this.isSignUp = true;
        }
        if (title == "Sign In") {
            this.isSignIn = true;
        }
    }

    register() {
        this.homeService.getRegistered(this.myForm.value).subscribe(data => {
            if (data.status == "success") {
                this.authForm.hide();
                this.myForm.reset();
                this.pnotify.success({ text: 'Registered successfully', delay: 2000 });
            } else {
                if (data.status !== "Email alreay exist.")
                    this.pnotify.error("Registration failure");
                else
                    this.pnotify.error("Email alreay exist.");
            }
        })
    }

    login() {
        let userCredentials = { "email": this.loginForm.value.emailID, "password": this.loginForm.value.currtpassword };
        this.homeService.userLogin(userCredentials).subscribe(data => {
            if (data && data.status == "success") {
                // this.currentUser = JSON.parse(JSON.stringify(data.rows));
                this.authForm.hide();
                this.pnotify.success({ text: 'Login successfully', delay: 2000 });
                // localStorage.setItem('currentUser', this.currentUser);
                localStorage.setItem('currentUser', JSON.stringify(data.rows));
                if (this.currentUser.role != "ADMIN") {
                    this.router.navigate(['/user/profile']);
                } else {
                    this.router.navigate(['/c2t/dashboard'])
                }
            } else {
                this.pnotify.error({ text: data.message, delay: 2000 });
            }
        },
            error => {
                this.pnotify.error({ text: "Technical Error", delay: 2000 });
            })
    }

}
