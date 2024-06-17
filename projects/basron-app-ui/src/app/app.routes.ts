import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
    { path: 'customer', loadComponent: () => import('./customer/customer.component').then(m => m.CustomerComponent) },
    { path: 'signup', loadComponent: () => import('./customer/customer-signup/customer-signup.component').then(m => m.CustomerSignupComponent) },
    { path: 'reset-password', loadComponent: () => import('./customer/customer-signup/reset-password/reset-password.component').then(m => m.ResetPasswordComponent) },
    { path: 'login', loadComponent: () => import('./customer/customer-login/customer-login.component').then(m => m.CustomerLoginComponent) },
    { path: 'auth-login', loadComponent: () => import('./authentication-login/authentication-login.component').then(m => m.AuthenticationLoginComponent) },
    { path: 'auth-login-auth', loadComponent: () => import('./authentication-login/authentication-login-auth/authentication-login-auth.component').then(m => m.AuthenticationLoginAuthComponent) },

    { path: 'auth', loadComponent: () => import('./authentication/authentication.component').then(m => m.AuthenticationComponent) },
    { path: 'auth-create', loadComponent: () => import('./authentication-create-ac/authentication-create-ac.component').then(m => m.AuthenticationCreateAcComponent) },
    { path: 'auth-signup', loadComponent: () => import('./authentication-create-ac/auth-ac-signup-details/auth-ac-signup-details.component').then(m => m.AuthAcSignupDetailsComponent) },
    { path: 'activity', loadComponent: () => import('./authentication-create-ac/auth-ac-signup-details/activity/activity.component').then(m => m.ActivityComponent) },

    { path: 'admin', loadComponent: () => import('./admin-login/admin-login.component').then(m => m.AdminLoginComponent) },
    { path: 'admin-login', loadComponent: () => import('./admin-login/admin-app-login/admin-app-login.component').then(m => m.AdminAppLoginComponent) },
    { path: 'auth-admin', loadComponent: () => import('./admin-login/admin-app-authentication/admin-app-authentication.component').then(m => m.AdminAppAuthenticationComponent) },
    { path: 'auth-admin-login', loadComponent: () => import('./admin-login/admin-app-authentication-login/admin-app-authentication-login.component').then(m => m.AdminAppAuthenticationLoginComponent) },
    { path: 'admin-signup', loadComponent: () => import('./admin-login/admin-app-signup/admin-app-signup.component').then(m => m.AdminAppSignupComponent) },



];
