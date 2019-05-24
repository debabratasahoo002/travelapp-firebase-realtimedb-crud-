import { PlaceService } from './../../services/place.service';

import { Component, OnInit, TemplateRef, OnDestroy } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit, OnDestroy {
  modalRef: BsModalRef;
  items = this.placeService.items;
  key;
  constructor( private placeService:PlaceService ,private router:Router, private modalService: BsModalService) {
  }
  removePlace(key){
    this.placeService.itemsRef.remove(key.key); 
  }
  updatePlace(key){
    this.router.navigate(['/update']);
    this.placeService.getKey(key.key)
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  

  ngOnInit() {
  }
  ngOnDestroy(){
    
  }

}
