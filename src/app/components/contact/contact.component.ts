import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AuthenticationFormComponent } from '../authentication/authentication-form/authentication-form.component';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
 selector: 'app-contact',
 templateUrl: './contact.component.html',
 styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
   authForm: BsModalRef;

 constructor(private modalService: BsModalService,) { }

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