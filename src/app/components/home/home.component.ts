import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { AuthenticationFormComponent } from '../authentication/authentication-form/authentication-form.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
    
export class HomeComponent implements OnInit {
    authForm: BsModalRef;

    constructor(private modalService: BsModalService) {    }

    ngOnInit() {
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
}
