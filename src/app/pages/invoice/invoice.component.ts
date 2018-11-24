import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  template: '<router-outlet><app-spinner></app-spinner></router-outlet>'
})
export class InvoiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
