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
      if (response['success'] == true) {
        this.toster.successToastr('login  sucess');
        this.router.navigate(['./home'])
      }
      else {
        this.toster.errorToastr('sign up is failed');
      }
    })
  }
}
