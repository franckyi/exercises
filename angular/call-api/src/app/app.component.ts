import { Component, OnInit } from '@angular/core';
import { User } from './User';
import { AppService } from './app.service';
// import { Observable } from 'rxjs';
// import { GetUserService } from './get-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'call-api';
  public users: any = [];

  // ListOfUsers: Observable<User>;

  constructor(private _appService: AppService) {
    // this.ListOfUsers = api.getUsers();
  }

  ngOnInit(): void {
    this._appService.getUsers().subscribe( users => {
      this.users = users;
    })
  }

}
