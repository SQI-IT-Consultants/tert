import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ExamService } from '../service/exam.service';
import { FormControl, FormBuilder, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  public _examForm: FormGroup;

  constructor(private _formBuilder: FormBuilder,private dialogRef:MatDialogRef<ExamComponent>,
              private _examService: ExamService, @Inject(MAT_DIALOG_DATA) public data: any) { }
    onNoClick():void
    {
      this.dialogRef.close();
    }
  ngOnInit() {
    this._examForm= this._formBuilder.group(
      {
        id:[this.data.id],
        examName : [ this.data.examName,[Validators.required]],
        passMark: [ this.data.passMark,[Validators.required]],
        fee : [this.data.fee,[Validators.required]],
        retakeFee : [this.data.retakeFee,[Validators.required]],
        col: [this.data.col,[Validators.required]],
        instruction:[this.data.instruction,[Validators.required]]
      });
      
  }

  onSubmit()
      {
        if(isNaN(this.data.id))
        {
          this._examService.addExam(this._examForm.value);
          this.dialogRef.close();
        }
        else{
          this._examService.editExam(this._examForm.value);
          this.dialogRef.close();
        }
      }

}
