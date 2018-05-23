import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { locations } from '../location'
import {MatSelect} from '@angular/material';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-student-new',
  templateUrl: './student-new.component.html',
  styleUrls: ['./student-new.component.css']
})

export class StudentNewComponent implements OnInit {
  // email = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);
  @Output()
  selectionChange: EventEmitter<MatSelect>;
  matcher = new MyErrorStateMatcher();
  isLinear = false;
  name:string;
  ourFile: File;
  image: string = "";

  openInput(){ 
    // your can use ElementRef for this later
    document.getElementById("fileInput").click();
  }
  public countries = locations;

  fileChange(files: File[]) {
    if (files.length > 0) {
      this.ourFile = files[0];
      var reader = new FileReader();
      reader.onload = (event:any)=>{
        this.image = event.target.result;

      }
      reader.readAsDataURL(this.ourFile);
    }
  }
  
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
      // r0fEmail: ['', Validators.required],
      r0fPhone1: ['', Validators.required],
      r0fPhone2: ['', Validators.required],
      r0fRelation1: ['', Validators.required],
      r0fAddress: ['', Validators.required]
    });
    this.refFormGroup2 = this._formBuilder.group({
      r1fName: ['', Validators.required],
      // r1fEmail: ['', Validators.required],
      r1fPhone1: ['', Validators.required],
      r1fPhone2: ['', Validators.required],
      r1fRelation1: ['', Validators.required],
      r1fAddress: ['', Validators.required]
    });
  }
  public entStates;
  public c;
  public count;
  public y;
  public ok;
  public stateCount;
  public ch;
  public g;
  check(x)
  {
    this.entStates=[];
     for(this.c=0;this.c<this.countries.length;this.c++)
     {
   
       if(x==this.countries[this.c].CountryName)
       {
         for(this.count=0;this.count<this.countries[this.c].States.length;this.count++)
         {
            this.entStates.push(this.countries[this.c].States[this.count]);
         }
       }
     }
  }
  check1(y)
  {
    this.ok =[];
    for(this.ch=0;this.ch<this.countries.length;this.ch++)
    {
       for(this.stateCount=0;this.stateCount<this.countries[this.ch].States.length;this.stateCount++)
       {
       
        if(y==this.countries[this.ch].States[this.stateCount].state)
        {
        
          for(this.g=0;this.g<this.countries[this.ch].States[this.stateCount].cities.length;this.g++)
          {
              this.ok.push(this.countries[this.ch].States[this.stateCount].cities[this.g]);
          }
          
        }
       }
       
    }
  }

  myDate = new Date();  
}
