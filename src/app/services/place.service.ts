import { Place } from './../models/place.model';
import { AngularFireDatabase } from '@angular/fire/database';
import { Subscription } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  sub: Subscription;
  place:any;
  itemRef = this.db.list('place');
  constructor(private db:AngularFireDatabase){}

  getPlaces(){
    this.db.list('place').snapshotChanges().subscribe(res => {
      console.log(res);
      this.place=res;
    })
    
  }
}
