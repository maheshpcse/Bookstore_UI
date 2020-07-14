import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  slideIndex: any = 1;

  constructor(
    private router: Router
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

}
