import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TripCard } from '../trip-card/trip-card';
import { TripDataService } from '../services/trip-data';

@Component({
  selector: 'app-trip-listing',
  imports: [CommonModule, RouterLink, TripCard],
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css'
})
export class TripListing implements OnInit {

  trips: any[] = [];

  constructor(private tripDataService: TripDataService) {}

  ngOnInit(): void {
    this.tripDataService.getTrips().subscribe({
      next: (trips) => {
        this.trips = trips;
      },
      error: (err) => {
        console.error('Error loading trips', err);
      }
    });
  }
}