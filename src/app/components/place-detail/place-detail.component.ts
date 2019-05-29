import { PlaceService } from './../../services/place.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.sass']
})
export class PlaceDetailComponent implements OnInit {
  name: String;   
  constructor(private route: ActivatedRoute, private router: Router, private placeService: PlaceService) { }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');
  }

}
