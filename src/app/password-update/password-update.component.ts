import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-password-update',
  templateUrl: './password-update.component.html',
})
export class PasswordUpdateComponent {
  newPassword = '';

  constructor(private authService: AuthService) {}

  updatePassword(): void {
    const passwordData = { password: this.newPassword };
    this.authService.updatePassword(passwordData).subscribe(
      (response) => {
        // Handle successful password update here
      },
      (error) => {
        // Handle password update error here
      }
    );
  }
}
