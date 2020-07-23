import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBossComponent } from './chat-boss.component';

describe('ChatBossComponent', () => {
  let component: ChatBossComponent;
  let fixture: ComponentFixture<ChatBossComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatBossComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatBossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
