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
        sessionStorage.setItem('id', response['id']);
        sessionStorage.setItem('firstname', response['firstname']);
        sessionStorage.setItem('lastname', response['lastname']);
        sessionStorage.setItem('username', response['username']);
        sessionStorage.setItem('password', response['password']);
        sessionStorage.setItem('email', response['email']);
        sessionStorage.setItem('desgination', response['desgination']);
        sessionStorage.setItem('depertmenet', response['depertmenet']);
        sessionStorage.setItem('updated_at', response['updated_at']);
        this.toster.successToastr('login sucess');
        this.router.navigate(['/home']);
      }
      else {
        this.toster.errorToastr('login is failed');
        this.router.navigate(['/login']);
      }
    })
  }
}
