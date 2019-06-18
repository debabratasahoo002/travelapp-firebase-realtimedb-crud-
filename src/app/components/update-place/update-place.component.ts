import { PlaceService } from './../../services/place.service';
import { Place } from './../../models/place.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-place',
  templateUrl: './update-place.component.html',
  styleUrls: ['./update-place.component.sass']
})
export class UpdatePlaceComponent implements OnInit {
  @Output() modalCloseEvent = new EventEmitter();
  items = this.placeService.items;
  key = this.placeService.key;
  isModalClose=false;
  model= this.placeService.model;
  constructor(private placeService: PlaceService, private router:Router) { }
  ngOnInit() {
    this.model.imageUrl = this.model.imageUrl.slice(23, -4);
  }

  onSubmit(){
    this.model.imageUrl="../../../assets/images/"+this.model.imageUrl+".jpg";
    this.placeService.update(this.key,this.model);
    this.modalCloseEvent.emit(this.isModalClose);
  }
  
  

}
