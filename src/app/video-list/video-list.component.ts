import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  title = "Video List";
  videolist = [
    {
      name: "item 1",
      slug: "item-1",
    },
    {
      name: "item 2",
      slug: "item-2",
    },
    {
      name: "item 3",
      slug: "item-3",
    },
  ]

  constructor() { }


  ngOnInit() {
  }

}
