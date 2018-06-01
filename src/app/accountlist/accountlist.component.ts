import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AccountService } from '../service/account.service';
import { AccountComponent } from '../account/account.component';

@Component({
  selector: 'app-accountlist',
  templateUrl: './accountlist.component.html',
  styleUrls: ['./accountlist.component.css']
})
export class AccountlistComponent implements OnInit {
  isPopupOpened = true;
  constructor( private dialog?:MatDialog,private _accountService?:AccountService) { }

  ngOnInit() {
  }
  get AccountList()
  {
    return this._accountService.getAllAccounts();
  }
  addAccount()
  {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(AccountComponent,{
      data : {}
    });
    
    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened=false;
    });
  }
  editAccount(id: number)
  {
    this.isPopupOpened = true;
    const account = this._accountService.getAllAccounts().find(c => c.id === id);
    const dialogRef = this.dialog.open(AccountComponent,{
      data : account
    });
    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened=false;
    });
  }
  deleteAccount(id: number)
  {
    this._accountService.deleteAccount(id); 
  }
}
