import { Injectable } from '@angular/core';
import { CourseAllocation } from '../interface/course-allocation';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CourseAllocationService {
  private _crsAllHolder:string = "/assets/data/crsall.json";
  constructor(private http: HttpClient) { }
  getCourseAllocation():Observable<CourseAllocation[]>{
    return this.http.get<CourseAllocation[]>(this._crsAllHolder);
  }
}
