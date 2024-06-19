import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-app-authentication-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './admin-app-authentication-login.component.html',
  styleUrl: './admin-app-authentication-login.component.css'
})
export class AdminAppAuthenticationLoginComponent {
  constructor(private router:Router){}
  otp: string[] = ['', '', '', '', '', ''];
  isOtpComplete: boolean = false;


  checkOtp() {
    this.isOtpComplete = this.otp.every(char => char !== '');
  }

    

  onCodeEntered(){
     this.router.navigate(['activity']);
   } 
}
