import { PlaceService } from './../../services/place.service';
import { Place } from './../../models/place.model';
import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.sass']
})
export class AddPlaceComponent implements OnInit, OnDestroy {

  @Output() modalCloseEvent = new EventEmitter();
  model = new Place("",""); 
  isModalClose=false;
  modalRef = this.placeService.modalRef; 

  constructor( private placeService:PlaceService ) { }

  onSubmit(){
    this.placeService.addPlaces(this.model);
    this.modalCloseEvent.emit(this.isModalClose);
  }

  ngOnInit() {

  }

  ngOnDestroy() {
   
  }

}
