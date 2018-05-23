import { Component, OnInit } from '@angular/core';
import { locations } from '../location'
@Component({
  selector: 'app-sel',
  templateUrl: './sel.component.html',
  styleUrls: ['./sel.component.css']
})
export class SelComponent implements OnInit {

  constructor() { }
public states:any[];
public c;
public y;
public count;
public k;
public m;
public g;
public s;
public ch;
public entStates:any[];
public ok:any[];
public stateCount;
  ngOnInit() {
  }
  public countries = locations;
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
    // this.ok=[];
    // for(this.k=0;this.k<this.countries.length;this.k++)
    // {
    //   for(this.m=0;this.countries[this.k].States[this.m];this.m++)
    //   {
       
    //     if(x==this.countries[this.k].States[this.m])
    //     {
    //       alert(this.countries[this.k].States[this.m].cities.length);
    //       for(this.g=0;this.g<this.countries[this.k].States[this.m].cities.length;this.g++)
    //       {
    //         alert(this.countries[this.k].States[this.m].cities[this.g]);
          
    //       }
    //     }
    //   }
    // }
  }
}
