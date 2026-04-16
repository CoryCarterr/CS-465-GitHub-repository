import { Routes } from '@angular/router';
import { Login } from './login/login';
import { TripListing } from './trip-listing/trip-listing';
import { AddTrip } from './add-trip/add-trip';
import { EditTrip } from './edit-trip/edit-trip';

export const routes: Routes = [
  { path: '', component: TripListing },
  { path: 'login', component: Login },
  { path: 'add-trip', component: AddTrip },
  { path: 'edit-trip/:tripId', component: EditTrip }
];