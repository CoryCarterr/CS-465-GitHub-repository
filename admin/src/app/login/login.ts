import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  credentials: User = new User();
  message = '';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  public onLoginSubmit(): void {
    if (!this.credentials.email || !this.credentials.password) {
      this.message = 'Both email and password are required.';
      return;
    }

    this.authenticationService.login(this.credentials)
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch((err) => {
  console.error(err);
  this.message = err?.error?.message || err?.message || JSON.stringify(err?.error) || 'Login failed';
});
  }
}