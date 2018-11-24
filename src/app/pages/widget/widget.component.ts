import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget',
  template: '<router-outlet><app-spinner></app-spinner></router-outlet>'
})
export class WidgetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
