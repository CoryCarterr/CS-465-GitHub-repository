import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  private apiBaseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  public getTrips(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiBaseUrl}/trips`);
  }

  public addTrip(trip: any): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/trips`, trip);
  }

  public updateTrip(trip: any): Observable<any> {
    return this.http.put(
      `${this.apiBaseUrl}/trips/${trip._id}`,
      trip
    );
  }
}