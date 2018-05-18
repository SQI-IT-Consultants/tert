import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
import { StaffService } from '../staff.service';
import { StafflistComponent } from '../stafflist/stafflist.component';
@Component({
  selector: 'app-mobile-staff-profile',
  templateUrl: './mobile-staff-profile.component.html',
  styleUrls: ['./mobile-staff-profile.component.css']
})
export class MobileStaffProfileComponent implements OnInit {
  message;
  public staffId;

  constructor(private route: ActivatedRoute, private router:Router,private data:StaffService){ }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.studentId = id;
    this.route.paramMap.subscribe((params: ParamMap)=>
    {
      let id = parseInt(params.get('id'));
      this.staffId = id;
    })

  }
}
