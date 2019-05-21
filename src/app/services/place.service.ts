import { Place } from './../models/place.model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Subscription, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class PlaceService {
  
  items: Observable<any[]>;
  itemsRef: AngularFireList<any>;
  
  constructor(private db:AngularFireDatabase , private router: Router){
    this.itemsRef = db.list('place');
    this.items = this.itemsRef.valueChanges();
    //initailizing snapshot objects for extracting keys
    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  addPlaces(model:Place){
    model.imageUrl = "../../../assets/images/"+model.imageUrl+".jpg";
    this.db.list('place').push(model);
    this.router.navigate(['/home']);
  }

}
