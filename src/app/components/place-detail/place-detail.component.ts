import { Place } from './../../models/place.model';
import { PlaceService } from './../../services/place.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.sass']
})
export class PlaceDetailComponent implements OnInit, AfterViewInit {
  model= new Place("","","");
  id: String;
  temp = [];
  constructor(private route: ActivatedRoute, private router: Router, private placeService: PlaceService) { }
  //this.model=this.placeService.getPlace(this.id);
  
  ngOnInit() {
    // this.id = this.route.snapshot.paramMap.get('name');
    // this.placeService.getPlace2(this.id).snapshotChanges().subscribe(res => {
    //   res.forEach(e => {
    //     console.log(e.payload.toJSON().toString(), e.key); 
    //   });
    // });
    this.id = this.route.snapshot.paramMap.get('name');
    this.placeService.getPlace2(this.id).snapshotChanges().subscribe(res => {
      res.forEach(e => {
        this.temp.push(e.payload.toJSON().toString()) 
      });
    });
  }
  ngAfterViewInit(){
    console.log(this.temp);
  }

  showTemp(){
    console.log(this.temp);
  }
  
}
