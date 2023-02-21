import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  template: `
    <div class="main">
      <h1>My To Do List</h1>
      <label for="addItemInput">What would you like to do today?</label>

      <input id="addItemInput" placeholder="add item" class="lg-text-input"
        #newItem
        (keyup.enter)="addItem(newItem.value); newItem.value = ''"
      />

      <button class="btn-primary"
      (click)="addItem(newItem.value); newItem.value = ''">
        Add
      </button>

      <h2>{{items.length}} <span *ngIf="items.length === 1; else elseBlock">item</span>
      <ng-template #elseBlock>items</ng-template></h2>

      <ul>
        <li *ngFor="let i of items">
          <app-item (remove)="remove(i)" [item]="i"></app-item>
        </li>
      </ul>


    </div>

  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'to-do';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { description: 'eat', done: true },
    { description: 'sleep', done: false },
    { description: 'play', done: false },
    { description: 'laugh', done: false },
  ]

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(
      item => this.filter === 'done' ?
      item.done : !item.done
    );
  }

  addItem(description: string) {
    this.allItems.unshift(
      {
        description,
        done: false
      }
    )
  }

}
