import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;


  constructor(
    private router: Router, private authservice: AuthService, private toster: ToastrManager
  ) { }

  ngOnInit() {
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }
  
  loginregister() {
    let obj = {
      username: this.username,
      password: this.password
    }
    this.authservice.logindetails(obj).subscribe(response => {
      console.log('the response is tee', response);
      if (response['statusCode'] == 200) {
        localStorage.setItem('token', response['token']);
        sessionStorage.setItem('lastlogintime', response['lastlogintime']);
        sessionStorage.setItem('id', response['data']['_id']);
        sessionStorage.setItem('firstname', response['data']['firstname']);
        sessionStorage.setItem('lastname', response['data']['lastname']);
        sessionStorage.setItem('username', response['data']['username']);
        sessionStorage.setItem('password', response['data']['password']);
        sessionStorage.setItem('email', response['data']['email']);
        sessionStorage.setItem('designation', response['data']['designation']);
        sessionStorage.setItem('department', response['data']['department']);
        sessionStorage.setItem('updated_at', response['data']['updated_at']);
        this.toster.successToastr(response['message']);
        this.router.navigate(['/home']);
      }
      else if (response['statusCode'] == 404) {
        this.toster.warningToastr(response['message']);
      }
      else if (response['statusCode'] == 500) {
        this.toster.errorToastr(response['message']);
      }
    })
  }
}
