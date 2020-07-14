import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookOrdersComponent } from './book-orders.component';

describe('BookOrdersComponent', () => {
  let component: BookOrdersComponent;
  let fixture: ComponentFixture<BookOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
