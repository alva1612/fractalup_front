import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-button',
  templateUrl: './user-button.component.html',
  styleUrls: ['./user-button.component.scss'],
})
export class UserButtonComponent {
  constructor(private readonly _authService: AuthService) {}
  logIn() {
    this._authService.login().subscribe((res) => console.log(res));
  }
}
