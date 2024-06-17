import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './projects/basron-app-ui/src/app/interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl='http://localhost:3000';


  constructor( private http:HttpClient) { }

registerUser(userDetails: User){
  return this.http.post(`${this.baseUrl}/users`,userDetails);
}

getUserByEmail(email: string): Observable<User[]> {
  return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}`);
}

}