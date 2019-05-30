import { PlaceService } from './../../services/place.service';
import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  modalRef = this.placeService.modalRef;
  constructor(private placeService:PlaceService) { }

  addModal(template: TemplateRef<any>) {
    this.modalRef =this.placeService.modalService.show(template);
  }
  closeModal($event){
    if($event!=true){
      this.modalRef.hide();
    }
  }
  ngOnInit() {
  }

}
