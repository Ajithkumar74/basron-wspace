import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-authentication-login-auth',
  standalone: true,
  imports: [CommonModule,FormsModule,ButtonModule],
  templateUrl: './authentication-login-auth.component.html',
  styleUrl: './authentication-login-auth.component.css'
})
export class AuthenticationLoginAuthComponent {

  otp: string[] = ['', '', '', '', '', ''];
  isOtpComplete = false;

  constructor(private router: Router) {}

  checkOtp() {
    this.isOtpComplete = this.otp.every(char => char !== '');
  }
  onCodeEntered(){
    if (this.isOtpComplete) {

     this.router.navigate(['activity']);
   } 
  }
  moveToNext(event: any, index: number) {
    if (event.target.value.length === 1 && index < 5) {
      document.getElementById(`otp${index + 1}`)?.focus();
    }
    this.checkOtp();
  }
}
