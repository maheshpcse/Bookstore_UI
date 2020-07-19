import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFoamsComponent } from './reactive-foams.component';

describe('ReactiveFoamsComponent', () => {
  let component: ReactiveFoamsComponent;
  let fixture: ComponentFixture<ReactiveFoamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFoamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFoamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
