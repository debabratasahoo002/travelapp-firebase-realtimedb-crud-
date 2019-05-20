import { CardsComponent } from './../components/cards/cards.component';
import { HeaderComponent } from './../components/header/header.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-header>header component..</app-header>
    <div class="container">
      <app-cards>cards component..</app-cards>
    </div>
  `
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
