import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-studprof',
  templateUrl: './studprof.component.html',
  styleUrls: ['./studprof.component.css']
})
export class StudprofComponent implements OnInit {
  message;
  constructor(private data:StudentService) { }

  public display=true;
  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

}
