import { Place } from './../../models/place.model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { PlaceService } from './../../services/place.service';

import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit, OnDestroy {

  items = this.placeService.items;
  key;
  constructor( private placeService:PlaceService ,private router:Router) {
  }
  removePlace(key){
    this.placeService.itemsRef.remove(key.key); 
  }
  updatePlace(key){
    this.router.navigate(['/update']);
    this.placeService.getKey(key.key)
  }
  

  ngOnInit() {
  }
  ngOnDestroy(){
    
  }

}
