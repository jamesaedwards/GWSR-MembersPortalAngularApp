import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestInviteEmailComponent } from './request-invite-email.component';

describe('RequestInviteEmailComponent', () => {
  let component: RequestInviteEmailComponent;
  let fixture: ComponentFixture<RequestInviteEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestInviteEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestInviteEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
