import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { AuthService } from '../../../../../../auth.service';
import { AppRoutingModule } from '../../app-routing/app-routing.module';
import { User } from '../../interfaces/auth';
import { passwordMatchValidator } from '../../shared/password-match.directive';
import { phoneLengthValidator } from '../../shared/phoneLengthValidator';

@Component({
  selector: 'app-admin-app-signup',
  standalone: true,
  imports: [HttpClientModule,
    CommonModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,ToastModule,
    CardModule,
    MatIconModule],
  templateUrl: './admin-app-signup.component.html',
  styleUrl: './admin-app-signup.component.css'
})
export class AdminAppSignupComponent {


  registerForm = this.fb.group({
    email: ['',[Validators.required,Validators.email]],
    phone: ['',[Validators.required, Validators.pattern('^\\+\\d{1,2}\\d{10}$'),phoneLengthValidator]],
    password: ['',Validators.required],
    repeatPassword: ['',Validators.required]
  },{

  validators: passwordMatchValidator
  });
  showPassword: boolean = false;
  showRepeatPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService ,
    private messageService:MessageService,
   private router :Router) {}

  get email() {
    return this.registerForm.controls['email'];
  }
  get phone(){
    return this.registerForm.controls['phone'];

  }

  get password() {
    return this.registerForm.controls['password'];
  }

  get repeatPassword() {
    return this.registerForm.controls['repeatPassword'];
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleRepeatPasswordVisibility() {
    this.showRepeatPassword = !this.showRepeatPassword;
  }

  submitDetails(){
    if (this.registerForm.valid) {

     const postData = { ...this.registerForm.value };
     delete postData.repeatPassword;
    this.authService.registerUser(postData as User).subscribe(
      response=>{
        console.log(response);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Register To Enter OTP' });
        this.router.navigate(['auth'])
    },
      error=>
    {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
    }
  );
    
  }
}
}
