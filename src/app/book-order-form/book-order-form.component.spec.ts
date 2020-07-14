import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookOrderFormComponent } from './book-order-form.component';

describe('BookOrderFormComponent', () => {
  let component: BookOrderFormComponent;
  let fixture: ComponentFixture<BookOrderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookOrderFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
