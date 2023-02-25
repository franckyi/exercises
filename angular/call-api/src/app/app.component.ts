import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'call-api';
  public users: any = [];

  constructor(private _appService: AppService) { }

  ngOnInit(): void {
    this._appService.getUsers().subscribe( users => {
      this.users = users;
    })
  }

}
