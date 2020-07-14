import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  slideIndex: any = 1;
  firstname: any;
  lastname: any;
  username: any;
  email: any;
  password: any;
  phonenumber: any;
  desgination: any;
  department: any;

  constructor(
    private router: Router, private authservice: AuthService, private toster: ToastrManager
  ) { }

  ngOnInit() {
    this.slideIndex = 1;
    this.showDivs(this.slideIndex);
  }

  plusDivs(n) {
    this.showDivs(this.slideIndex += n);
  }

  currentDiv(n) {
    this.showDivs(this.slideIndex = n);
  }

  showDivs(n) {
    var i;
    var x: any = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-red", "");
    }
    x[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " w3-red";
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  signupdetails() {
    let obj = {
      firstname: this.firstname,
      lastname: this.lastname,
      username: this.username,
      email: this.email,
      password: this.password,
      phonenumber: this.phonenumber,
      desgination: this.desgination,
      depertmenet: this.department,
      status: 'open'
    }
    this.authservice.signupdetails(obj).subscribe(response => {
      console.log('the response is tee', response);
      if (response['success'] == true) {
        this.toster.successToastr('signup sucess');
        this.router.navigate(['./login'])
      }
      else {
        this.toster.errorToastr('sign up is failed');
      }
    })
  }

}
