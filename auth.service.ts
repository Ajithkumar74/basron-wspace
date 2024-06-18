import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './projects/basron-app-ui/src/app/interfaces/auth';
import { AdminUser } from './projects/basron-app-ui/src/app/interfaces/aauth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl='http://localhost:3000';
  private adminApiUrl = 'http://localhost:3000';



  constructor( private http:HttpClient) { }

registerUser(userDetails: User){
  return this.http.post(`${this.baseUrl}/users`,userDetails);
}

getUserByEmail(email: string): Observable<User[]> {
  return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}`);
}


registerAdmin(adminDetails: AdminUser){
  return this.http.post(`${this.adminApiUrl}/admin`,adminDetails);
}

getAdminByEmail(email: string): Observable<AdminUser[]> {
  return this.http.get<AdminUser[]>(`${this.adminApiUrl}/admin?email=${email}`);
}

}
