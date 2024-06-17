import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [HttpClientModule,
    RouterModule,
    CommonModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  adminTo() {
    this.router.navigate(['admin']);
  }
  customerTo() {
    this.router.navigate(['customer']);
  
  }
  
    constructor(private router: Router ) { }
  
    
    navigateToLogin(): void {
      this.router.navigate(['/login']);
    }
  
    navigateToSignup(): void {
      this.router.navigate(['/signup']);
    }
    
}
