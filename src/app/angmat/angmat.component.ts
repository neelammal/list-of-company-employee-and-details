import { Component, OnInit } from '@angular/core';
import {FormControl } from '@angular/forms';
import { ExamodelService } from '../examodel.service';


@Component({
  selector: 'app-angmat',
  templateUrl: './angmat.component.html',
  styleUrls: ['./angmat.component.css']
})
export class AngmatComponent implements OnInit {
  public daTa2 :any= [];
  constructor(private empService2:ExamodelService){}
  ngOnInit(){
    this.daTa2 = this.empService2.getData();
  }
  
  public num1 : number = 0;
  public num2: number = 0;
  public num3: number = 0;
  public num4: number = 0;
  public num5: number = 0;
  public num6: number = 0;
  upDate1(){
   
    this.daTa2.forEach((ele:any,index:any)=>{
      if (ele.id == this.num6) {ele.days = this.num4;
      ele.salary = this. num5;}
     
    });
  }
 
  add(){
    this.num3 = this.num1+this.num2;
  }
  sub(){
    this.num3 = this.num1-this.num2;
  }
  mul(){
    this.num3 = this.num1*this.num2;
  }
  div(){
    this.num3 = this.num1/this.num2;
  } 

}
