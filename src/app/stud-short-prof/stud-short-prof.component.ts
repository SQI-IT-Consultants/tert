import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-stud-short-prof',
  templateUrl: './stud-short-prof.component.html',
  styleUrls: ['./stud-short-prof.component.css']
})
export class StudShortProfComponent implements OnInit {
  message;
  constructor(private data:StudentService) { }

  ngOnInit() {
      this.data.currentMessage.subscribe(message => this.message = message)
  }
  
}
