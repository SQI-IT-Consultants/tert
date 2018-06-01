import { Injectable } from '@angular/core';
import { CourseDetails } from '../interface/course-details';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CourseDetailsService {
  private _crsAllHolder:string = "/assets/data/courseDetails.json";
  constructor(private http: HttpClient) { }
 getData():Observable<CourseDetails[]>{
  return this.http.get<CourseDetails[]>(this._crsAllHolder);
}
}
