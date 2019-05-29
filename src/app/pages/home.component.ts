import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="home">
      <app-header>header component..</app-header>
      <div class="container">
        <app-cards>cards component..</app-cards>
      </div>
    </div>
  `,
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
