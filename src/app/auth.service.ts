import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apiservice } from './app.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  signupdetails(obj) {
    return this.http.post(Apiservice.API.SIGNUP, obj);
  }
  logindetails(obj) {
    return this.http.post(Apiservice.API.LOGIN, obj);
  }

  getUserPayload() {
    var token = localStorage.getItem('token');
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn(): boolean {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }
}
