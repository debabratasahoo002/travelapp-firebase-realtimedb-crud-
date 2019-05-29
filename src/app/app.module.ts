import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardsComponent } from './components/cards/cards.component';
import { AddPlaceComponent } from './components/add-place/add-place.component';
import { HomeComponent } from './pages/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { UpdatePlaceComponent } from './components/update-place/update-place.component';
import { PlaceDetailComponent } from './components/place-detail/place-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardsComponent,
    AddPlaceComponent,
    HomeComponent,
    PageNotFoundComponent,
    UpdatePlaceComponent,
    PlaceDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
