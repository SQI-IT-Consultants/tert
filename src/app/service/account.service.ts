import { Injectable } from '@angular/core';
import { Account } from '../model/account';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  _accountList: Account[]= [];
  constructor() { }
  addAccount(account : Account)
  {
    account.id= this._accountList.length+1;
    this._accountList.push(account);
  }
  editAccount(account: Account)
  {
    const index = this._accountList.findIndex(c => c.id === account.id);
    this._accountList[index] = account;
  }
  deleteAccount(id: number)
  { 
      const account = this._accountList.findIndex(c => c.id === id);
      this._accountList.splice(account,1);
      for(var x=0;x<this._accountList.length;x++)
      {
        this._accountList[x].id = x+1;
      }
  }
  removeAccount(id:number)
  {
    const account = this._accountList.findIndex(c => c.id === id);
    this._accountList.splice(account,1);
  }
  getAllAccounts()
  {
    return this._accountList;
  }
}
