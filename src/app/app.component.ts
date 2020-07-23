import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'meanakv';
  href: any;

  constructor(
    private router: Router,
    private location: Location
  ) { 
    this.href = (window.location.href).split('http://localhost:4200/')[1];
    console.log(this.href);
  }

  ngOnInit() {
    
  }
}
