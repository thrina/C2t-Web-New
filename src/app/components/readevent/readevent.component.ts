import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { homedataService } from '../home/homedata.service';

@Component({
  selector: 'app-readevent',
  templateUrl: './readevent.component.html',
  styleUrls: ['./readevent.component.css']
})
export class ReadeventComponent implements OnInit {
  val2: string;
  eventItem: any = [];  
  eventFeedImg: string;
  constructor(
    private _route: ActivatedRoute,
    private homeComponent : HomeComponent,
    private _homedataService : homedataService,
  ) { }

  get newsPost(): string{
    return this._homedataService.eventPost;
}
set newsPost(value: string){
    this._homedataService.eventPost = value;
}
  ngOnInit() {
    console.log(this._homedataService.eventPost);
    this.eventItem=this._homedataService.eventPost;
    this.eventFeedImg="http://localhost:3000/"+this.eventItem['imgUrl'].replace('public','');
  }

}