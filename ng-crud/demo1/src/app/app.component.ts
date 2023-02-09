import { Component } from '@angular/core';
import { User } from './model/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Users</h1>

    <form
      class="card card-body mt-3"
      #f="ngForm"
      (submit)="saveHandler(f)"
      [ngClass]="{
      'male': f.value.gender === 'M',
      'female': f.value.gender === 'F'
      }"
    >
      <input
        type="text"
        ngModel
        name="label"
        placeholder="Add user name"
        class="form-control"
        required
        #labelInput="ngModel"
        [ngClass]="{'is-invalid': labelInput.invalid && f.dirty}"
      >

      <select
        ngModel
        name="gender"
        class="form-control"
        required
        #genderInput="ngModel"
        [ngClass]="{'is-invalid': genderInput.invalid && f.dirty}"
      >
        <option value="">Select option</option>
        <option value="M">M</option>
        <option value="F">F</option>
      </select>

      <button
        class="btn"
        [disabled]="f.invalid"
        [ngClass]="{
        'btn-success': f.valid,
        'btn-danger': f.invalid
        }"
      >Save</button>
    </form>

    <hr>

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
  .card { transition: all 0.5s }
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

  saveHandler(f: NgForm) {
    const user = f.value as User;
    user.id = Date.now(); // create a fake ID (i.e. a timestamp)
    this.users = [...this.users, user]
    f.reset({gender: ''});
  }

}
