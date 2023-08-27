import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <h1>Parent Title</h1> -->
    <app-child (childToParentEvent)="takeFromChild($event)" [value]="data"></app-child>
    <p>from child: {{textFromChild}}</p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = 'Text passed from parent!';
  textFromChild: string = '';
  nm = 9;
  asdf = new Date()


  takeFromChild(value: string) {
    console.log(value)
    this.textFromChild = value
  }
}
