import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  arr = [];
  constructor() { }

  ngOnInit() {
  }
add() {
  this.arr.push({});
}
remove(a) {
  const i = this.arr.indexOf(a);
  this.arr.splice(i, 1);
}
}
