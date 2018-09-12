import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data = [
  {
    name: 'thahir',
    id: '1',
    age: '20',
  },
  {
    name: 'mothil',
    id: '2',
    age: '20',
  },
  {
    name: 'rakesh',
    id: '3',
    age: '20'
  }];
  constructor() { }

  ngOnInit() {
  }

}
