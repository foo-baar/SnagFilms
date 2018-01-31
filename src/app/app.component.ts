import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  
<router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'Snag Films';
}
