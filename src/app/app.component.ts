import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
