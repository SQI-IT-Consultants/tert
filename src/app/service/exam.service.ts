import { Injectable } from '@angular/core';
import { Exam } from '../model/exam';
@Injectable({
  providedIn: 'root'
})
export class ExamService {
  _examList: Exam[]= [];
  constructor() { }
  addExam(exam : Exam)
  {
    exam.id= this._examList.length+1;
    this._examList.push(exam);
  }
  editExam(exam: Exam)
  {
    const index = this._examList.findIndex(c => c.id === exam.id);
    this._examList[index] = exam;
  }
  deleteExam(id: number)
  { 
      const exam = this._examList.findIndex(c => c.id === id);
      this._examList.splice(exam,1);
      for(var x=0;x<this._examList.length;x++)
      {
        this._examList[x].id = x+1;
      }
  }
  removeExam(id:number)
  {
    const exam = this._examList.findIndex(c => c.id === id);
    this._examList.splice(exam,1);
  }
  getAllExams()
  {
    return this._examList;
  }
}
