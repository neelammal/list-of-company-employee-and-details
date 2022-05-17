import { Component } from '@angular/core';
import { Employee } from './employee';
import { ExamodelService } from './examodel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
}
  /*public daTa :any= [];
  constructor(private empService:ExamodelService){}
  ngOnInit(){
    this.daTa = this.empService.getData();
  }
  title = 'sample';
  public nuM:number=0;
  public woRd: string="";
  public wo:number=0;

  public num1 : number = 0;
  public num2: number = 0;
  public num3: number = 0;
  aBc : Employee [] = [
    {id : 1, name : "neelam",age:10},
    {id : 2, name : "hunavi",age:20},
    {id: 3, name: "raam"  ,age:30 }
  ];
  onAdd(a:number, b:string,c:number){
    this.aBc.push({id:a,name:b,age:c});
  }
    find(a:number, b:string,c:number){
      this.aBc.forEach((ele,index)=>{
        if(ele.name==b && ele.id==a && ele.age==c) this.aBc.splice(index,1);
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
  }/*
   // let xyz = this.aBc.filter(ele => ele.name=="neelam" );
    //let dce = this.aBc.splice(0,2);
    //let mnp = this.aBc.pop();
   //aBc.forEach((element,index)=>{
    //if(element.name=="neelam") aBc.splice(index,1);
     //this.aBc.splice(2,0,{id:40,name:"nee"});
//}); 
   
  
 

/*  var numbers: Employee[]=[{id:1,name:"number"},{id:2,name:"hunavi"}]
  numbers.push({id:3,name:"sanjeev"})
  
  let lucky = numbers.filter(h => h.id(!=2));
  console.log(lucky);

  abc: string='';
  eNo: Employee = {  
    id: 10, name : 'ram'
  }
  public x:number=10;
  public y: number=12;
  
  fruits: string[]=["cherry" ,"banana","apple","mango"];
  frD  : boolean=true;
  num: number=4;
  public xyz: string[]='';
  hasError:boolean=false;
  public succesCl="text-succ";
  public titleStyles={"text-succ":!false};
  onClick(){
    this.xyz.push("neelam");
  }
  //calculator
  
}
let a: number=5;
if(a>0){
  console.log("a is positive number");

}
else{
  console.log("a is negative number");
}
for(let i:number=1;i<=10;i++){
  console.log(a+"x"+i+'='+ a*i)

}
var product : string="book";
var discount:number;
product=prompt("enter a product name:");
switch(a){
  case  5:
    alert("50% discount");
    break;
    case 10:
    alert("10% discount");
    break
    default:
      alert("no dicount");
};*/
