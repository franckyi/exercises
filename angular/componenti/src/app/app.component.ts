import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  like: boolean = false;
  counter: number = 1;
  btnLike = 'LIKE';

  increment() {
    this.counter += 1;
  }

  getLabel() {
    if (this.counter === 0) return 'neutrale';
    return this.counter > 0 ? 'positivo' : 'negativo';
  }

  getClass() {
    if (this.counter === 0) return null;
    return this.counter > 0 ? 'green' : 'red';
  }
}
