import { Component, OnInit } from '@angular/core';
import { StaffService } from '../staff.service';
@Component({
  selector: 'app-staffprof',
  templateUrl: './staffprof.component.html',
  styleUrls: ['./staffprof.component.css']
})
export class StaffprofComponent implements OnInit {
  message;
  constructor(private data:StaffService) { }
  public display=true;
  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

}
