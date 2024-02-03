import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
})
export class LogoutComponent {
  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout().subscribe(
      (response) => {
        // Handle successful logout here
      },
      (error) => {
        // Handle logout error here
      }
    );
  }
}
