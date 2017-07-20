import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeImageList=[
    {
      image: "assets/images/nature/4.jpg",
      title: "image4",
      content:"Nulla vitae elit libero, a pharetra augue mollis interdum.",
      link: "/videos/video4",
    },
    {
      image: "assets/images/nature/5.jpg",
      title: "image5",
      content:"Nulla vitae elit libero, a pharetra augue mollis interdum.",
      link: "/videos/video5",
    },
    {
      image: "assets/images/nature/6.jpg",
      title: "image6",
      content:"Nulla vitae elit libero, a pharetra augue mollis interdum.",
      link: "/videos/video6",
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  preventNormal(event: MouseEvent, image:any)
  {
    console.log(image)
    event.preventDefault()
    // alert("working...")
  }

}
