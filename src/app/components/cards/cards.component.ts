import { AngularFireDatabase } from '@angular/fire/database';
import { PlaceService } from './../../services/place.service';

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit {
  items: Observable<any[]>;
  constructor( db: AngularFireDatabase ) { 
    this.items = db.list('place').valueChanges();
  }
  removePlace(){
    this.items.subscribe(res => {
      console.log(res);
    });
  }

  ngOnInit() {
  }

}
