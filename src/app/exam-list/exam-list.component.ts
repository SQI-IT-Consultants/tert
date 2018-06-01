import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ExamService } from '../service/exam.service';
import { ExamComponent } from '../exam/exam.component';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.css']
})
export class ExamListComponent implements OnInit {
  isPopupOpened = true;
  constructor( private dialog?:MatDialog,private _examService?:ExamService) { }

  ngOnInit() {
  }
  get ExamList()
  {
    return this._examService.getAllExams();
  }
  
  addExam()
  {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(ExamComponent,{
      data : {}
    });
    
    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened=false;
    });
  }
  editExam(id: number)
  {
    this.isPopupOpened = true;
    const exam = this._examService.getAllExams().find(c => c.id === id);
    const dialogRef = this.dialog.open(ExamComponent,{
      data : exam
    });
    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened=false;
    });
  }
  deleteExam(id: number)
  {
    this._examService.deleteExam(id);
    
    
  }
}
 