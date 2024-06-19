import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppRoutingModule } from '../../app-routing/app-routing.module';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { AuthService } from '../../../../../../auth.service';

@Component({
  selector: 'app-customer-login',
  standalone: true,
  imports: 
  [
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,ToastModule,
    CardModule,
    MatIconModule

  ],
  templateUrl: './customer-login.component.html',
  styleUrl: './customer-login.component.css'
})
export class CustomerLoginComponent {

  showPassword: boolean = false;
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  Backonauth() {
    this.router.navigate(['customer']);
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
  loginUser() {
    const { email, password } = this.loginForm.value;
    this.authService.getUserByEmail(email as string).subscribe(
      response => {
        if (response.length > 0) {
          const customer=response[0];
          if (customer.email === email && customer.password === password) {
          sessionStorage.setItem('email', email as string);
          this.router.navigate(['/auth-login-auth']);
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
