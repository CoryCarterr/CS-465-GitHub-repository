import { Routes } from '@angular/router';
import { Login } from './login/login';
import { TripListing } from './trip-listing/trip-listing';

export const routes: Routes = [
  { path: '', component: TripListing }, // default route
  { path: 'login', component: Login }
];