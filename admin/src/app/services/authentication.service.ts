import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from '../storage';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { TripDataService } from './trip-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(
    @Inject(BROWSER_STORAGE) private storage: Storage,
    private tripDataService: TripDataService
  ) {}

  public getToken(): string {
    const token = this.storage.getItem('travlr-token');
    return token ? token : '';
  }

  public saveToken(token: string): void {
    this.storage.setItem('travlr-token', token);
  }

  public logout(): void {
    this.storage.removeItem('travlr-token');
  }

  public register(user: User): Promise<void> {
    return this.tripDataService.register(user).then((authResp?: AuthResponse) => {
      if (authResp?.token) {
        this.saveToken(authResp.token);
      }
    });
  }

  public login(user: User): Promise<void> {
    return this.tripDataService.login(user).then((authResp?: AuthResponse) => {
      if (authResp?.token) {
        this.saveToken(authResp.token);
      }
    });
  }

  public isLoggedIn(): boolean {
    const token = this.getToken();
    return token !== '';
  }
}