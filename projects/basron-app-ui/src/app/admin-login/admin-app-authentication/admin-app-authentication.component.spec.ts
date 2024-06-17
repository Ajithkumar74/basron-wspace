import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAppAuthenticationComponent } from './admin-app-authentication.component';

describe('AdminAppAuthenticationComponent', () => {
  let component: AdminAppAuthenticationComponent;
  let fixture: ComponentFixture<AdminAppAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAppAuthenticationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAppAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
