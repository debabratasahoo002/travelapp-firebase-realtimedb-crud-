import { Place } from './../../models/place.model';
import { PlaceService } from './../../services/place.service';
import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';
import { templateJitUrl } from '@angular/compiler';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.sass']
})
export class PlaceDetailComponent implements OnInit{
  model= new Place("","","");
  id: String;
  temp = [];
  editorForm: FormGroup;
  
  @ViewChild("editorContent", {read: ElementRef})
  editorContent: ElementRef;
  @ViewChild("desc", {read: ElementRef})
  desc: ElementRef;

  constructor(private route: ActivatedRoute, private router: Router, private placeService: PlaceService) { }
  
  
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('name');
    this.placeService.getPlace2(this.id).snapshotChanges().subscribe(res => {
      res.forEach(e => {
        this.temp.push(e.payload.toJSON().toString()) 
      });
    });
    this.editorForm = new FormGroup({
      'editor': new FormControl(null)
    });

    //need async : may be promise 
    //condition until temp[0] is not ""
    


    this.desc.nativeElement.innerHTML=this.temp[0];
  }
  onClick(){
    this.desc.nativeElement.innerHTML=this.temp[0];
  }
  onSubmit(){
    this.editorContent.nativeElement.innerHTML = this.editorForm.get('editor').value;
    this.updatedetails();
  }
  updatedetails(){
    this.model.name = this.temp[2];
    this.model.imageUrl=this.temp[1];
    this.model.description = this.editorForm.get('editor').value;
    this.placeService.update(this.id,this.model);
  }
}
