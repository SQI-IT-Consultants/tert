import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-student-new',
  templateUrl: './student-new.component.html',
  styleUrls: ['./student-new.component.css']
})
export class StudentNewComponent implements OnInit {
  fileSelectMsg: string = 'No file selected yet.';
  fileUploadMsg: string = 'No file uploaded yet.';
  disabled: boolean = false;

  selectEvent(file: File): void {
    this.fileSelectMsg = file.name;
  }

  uploadEvent(file: File): void {
    this.fileUploadMsg = file.name;
  }

  cancelEvent(): void {
    this.fileSelectMsg = 'No file selected yet.';
    this.fileUploadMsg = 'No file uploaded yet.';
  }

  toggleDisabled(): void {
    this.disabled = !this.disabled;
  }







  isLinear = true;
  
  constructor(private _formBuilder: FormBuilder) { }
  admissionFormGroup: FormGroup;
  personalFormGroup1: FormGroup;
  personalFormGroup2: FormGroup;
  refFormGroup1: FormGroup;
  refFormGroup2: FormGroup;
  ngOnInit() {
    this.admissionFormGroup = this._formBuilder.group({
      passport: ['', Validators.required],
      admissionDate: ['', Validators.required],
      matricNo: ['', Validators.required],
      deptClass: ['', Validators.required],
      status: ['', Validators.required],
      password: ['', Validators.required]
     
    });
    this.personalFormGroup1 = this._formBuilder.group({
      title: ['', Validators.required],
      surname: ['', Validators.required],
      firstname: ['', Validators.required],
      middlename: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
    });
    this.personalFormGroup2 = this._formBuilder.group({
      email: ['', Validators.required],
      phone1: ['', Validators.required],
      phone2: ['', Validators.required],
      marital: ['', Validators.required],
      denomination: ['', Validators.required],
      dob: ['', Validators.required]
    });
    this.refFormGroup1 = this._formBuilder.group({
      r0fName: ['', Validators.required],
      r0fEmail: ['', Validators.required],
      r0fPhone1: ['', Validators.required],
      r0fPhone2: ['', Validators.required],
      r0fRelation1: ['', Validators.required],
      r0fAddress: ['', Validators.required]
    });
    this.refFormGroup2 = this._formBuilder.group({
      r1fName: ['', Validators.required],
      r1fEmail: ['', Validators.required],
      r1fPhone1: ['', Validators.required],
      r1fPhone2: ['', Validators.required],
      r1fRelation1: ['', Validators.required],
      r1fAddress: ['', Validators.required]
    });
  }

}
