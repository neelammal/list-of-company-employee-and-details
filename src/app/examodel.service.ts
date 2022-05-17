import { Injectable } from '@angular/core';
import { observable, of } from 'rxjs';
import { Employee } from './employee';
import { Observable ,Subject} from 'rxjs';
import { intern } from './employee';


@Injectable({
  providedIn: 'root'
})
export class ExamodelService {
  
  constructor() { }
  userName= new Subject<any>();
  getData(){
    return  [{"id":1, "name":"raam","age":30,"days":0,"salary":0,"address":"xyz,india","contact_number":9256999999},
      {"id":2, "name":"shaam","age":31,"days":0,"salary":0,"address":"abc,india","contact_number":9999900099},
      {"id":3, "name":"mohan","age":31,"days":0,"salary":0,"address":"def,india","contact_number":9999967899},
      {"id":4, "name":"amit","age":32,"days":0,"salary":0,"address":"efg,india","contact_number":99999234599},
      {"id":5, "name":"sumit","age":33,"days":0,"salary":0,"address":"ddd,india","contact_number":9999456999},
      {"id":6, "name":"gopal","age":29,"days":0,"salary":0,"address":"rst,india","contact_number":9909939999}
    ];
  }
  newdata(): Observable<intern[]>{
    const data: intern[] = [
      { id: 1, name: 'A' ,marks:92},
      { id: 2, name: 'B' ,marks:80},
      { id: 3, name: 'C' ,marks:65},
      { id: 4, name: 'D' ,marks:93},
      { id: 5, name: 'E' ,marks:50},
      { id: 6, name: 'F',marks:60 },
      { id: 7, name: 'G',marks:70 },
      { id: 8, name: 'H',marks:80 },
      { id: 9, name: 'I' ,marks:88},
      { id: 10, name: 'J',marks:91 }
    ]; 
      const daTa3 = of(data);
      
      return daTa3 ;
    }

  }
  
    
  
  

