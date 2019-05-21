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
  items: Observable<any[]>;
  itemsRef: AngularFireList<any>;
  
  arr:object[];
  constructor( db: AngularFireDatabase ) {     
    this.itemsRef = db.list('place');
    this.items = this.itemsRef.valueChanges();
    //initailizing snapshot objects for extracting keys
    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }
 
  removePlace(key){
    this.itemsRef.remove(key.key);
    
  }

  ngOnInit() {
  }
  ngOnDestroy(){
    
  }

}
