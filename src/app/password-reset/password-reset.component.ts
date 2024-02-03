import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
})
export class PasswordResetComponent {
  email = '';

  constructor(private authService: AuthService) {}

  resetPassword(): void {
    this.authService.resetPassword(this.email).subscribe(
      (response) => {
        // Handle successful password reset request here
      },
      (error) => {
        // Handle password reset request error here
      }
    );
  }
}
