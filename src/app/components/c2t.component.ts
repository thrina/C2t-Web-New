import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ct',
  template: '<router-outlet><app-spinner></app-spinner></router-outlet>'
})
export class C2TComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
