import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: ` <h1>{{title}}</h1><p>{{description}}</p>`,
  styleUrls: ['./app.component.css']

})
export class AppComponent {

  title = 'Hello again';
  description = " description";
}
//
// def home_index_view(request):
//   return render(request, 'template.html', {})
