import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CustomNotifyService } from '../shared/custom-notify.service';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { AuthenticationFormComponent } from '../authentication/authentication-form/authentication-form.component';
import { stringify } from 'querystring';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
    
export class HomeComponent implements OnInit {
    authForm: BsModalRef;
    newsList: any = [];
    eventList: any = [];
    rowsBasic: any = [];
    searchResultsArr: any = [];
    pnotify: any;
    myForm: FormGroup;
    loginForm: FormGroup;
    filterQuery = '';
    currentUser: any = {};
    isSignIn: boolean;
    homePage: boolean;

    page= {"totalRecords":0,"page":1,"limit":10}

    constructor(private modalService: BsModalService, private router: Router, private homeService :HomeService, private notify: CustomNotifyService) {  
        const password = new FormControl('', Validators.required);
        const email = new FormControl('', [Validators.required, Validators.email]);
        this.loginForm = new FormGroup({
            emailID: email,
            currtpassword: password,
        });
    }
    ngOnInit() {
        this.getLatestNews();
        this.getLatestEvents();
        this.pnotify = this.notify.getPNotify();
        this.homePage=true;
        
    }
    getLatestNews() {
        this.homeService.getNews().subscribe(data => {
            if (data.status == "success") {
            this.newsList = data.rows;
            }
        })
    }

    getLatestEvents() {
        this.homeService.getEvents().subscribe(data => {
            if (data.status == "success") {
            this.eventList = data.rows;
            }
        })
    }

    openSignUpModal() {
        let config = { animated: true, keyboard: true, backdrop: true, ignoreBackdropClick: true}
        this.authForm = this.modalService.show(AuthenticationFormComponent, config);
        (<AuthenticationFormComponent>this.authForm.content).showConfirmationModal('Sign Up');
    }

    openSignInModal() {
        let config = { animated: true, keyboard: true, backdrop: true, ignoreBackdropClick: true}
        this.authForm = this.modalService.show(AuthenticationFormComponent, config);
        (<AuthenticationFormComponent>this.authForm.content).showConfirmationModal('Sign In');
    }

    login() {
        let userCredentials = { "email": this.loginForm.value.emailID, "password": this.loginForm.value.currtpassword };
        this.homeService.userLogin(userCredentials).subscribe(data => {
            if (data && data.status == "success") {
                this.currentUser = JSON.parse(JSON.stringify(data.rows));
                this.pnotify.success({ text: 'Login successfully', delay: 2000 });
                localStorage.setItem('currentUser', JSON.stringify(data.rows));
                console.log(this.currentUser.role);
                if (this.currentUser.role != "ADMIN") {
                    this.router.navigate(['/user/profile']);
                } else {
                    this.router.navigate(['/c2t/dashboard']);
                }
            } else {
                this.pnotify.error({ text: data.message, delay: 2000 });
            }
        },
        error => {
            this.pnotify.error({ text: "Technical Error", delay: 2000 });
        })
    }
    getSearch(params) {
        this.homeService.getSearch(params).subscribe(data => {
          if (data.status == "success") {
            this.searchResultsArr = data.rows;
            this.page.totalRecords= data.totalRecords
          }
        })
    }
    search() {
        this.homePage=false;
        let sarch = { "searchText": this.filterQuery, "page": 1, "limit": 10 };
        this.getSearch(sarch);
    }
    switchPage(){
        this.homePage=true;
    }
    readNews(){
        this.router.navigate(['/readnews']);
    }
    
}
