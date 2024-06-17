import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
  email: string = '';

  newPassword: string = '';
  confirmPassword: string = '';

  constructor() {}

  sendResetLink(): void {
    if (this.email) {
      // Add your logic to send a reset link to the user's email
      console.log('Reset link sent to:', this.email);
      alert('A reset link has been sent to your email address.');
    } else {
      alert('Please enter a valid email address.');
    }
  }
  resetPassword(): void {
    if (this.newPassword !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
  }
}
