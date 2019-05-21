import { Place } from './../../models/place.model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { PlaceService } from './../../services/place.service';

import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit, OnDestroy {

  items = this.placeService.items;
  
  arr:object[];
  constructor( private placeService:PlaceService ) {
  }
  removePlace(key){
    this.placeService.itemsRef.remove(key.key); 
  }
  updatePlace(key, place: Place) {
    this.placeService.itemsRef.update(key.key, place);
  }

  ngOnInit() {
  }
  ngOnDestroy(){
    
  }

}
