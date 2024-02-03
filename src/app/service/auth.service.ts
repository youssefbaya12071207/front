import { Injectable } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeModel } from '../employee.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = '/api/v1/auth';
  constructor(private http: HttpClient) {}

  login(loginRequest: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, loginRequest);
  }

  logout(): Observable<any> {
    return this.http.post(`${this.baseUrl}/logout`, {});
  }

  checkAuthentication(): Observable<any> {
    return this.http.post(`${this.baseUrl}/check-authentication`, {});
  }

  resetPassword(email: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/reset-password/${email}`);
  }

  performPasswordReset(resetData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/reset-password`, resetData);
  }

  updatePassword(newPassword: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update-pwd`, newPassword);
  }


}
