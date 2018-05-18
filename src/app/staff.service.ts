import { Injectable } from '@angular/core';
import {BehaviorSubject } from 'rxjs/BehaviorSubject'
@Injectable({
  providedIn: 'root'
})
export class StaffService {
  public name = "";
  public email = "";
  public matric_no = "";
  public gender = "";
  public status = "";
  public mobile = "";
  public pic = "assets/avatar.png";
  private messageSource = new BehaviorSubject<any>
                        ([{name:this.name,email:this.email,matric_no:this.matric_no,mobile:this.mobile,gender:this.gender,status:this.status,pic:this.pic}]);
  
  currentMessage = this.messageSource.asObservable();
  constructor() { }
  changeMessage(message: any[])
  {
    this.messageSource.next(message)
  }
}
