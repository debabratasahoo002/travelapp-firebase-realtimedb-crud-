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

  private sub:Subscription;
  model = new Place("","");  

  constructor(private db:AngularFireDatabase , private router: Router) { }

  onSubmit(){
    console.log(this.model.name);
    this.model.imageUrl = "../../../assets/images/"+this.model.imageUrl+".jpg";
    this.db.list('place').push(this.model);
    this.router.navigate(['/home']);
  }

  ngOnInit() {
    this.sub = this.db.list('place').snapshotChanges().subscribe(res => {
      console.log(res);
    })
  }

  ngOnDestroy() {
    if(this.sub != null) {
      this.sub.unsubscribe();
    }
  }

}
