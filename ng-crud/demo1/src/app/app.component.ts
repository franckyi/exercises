import { Component } from '@angular/core';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Users</h1>
    <ul class="list-group">
    <li
      *ngFor="let u of users" class="list-group-item"
      [ngClass]="{
        'male': u.gender === 'M',
        'female': u.gender === 'F'
      }"
    >
      <i class="fa fa-3x"
        [ngClass]="{
          'fa-mars': u.gender === 'M',
          'fa-venus': u.gender === 'F'
        }"
        ></i>
      {{u.label}}
      <i class="fa fa-trash fa-2x pull-right" (click)="deleteHandler(u)"></i>
    </li>
    </ul>
  </div>
  `,
  styles: [`
  .male { background-color: #36caff; }
  .female { background-color: pink; }
`]
})
export class AppComponent {

  users: User[] = [                                 // list of users
    { id: 1, label: 'Fabio', gender: 'M', age: 20 },
    { id: 2, label: 'Lorenzo', gender: 'M', age: 37 },
    { id: 3, label: 'Silvia', gender: 'F', age: 70 },
  ];

  deleteHandler(userToRemove : User) {
    this.users = this.users.filter(u => u.id !== userToRemove.id);
  }

}
