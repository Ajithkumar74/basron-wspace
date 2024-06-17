import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAppSignupComponent } from './admin-app-signup.component';

describe('AdminAppSignupComponent', () => {
  let component: AdminAppSignupComponent;
  let fixture: ComponentFixture<AdminAppSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAppSignupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAppSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
