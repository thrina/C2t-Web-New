import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-table',
  template: '<router-outlet><app-spinner></app-spinner></router-outlet>'
})
export class BootstrapTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
