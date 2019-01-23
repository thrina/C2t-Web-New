import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { homedataService } from '../home/homedata.service';

@Component({
  selector: 'app-readnews',
  templateUrl: './readnews.component.html',
  styleUrls: ['./readnews.component.css']
})
export class ReadnewsComponent implements OnInit {
  val2: string;
  newsItem: any = [];
  newsFeedImg: string;
  constructor( 
    private _route: ActivatedRoute,
    private homeComponent : HomeComponent,
    private _homedataService : homedataService,
    ) { }
  
  get newsPost(): string{
      return this._homedataService.newsPost;
  }
  set newsPost(value: string){
      this._homedataService.newsPost = value;
  }
  ngOnInit() {
    console.log(this._homedataService.newsPost);
    this.newsItem=this._homedataService.newsPost;
    this.newsFeedImg="http://localhost:3000/"+this.newsItem['imgUrl'].replace('public','');
  }

}
