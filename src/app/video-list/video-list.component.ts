import {Component, OnInit, OnDestroy} from '@angular/core';
import {Http} from "@angular/http"
@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit , OnDestroy{
  title = "Video List";
  todayDate;
  private req:any;
  videolist:[any];

  constructor( private http:Http) {
  }


  ngOnInit() {
    this.todayDate = new Date()
    this.req = this.http.get('assets/json/videos.json') .subscribe(data =>{
      console.log(data.json())
      this.videolist = data.json() as [any]
    }) //  GET METHOD
  }

  ngOnDestroy(){
    this.req.unsubscribe()
  }

  getEmbedUrl(item) {
    return ('https://www.youtube.com/embed/' + item.embed + '?list=PLEsfXFp6DpzQThMU768hTZInWUqfoyTEW')
  }

}
