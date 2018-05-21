import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtercheck',
  templateUrl: './filtercheck.component.html',
  styleUrls: ['./filtercheck.component.css']
})
export class FiltercheckComponent implements OnInit {
  name = 'Angular';
  constructor() { }

  ngOnInit() {
  }
  characters=[
    'Finn the human',
    'Jake the dog',
    'Princess bubblegum',
    'Lumpy Space Princess',
    'Beemo1',
    'Beemo2'
  ]
}
