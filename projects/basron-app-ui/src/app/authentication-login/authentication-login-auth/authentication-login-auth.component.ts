import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication-login-auth',
  standalone: true,
  imports: [],
  templateUrl: './authentication-login-auth.component.html',
  styleUrl: './authentication-login-auth.component.css'
})
export class AuthenticationLoginAuthComponent {
  constructor(private router:Router){}


  onCodeEntered(){
     this.router.navigate(['activity']);
   } 
}
