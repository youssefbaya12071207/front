import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  login(): void {
    const loginRequest = { email: this.email, password: this.password };
    this.authService.login(loginRequest).subscribe(
      (response) => {
        // Handle successful login response here
      },
      (error) => {
        // Handle login error here
      }
    );
  }
}
