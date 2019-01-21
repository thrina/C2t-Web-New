import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-readnews',
  templateUrl: './readnews.component.html',
  styleUrls: ['./readnews.component.css']
})
export class ReadnewsComponent implements OnInit {
  val2: string;
  

  constructor( 
    private _route: ActivatedRoute,
    private homeComponent : HomeComponent,
    ) { }
 
  ngOnInit() {
    // this.val2 = this.homeComponent.getval();
    // console.log(this.val2);
  }

}
