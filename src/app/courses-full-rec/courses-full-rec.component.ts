import { Component, OnInit } from '@angular/core';
import { RecholdService } from '../service/rechold.service';

@Component({
  selector: 'app-courses-full-rec',
  templateUrl: './courses-full-rec.component.html',
  styleUrls: ['./courses-full-rec.component.css']
})
export class CoursesFullRecComponent implements OnInit {
  message;
  select;
  constructor(private dat:RecholdService) { }
 
  selected = 'option1'; 
  ngOnInit() {
    this.dat.currentMessage.subscribe(message => this.message = message);
    
  }


}
