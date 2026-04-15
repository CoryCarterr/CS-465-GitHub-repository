import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthResponse } from '../models/auth-response';
import { User } from '../models/user';
import { BROWSER_STORAGE } from '../storage';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  private apiBaseUrl = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage
  ) {}

  private getAuthHeaders(): HttpHeaders {
    const token = this.storage.getItem('travlr-token');
    return new HttpHeaders({
      Authorization: `Bearer ${token || ''}`
    });
  }

  public getTrips(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiBaseUrl}/trips`);
  }

  public addTrip(trip: any): Observable<any> {
    return this.http.post<any>(
      `${this.apiBaseUrl}/trips`,
      trip,
      { headers: this.getAuthHeaders() }
    );
  }

  public updateTrip(trip: any): Observable<any> {
    return this.http.put<any>(
      `${this.apiBaseUrl}/trips/${trip._id}`,
      trip,
      { headers: this.getAuthHeaders() }
    );
  }

  public login(user: User): Promise<AuthResponse | undefined> {
    return this.handleAuthAPICall('login', user);
  }

  public register(user: User): Promise<AuthResponse | undefined> {
    return this.handleAuthAPICall('register', user);
  }

  private handleAuthAPICall(
    endpoint: string,
    user: User
  ): Promise<AuthResponse | undefined> {
    return this.http
      .post<AuthResponse>(`${this.apiBaseUrl}/${endpoint}`, user)
      .toPromise();
  }
}