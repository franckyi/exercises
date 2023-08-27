import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

const SADF = 'tesafd' + 3223;

@Component({
  selector: 'app-child',
  template: `
    <!-- <p>{{childTitle}}</p> -->
    <p style="">{{valueFromParent}}</p>
    <button (click)="passToParent()">Pass to Parent</button>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() valueFromParent: any;
  @Output() childToParentEvent = new EventEmitter<string>();
  childTitle = 'Child Title';
  textFromChild = 'Text passed from child!';
  test = 5;
  test2 = 'nome'
  ASDF = SADF;


  constructor() { }

  ngOnInit(): void {
    console.log('test');
  }

  passToParent() {
    this.childToParentEvent.emit(this.textFromChild)
  }


}
