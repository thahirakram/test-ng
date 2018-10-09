import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name = [];
  constructor() { }

  ngOnInit() {
  }
  add() {
    this.name.push({})
  }
  remove(n) {
   const i = this.name.indexOf(n);
   this.name.splice(i, 1);
  }
}
