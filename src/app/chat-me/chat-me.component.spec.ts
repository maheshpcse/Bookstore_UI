import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatMeComponent } from './chat-me.component';

describe('ChatMeComponent', () => {
  let component: ChatMeComponent;
  let fixture: ComponentFixture<ChatMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
