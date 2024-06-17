import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthAcSignupDetailsComponent } from './auth-ac-signup-details.component';

describe('AuthAcSignupDetailsComponent', () => {
  let component: AuthAcSignupDetailsComponent;
  let fixture: ComponentFixture<AuthAcSignupDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthAcSignupDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthAcSignupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
