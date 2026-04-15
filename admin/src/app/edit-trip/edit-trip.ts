import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-edit-trip',
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-trip.html',
  styleUrl: './edit-trip.css',
})
export class EditTrip implements OnInit {
  trip: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tripService: TripDataService
  ) {}

  ngOnInit(): void {
  const tripId = this.route.snapshot.paramMap.get('tripId');

  this.tripService.getTrips().subscribe((trips: any[]) => {
    console.log("Trips:", trips);
    console.log("Looking for ID:", tripId);

    this.trip = trips.find((t: any) => t._id === tripId);

    console.log("Found trip:", this.trip);
  });
}

  onSave(): void {
    this.tripService.updateTrip(this.trip).subscribe(() => {
      this.router.navigate(['']);
    });
  }
}