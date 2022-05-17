import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ExamodelService } from '../examodel.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  public daTa :any= [];
  constructor(private empService:ExamodelService){}
  ngOnInit(){
    this.daTa = this.empService.getData();
  }
  title = 'sample';
  public nuM:number=0;
  public woRd: string="";
  public wo:number=0;
  public phone:number=0;
  public addre: string="";
  public num1 : number = 0;
  public num2: number = 0;
  public num3: number = 0;
 
  aBc : Employee [] = [
    {id : 1, name : "abc",age:40},
    {id : 2, name : "efg",age:35},
    {id: 3, name: "xyz"  ,age:30 }
  ];
  onAdd(a:number, b:string,c:number,addre:string,phone:number){
    this.daTa.forEach((ele:any,index:any)=>{
      if(ele.id==a ) {
        alert("this id is already present please enter a new id")
      }
       
    })

    this.daTa.push({id:a,name:b,age:c,address:addre,contact_number:phone});
  }
    find(a:number, b:string,c:number,addre:string,phone:number){
      this.daTa.forEach((ele:any,index:any)=>{
        if(ele.name==b && ele.id==a && ele.age==c) this.daTa.splice(index,1);
      });
    }
    
  
}
