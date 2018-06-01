import { Injectable } from '@angular/core';
import { CourseAllocationService } from '../service/course-allocation.service'
@Injectable({
  providedIn: 'root'
})
export class DeptAllocatedService {
  public result=[];
  public count;
  constructor(private _crs: CourseAllocationService) {  this._crs.getCourseAllocation().subscribe(data => this.result = data);}
  sayDeptAllocatedCourses(x)
  {
    for(this.count=0;this.count<this.result.length;this.count++)
    {
      if(x == this.result[this.count].staff_id)
      {
        alert(this.result[this.count]);
      }
    }

  }
}
