import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-app-authentication-login',
  standalone: true,
  imports: [],
  templateUrl: './admin-app-authentication-login.component.html',
  styleUrl: './admin-app-authentication-login.component.css'
})
export class AdminAppAuthenticationLoginComponent {
  constructor(private router:Router){}


  onCodeEntered(){
     this.router.navigate(['activity']);
   } 
}
