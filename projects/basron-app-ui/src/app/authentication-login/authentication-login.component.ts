import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication-login',
  standalone: true,
  imports: [],
  templateUrl: './authentication-login.component.html',
  styleUrl: './authentication-login.component.css'
})
export class AuthenticationLoginComponent {
  constructor(private router:Router){}


  onCodeEntered(){
     this.router.navigate(['auth-login-auth']);
   } 
}
