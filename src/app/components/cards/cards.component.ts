import { PlaceService } from './../../services/place.service';

import { Component, OnInit, TemplateRef, OnDestroy, Output } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit, OnDestroy {
  
  modalRef = this.placeService.modalRef;
  items = this.placeService.items;
  key;
  constructor( private placeService:PlaceService ,private router:Router) {
  }
  removePlace(key){
    this.placeService.itemsRef.remove(key.key); 
  }
  updatePlace(key){
    this.placeService.setKey(key.key);
  }

  updateModal(key,template: TemplateRef<any>){
    this.placeService.setModel(key.name,key.imageUrl,key.description);
    this.placeService.setKey(key.key);
    this.modalRef = this.placeService.modalService.show(template);
  }
  closeModal($event){
    if($event!=true){
      this.modalRef.hide();
    }
  }

  
 
  ngOnInit() {
  }
  ngOnDestroy(){
    
  }

}
