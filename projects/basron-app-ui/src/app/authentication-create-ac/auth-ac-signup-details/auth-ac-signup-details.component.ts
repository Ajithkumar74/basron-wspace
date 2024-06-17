import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-ac-signup-details',
  standalone: true,
  imports: [],
  templateUrl: './auth-ac-signup-details.component.html',
  styleUrl: './auth-ac-signup-details.component.css'
})
export class AuthAcSignupDetailsComponent {
  constructor(private router:Router){}


  onActivity(){
     this.router.navigate(['activity']);
   } 
}
