import { Component, OnInit, OnDestroy } from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private req:any;
  homeImageList=[

  ]

  constructor(private http:Http,) { }

  ngOnInit() {
    this.req = this.http.get('assets/json/videos.json').subscribe(data=>{
      console.log(data.json())
      data.json().filter(item=>{
        if (item.featured){
          this.homeImageList.push(item)
        }
      })
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
