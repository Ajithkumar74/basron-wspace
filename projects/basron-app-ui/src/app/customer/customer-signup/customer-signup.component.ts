import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppRoutingModule } from '../../app-routing/app-routing.module';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MatIconModule } from '@angular/material/icon';
import { phoneLengthValidator } from '../../shared/phoneLengthValidator';
import { passwordMatchValidator } from '../../shared/password-match.directive';
import { AuthService } from '../../../../../../auth.service';
import { MessageService } from 'primeng/api';
import { User } from '../../interfaces/auth';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-customer-signup',
  standalone: true,
  imports: 
    [HttpClientModule,
    CommonModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,ToastModule,
    CardModule,
    MatIconModule
  ],
  templateUrl: './customer-signup.component.html',
  styleUrl: './customer-signup.component.css'
})
export class CustomerSignupComponent {
Backonauth() {
  this.router.navigate(['customer']);
}



  registerForm = this.fb.group({
    email: ['',[Validators.required,Validators.email]],
    phone: ['',[Validators.required, Validators.pattern('^\\d{10}$')]],
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
    if(this.registerForm.valid){

    
    const postData = { ...this.registerForm.value };
    delete postData.repeatPassword;
   this.authService.registerUser(postData as User).subscribe(
     response=>{
       console.log(response);
       this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Register to Enter OTP' });
       this.router.navigate(['auth-create'])
   },
     error=>
   {
     this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
   }
 )
   
 }
}

}
