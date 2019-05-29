import { PlaceService } from './../../services/place.service';
import { Place } from './../../models/place.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.sass']
})
export class AddPlaceComponent implements OnInit, OnDestroy {

  model = new Place("",""); 
  modalRef = this.placeService.modalRef; 

  constructor( private placeService:PlaceService ) { }

  onSubmit(){
    this.placeService.addPlaces(this.model);
    this.modalRef.hide();
  }

  ngOnInit() {

  }

  ngOnDestroy() {
   
  }

}
