import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    
    searchText = searchText.toLowerCase();
    var a=  items.filter(it => it.name.toLowerCase().includes(searchText) || it.matric_no.includes(searchText));
    return a;

   }
   
}   

// return items.filter(it => it.matric_no.includes(searchText));
