import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAppAuthenticationLoginComponent } from './admin-app-authentication-login.component';

describe('AdminAppAuthenticationLoginComponent', () => {
  let component: AdminAppAuthenticationLoginComponent;
  let fixture: ComponentFixture<AdminAppAuthenticationLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAppAuthenticationLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAppAuthenticationLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
