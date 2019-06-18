import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `  
  <app-header>header component..</app-header>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'travel-app3';
}
