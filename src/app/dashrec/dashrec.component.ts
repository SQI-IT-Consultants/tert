import { Component, OnInit } from '@angular/core';
import { CourseAllocationService } from '../service/course-allocation.service';

@Component({
  selector: 'app-dashrec',
  templateUrl: './dashrec.component.html',
  styleUrls: ['./dashrec.component.css']
})
export class DashrecComponent implements OnInit {
 public content=[
   {"numb":92,
    "name":"Student Registered",
    "icon":"fa-user",
      "value" : 92
    },
    {
      "numb":34,
      "name":"Attendance",
      "icon":"fa-user",
      "value" :34
    },
    {
      "numb":20,
      "name":"Timetable Today",
      "icon":"fa-user",
      "value":20
    },
    {
      "numb":80,
      "name":"Result Entered",
      "icon":"fa-user",
      "value":80
    }
 ]
  color = 'primary';
  mode = 'determinate';
  value = 50;
  bufferValue = 75;
  constructor() { }
  ngOnInit() {
          
  }
}
