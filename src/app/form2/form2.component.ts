import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  data = [];
  constructor() { }

  ngOnInit() {
  }
  add() {
    this.data.push({});
  }
  remove(d) {
    const i = this.data.indexOf(d);
    this.data.splice(i, 1);
  }
}
