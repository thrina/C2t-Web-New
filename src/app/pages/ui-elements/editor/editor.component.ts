import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  template: '<router-outlet><app-spinner></app-spinner></router-outlet>'
})
export class EditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
