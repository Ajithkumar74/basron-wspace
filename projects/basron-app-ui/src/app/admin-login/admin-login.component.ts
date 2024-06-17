import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
customer() {
  this.router.navigate(['customer']);

}
  admin() {
    this.router.navigate(['admin']);
  
  }
    constructor(private router: Router ) { }
  
    navigateToLogin(): void {
      this.router.navigate(['/admin-login']);
    }
  
    navigateToSignup(): void {
      this.router.navigate(['/admin-signup']);
    }
}
