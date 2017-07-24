import { Component, OnInit, OnDestroy } from '@angular/core';
import {Http} from "@angular/http";
import {VideoService} from "../videos/videos.service"
import {VideoItem} from "../videos/video"
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [VideoService]
})
export class HomeComponent implements OnInit, OnDestroy {

  private req:any;
  homeImageList: [VideoItem]  = [] as [VideoItem]
  constructor(private http:Http, private router:Router, private _video:VideoService ) { }

  ngOnInit() {
    this.req = this._video.featured().subscribe(data=>{
      console.log(data)
      this.homeImageList = data as [VideoItem]
    })

  }
  ngOnDestroy(){
  this.req.unsubscribe()
  }

  preventNormal(event: MouseEvent, image:any)
  {
    console.log(image)
    event.preventDefault()
    // alert("working...")

  }

}
