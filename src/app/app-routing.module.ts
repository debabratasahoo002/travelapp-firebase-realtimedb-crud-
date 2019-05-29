import { PlaceDetailComponent } from './components/place-detail/place-detail.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home.component';
import { AddPlaceComponent } from './components/add-place/add-place.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path:'add', component: AddPlaceComponent },
  { path:'home', component: HomeComponent},
  { path:'place/:name', component: PlaceDetailComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }