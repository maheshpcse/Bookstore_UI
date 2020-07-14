import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: any = [];
  tempBooks: any = [];
  showData: any = 'all';

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
    this.books = [
      {name: 'Mountains', description: 'Lorem ipsum dolor..', path: 'mountains.jpg'},
      {name: 'Lights', description: 'Lorem ipsum dolor..', path: 'lights.jpg'},
      {name: 'Forest', description: 'Lorem ipsum dolor..', path: 'nature.jpg'},
      {name: 'Retro', description: 'Lorem ipsum dolor..', path: 'cars1.jpg'},
      {name: 'Fast', description: 'Lorem ipsum dolor..', path: 'cars2.jpg'},
      {name: 'Classic', description: 'Lorem ipsum dolor..', path: 'cars3.jpg'},
      {name: 'Girl', description: 'Lorem ipsum dolor..', path: 'people1.jpg'},
      {name: 'Man', description: 'Lorem ipsum dolor..', path: 'people2.jpg'},
      {name: 'Woman', description: 'Lorem ipsum dolor..', path: 'people3.jpg'}
    ];
    this.tempBooks = this.books;
    this.filterSelection(this.showData);
  }

  filterSelection(show: any) {
    if (show == 'all') {
      this.showData = show;
      this.books = this.tempBooks;
    }
    if (show == 'nature') {
      this.showData = show;
      this.books = [
        { name: 'Mountains', description: 'Lorem ipsum dolor..', path: 'mountains.jpg' },
        { name: 'Lights', description: 'Lorem ipsum dolor..', path: 'lights.jpg' },
        { name: 'Forest', description: 'Lorem ipsum dolor..', path: 'nature.jpg' }
      ];
    }
    if (show == 'cars') {
      this.showData = show;
      this.books = [
        { name: 'Retro', description: 'Lorem ipsum dolor..', path: 'cars1.jpg' },
        { name: 'Fast', description: 'Lorem ipsum dolor..', path: 'cars2.jpg' },
        { name: 'Classic', description: 'Lorem ipsum dolor..', path: 'cars3.jpg' }
      ];
    }
    if (show == 'people') {
      this.showData = show;
      this.books = [
        { name: 'Girl', description: 'Lorem ipsum dolor..', path: 'people1.jpg' },
        { name: 'Man', description: 'Lorem ipsum dolor..', path: 'people2.jpg' },
        { name: 'Woman', description: 'Lorem ipsum dolor..', path: 'people3.jpg' }
      ];
    }
  }

  bookView() {
    this.router.navigate(['/book/view']);
  }

  bookOrder() {
    this.router.navigate(['/book/order/form']);
  }

}
