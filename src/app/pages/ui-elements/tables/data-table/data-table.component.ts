import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  template: '<router-outlet><app-spinner></app-spinner></router-outlet>'
})
export class DataTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
