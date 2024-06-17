import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationCreateAcComponent } from './authentication-create-ac.component';

describe('AuthenticationCreateAcComponent', () => {
  let component: AuthenticationCreateAcComponent;
  let fixture: ComponentFixture<AuthenticationCreateAcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthenticationCreateAcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticationCreateAcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
