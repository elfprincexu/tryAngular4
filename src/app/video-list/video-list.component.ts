import {Component, OnInit, OnDestroy} from '@angular/core';
import {VideoService} from "../videos/videos.service"
import {VideoItem} from "../videos/video"

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  providers: [VideoService]
})
export class VideoListComponent implements OnInit , OnDestroy{
  title = "Video List";
  todayDate;
  private req:any;
  videoList:[VideoItem];

  constructor(  private _video:VideoService) {
  }


  ngOnInit() {
    this.todayDate = new Date()
    this.req = this._video.list().subscribe(data =>{
      this.videoList = data as [VideoItem]
    }) //  GET METHOD
  }

  ngOnDestroy(){
    this.req.unsubscribe()
  }

  getEmbedUrl(item) {
    return ('https://www.youtube.com/embed/' + item.embed + '?list=PLEsfXFp6DpzQThMU768hTZInWUqfoyTEW')
  }

}
