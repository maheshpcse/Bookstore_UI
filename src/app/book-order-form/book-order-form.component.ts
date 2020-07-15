import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-order-form',
  templateUrl: './book-order-form.component.html',
  styleUrls: ['./book-order-form.component.css']
})
export class BookOrderFormComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  backToBooks() {
    this.router.navigate(['/books']);
  }

}
