import { CardsComponent } from './../components/cards/cards.component';
import { Place } from './../models/place.model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Subscription, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Injectable({
  providedIn: 'root'
})

export class PlaceService {
  model= new Place("","","");
  items: Observable<any[]>;
  itemsRef: AngularFireList<any>;
  key;
  modalRef: BsModalRef;
  constructor(private db:AngularFireDatabase , private router: Router, public modalService: BsModalService){
    this.itemsRef = db.list('place');
    //this.items = this.itemsRef.valueChanges();
    //initailizing snapshot objects for extracting keys
    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
    console.log(this.items);
  }

  addPlaces(model:Place){
    model.imageUrl = "../../../assets/images/"+model.imageUrl+".jpg";
    this.db.list('place').push(model);
  }
  getPlace(key){
    return this.db.list('/place', ref => ref.equalTo(key));
  }
  
  update(key,model:Place){
    this.itemsRef.update(key, model);
  }
  setKey(key){
    this.key = key;
  }
  setModel(name,imgurl,desc){
    this.model.name=name;
    this.model.imageUrl=imgurl; 
    this.model.description=desc;   
  }

  
  getPlace2(key){
    return this.db.list("/place/"+key);
  }

}
