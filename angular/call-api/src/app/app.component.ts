import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GetUserService } from './get-user.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'call-api';

  ListOfUsers: Observable<User>;

  constructor(private api: GetUserService) {
    this.ListOfUsers = api.getUsers();
    console.log(this.ListOfUsers);
  }

}
