import { Injectable } from '@angular/core';
import { DashCourse } from '../interface/dash-course';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashCourseService {
  private _crsAllHolder:string = "/assets/data/crsall.json";
  constructor(private http: HttpClient) { }
 getData():Observable<DashCourse[]>{
  return this.http.get<DashCourse[]>(this._crsAllHolder);
}
  
 
}
