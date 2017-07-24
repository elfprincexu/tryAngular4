import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchLocation="NewPort Beach";
  searchQuery = "search";
  constructor(private route:Router) { }

  ngOnInit() {
  }

  submitSearch(event, formData)
  {
    let query = formData.value['q'];
    if (query)
    {
      this.route.navigate(['/search', {q: query}])
    }
  }

  searchQueryChange(){
    this.searchLocation="california"
  }
}
