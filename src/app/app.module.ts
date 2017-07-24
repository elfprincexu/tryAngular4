import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms"

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { AppRoutingModule} from "./app.routing";
import { SafePipe } from './utilitiy/safe.pipe'
import { HttpModule} from "@angular/http"


// 3rd party import
import {BsDropdownModule} from "ngx-bootstrap";
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SearchComponent } from './search/search.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoDetailComponent,
    HomeComponent,
    SafePipe,
    SearchComponent,
    SearchDetailComponent,
  ],
  imports: [
    // ngx-bootstrap
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
