import { Component } from '@angular/core';
import { Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from '../../app-routing/app-routing.module';
import { AuthService } from '../../../../../../auth.service';

@Component({
  selector: 'app-admin-app-login',
  standalone: true,
  imports: [HttpClientModule,
    CommonModule,
     AppRoutingModule,
     RouterModule,
     FormsModule,
     InputTextModule,
     ReactiveFormsModule,
     ButtonModule,ToastModule,
     CardModule,
     MatIconModule],
  templateUrl: './admin-app-login.component.html',
  styleUrl: './admin-app-login.component.css'
})
export class AdminAppLoginComponent {
  showPassword: boolean = false;
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })
  Backonauth() {
    this.router.navigate(['admin']);
  }


  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private msgService: MessageService
  ) { }

  get email() {
    return this.loginForm.controls['email'];
  }
  get password() { return this.loginForm.controls['password']; }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  AdminLogin() {
    const { email, password } = this.loginForm.value;
    this.authService.getAdminByEmail(email as string).subscribe(
      response => {
         if (response.length > 0) {
          const admin=response[0];
          if (admin.email === email && admin.password === password) {
            sessionStorage.setItem('email', email as string);
            this.router.navigate(['/auth-admin-login']);
          } else {
            this.msgService.add({ severity: 'error', summary: 'Error', detail: 'Email, password, or role is incorrect' });
          }
        } else {
          this.msgService.add({ severity: 'error', summary: 'Error', detail: 'Email or password is incorrect' });
        }
      },
      error => {
        this.msgService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
      }
    );
  }
 
}
