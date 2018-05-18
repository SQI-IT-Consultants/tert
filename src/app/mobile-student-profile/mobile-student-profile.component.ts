import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
import { StudentService } from '../student.service';
import { StudlistComponent } from '../studlist/studlist.component';
@Component({
  selector: 'app-mobile-student-profile',
  templateUrl: './mobile-student-profile.component.html',
  styleUrls: ['./mobile-student-profile.component.css']
})
export class MobileStudentProfileComponent implements OnInit {
  message;
  public studentId;
  constructor(private route: ActivatedRoute, private router:Router,private data:StudentService) { }
 
  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.studentId = id;
    this.route.paramMap.subscribe((params: ParamMap)=>
    {
      let id = parseInt(params.get('id'));
      this.studentId = id;
    })

  }
  
  back()
  {
    let selectedId = this.studentId? this.studentId:null;
    this.router.navigate(['/student/studentList',{id:selectedId}]);
  }

}
