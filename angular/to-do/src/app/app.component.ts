import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="main">
      <h1>My To Do List</h1>
      <label for="addItemInput">What would you like to do today?</label>

      <ul>
        <li *ngFor="let item of items">{{item.description}}</li>
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
