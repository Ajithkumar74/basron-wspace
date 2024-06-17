import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-app-authentication',
  standalone: true,
  imports: [],
  templateUrl: './admin-app-authentication.component.html',
  styleUrl: './admin-app-authentication.component.css'
})
export class AdminAppAuthenticationComponent {
  constructor(private router:Router){}


  onCodeEntered(){
     this.router.navigate(['auth-admin-login']);
   } 
}
