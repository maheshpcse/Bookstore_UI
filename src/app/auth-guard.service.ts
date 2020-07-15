import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    private authService: AuthService,
    private router:Router
  ) { }

  canActivate():boolean {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['']);
      return false;
    } else {
      return true;
    }
  }
}
