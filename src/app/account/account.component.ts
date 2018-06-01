import { Component, OnInit, Inject  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AccountService } from '../service/account.service';
import { FormControl, FormBuilder, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  public _accountForm: FormGroup;
  constructor(private _formBuilder: FormBuilder,private dialogRef:MatDialogRef<AccountComponent>,
    private _accountService: AccountService, @Inject(MAT_DIALOG_DATA) public data: any) { }
    onNoClick():void
    {
      this.dialogRef.close();
    }
  ngOnInit() {
    this._accountForm= this._formBuilder.group(
      {
        id:[this.data.id],
        accountNo : [ this.data.accountNo,[Validators.required]],
        accountName: [ this.data.accountName,[Validators.required]],
        description : [this.data.description,[Validators.required]],
        accountType : [this.data.accountType,[Validators.required]]
      });

  }
  
  onSubmit()
      {
        if(isNaN(this.data.id))
        {
          this._accountService.addAccount(this._accountForm.value);
          this.dialogRef.close();
        }
        else{
          this._accountService.editAccount(this._accountForm.value);
          this.dialogRef.close();
        }
      }

}
