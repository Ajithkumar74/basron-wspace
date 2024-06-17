import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationLoginAuthComponent } from './authentication-login-auth.component';

describe('AuthenticationLoginAuthComponent', () => {
  let component: AuthenticationLoginAuthComponent;
  let fixture: ComponentFixture<AuthenticationLoginAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthenticationLoginAuthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticationLoginAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
