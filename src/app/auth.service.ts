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
}
