import { Component } from '@angular/core';
import { AuthService } from '../Services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'contack-manager';
  constructor(public authServices: AuthService, private router: Router) {}
  onLogout() {
    this.authServices.logout();
    this.router.navigate(['/']);
  }
}
