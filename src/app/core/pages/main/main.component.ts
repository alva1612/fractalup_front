import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(
    private readonly _userService: UserService
  ) {
    this._userService.history().subscribe(res => console.log(res))
  }
}
