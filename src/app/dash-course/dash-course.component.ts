import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DashCourseService } from '../service/dash-course.service';
import { CourseDetailsService } from '../service/course-details.service';
import{ RecholdService } from '../service/rechold.service'
import { MatTabsModule, MatTabChangeEvent} from '@angular/material';
@Component({
  selector: 'app-dash-course',
  templateUrl: './dash-course.component.html',
  styleUrls: ['./dash-course.component.css']
})
export class DashCourseComponent implements OnInit{
  public selected = 'option2';
  public id;
  public tabText;
  public result;
  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    this.tabText = tabChangeEvent.tab.textLabel;
    for(this.count=0;this.count<this.record.length;this.count++)
    {
      if(this.tabText == this.record[this.count].course_title)
      {
       this.id = this.record[this.count].co_id;
      }
    }
    this.result=[];
    this.detail.getData()
              .subscribe(data => {
                for(this.count=0;this.count<data.length;this.count++)
                {
                  
                    if(this.id == data[this.count].course_id)
                    {
                    
                      this.result.push(data[this.count]);
                    }
                }
              })
  }
  constructor(private info: DashCourseService, private detail: CourseDetailsService,private dat:RecholdService) { }
  public record=[];
  public x;
  public count;
  public length;
  public sec;
  public ex;
  public arrCa=[];
  public arrEx=[];
 
  checkCa(c)
  {
   for(this.count=0;this.count<this.result.length;this.count++)
   {
      this.result[this.count].total =  parseInt(this.result[this.count].ca) + parseInt(this.result[this.count].exam);
      if(this.result[this.count].total>=70)
      {
        
        this.result[this.count].grade='A';
      }
      else if(this.result[this.count].total>60 && this.result[this.count].total<70)
      {
        this.result[this.count].grade='B';
      }
      else if(this.result[this.count].total>=50 && this.result[this.count].total<60)
      {
        this.result[this.count].grade='C';
      }
      else if(this.result[this.count].total>=40 && this.result[this.count].total<50)
      {
        this.result[this.count].grade='D';
      }
      else if(this.result[this.count].total>=40 && this.result[this.count].total<50)
      {
        this.result[this.count].grade='E';
      }
      else{
        this.result[this.count].grade='F';
        }
   }
  
  }
  checkEx(c)
  {
   for(this.count=0;this.count<this.result.length;this.count++)
   {
      this.result[this.count].total =  parseInt(this.result[this.count].ca) + parseInt(this.result[this.count].exam);
      if(this.result[this.count].total>=70)
      {
        
        this.result[this.count].grade='A';
      }
      else if(this.result[this.count].total>60 && this.result[this.count].total<70)
      {
        this.result[this.count].grade='B';
      }
      else if(this.result[this.count].total>=50 && this.result[this.count].total<60)
      {
        this.result[this.count].grade='C';
      }
   }
  }
  
  ngOnInit() {
   
                 
                        for(this.count=1;this.count<=30;this.count++)
                        {
                          this.arrCa.push(this.count);
                        }
                        for(this.count=1;this.count<=60;this.count++)
                        {
                          this.arrEx.push(this.count);
                        }
                      this.info.getData()
                            .subscribe(data =>  {
                                  for(this.count=0;this.count<data.length;this.count++)
                                  {
                                    if(data[this.count].staff_id == 1)
                                    {
                                      this.length= data[this.count].coursesOffered.length;
                                     
                                      for(this.x=0;this.x<this.length;this.x++)
                                      {
                                       this.record.push(data[this.count].coursesOffered[this.x]);
                                      }
                                      break;
                                    }
                                  }
                              });
   
                      // this.detail.getData()
                      // .subscribe(data => {

                      // });
            
               }
  setResult(x)
  {
    this.dat.changeMessage([{term_id:x.term_id,course_id:x.course_id,matric_no:x.matric_no,firstname:x.firstname,lastname:x.lastname,
                           ca:x.ca,exam:x.exam,pic:x.pic}])
  }
}
