import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-authentication-create-ac',
  standalone: true,
  imports: [CommonModule,FormsModule,ButtonModule],
  templateUrl: './authentication-create-ac.component.html',
  styleUrl: './authentication-create-ac.component.css'
})
export class AuthenticationCreateAcComponent {
  otp: string[] = ['', '', '', '', '', ''];
  isOtpComplete: boolean = false;


  constructor(private router:Router){}
  checkOtp() {
    this.isOtpComplete = this.otp.every(char => char !== '');
  }

     onCodeEntered(){
      if (this.isOtpComplete) {
        this.router.navigate(['auth-signup']);
      }
      } 

}