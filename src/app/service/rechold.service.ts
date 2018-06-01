import { Injectable } from '@angular/core';
import {BehaviorSubject } from 'rxjs/BehaviorSubject'
@Injectable({
  providedIn: 'root'
})
export class RecholdService {
  public term_id = "";
  public course_id="";
  public firstname="";
  public matric_no="";
  public lastname="";
  public pic="assets/avatar.png";
  public ca="";
  public exam="";
  private messageSource = new BehaviorSubject<any>
  ([{term_id:this.term_id,course_id:this.course_id,matric_no:this.matric_no,firstname:this.firstname,lastname:this.lastname,
            ca:this.ca,exam:this.exam,pic:this.pic}]);
   currentMessage = this.messageSource.asObservable();
 constructor(){}
 changeMessage(message: any[])
 {
   this.messageSource.next(message)
 }
}
