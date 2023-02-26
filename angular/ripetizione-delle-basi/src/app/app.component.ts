import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'ripetizione-delle-basi';

  url: string = 'http://www.go12345.com';

  spesa: string[] = [ 'mela', 'pasta', 'pane', 'latte', 'vino' ];

  counter: number = 1;

  increment() {
    this.counter++;
  }

  getLabel() {
    if(this.counter === 0) return 'neutro';
    return this.counter > 0 ? 'counter > 0' : 'counter < 0';
  }

  getClass() {
    if (this.counter === 0) return null;
    return this.counter > 0 ? 'green' : 'red';
  }

  click(text: string) {
    alert(text)
  }

  mouseOver(): void {
    alert('mouseOver');
  }

  change(): void {
    alert('change')
  }

}
