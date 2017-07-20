import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  title = "Video List";
  todayDate = new Date()
  videolist = [
    {
      name: "item 1",
      slug: "item-1",
      embed: `6wD4V0rvlDI`,
    },
    {
      name: "item 2",
      slug: "item-2",
      embed: `6wD4V0rvlDI`,
    },
    {
      name: "item 3",
      slug: "item-3",
      embed: null,
    },
  ]

  constructor() {
  }


  ngOnInit() {
  }

  getEmbedUrl(item) {
    return ('https://www.youtube.com/embed/' + item.embed + '?list=PLEsfXFp6DpzQThMU768hTZInWUqfoyTEW')
  }

}
