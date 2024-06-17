import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication-create-ac',
  standalone: true,
  imports: [],
  templateUrl: './authentication-create-ac.component.html',
  styleUrl: './authentication-create-ac.component.css'
})
export class AuthenticationCreateAcComponent {


  constructor(private router:Router){}


     onCodeEntered(){
        this.router.navigate(['auth-signup']);
      } 

}