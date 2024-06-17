import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAppLoginComponent } from './admin-app-login.component';

describe('AdminAppLoginComponent', () => {
  let component: AdminAppLoginComponent;
  let fixture: ComponentFixture<AdminAppLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAppLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAppLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
