import { Component, OnInit } from '@angular/core';
import { elementAt, Observable, of } from 'rxjs';
import { intern } from '../employee';
import { ExamodelService } from '../examodel.service';




@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  public daTa3: intern[] = [];
  public neW: intern[] = [];
  public newData:number[]=[];
  
  winner:intern[]=[];
  vari:number=0;
  vari1:number=0;
  index1:number=0;
  xyz: intern[] = [];
  public naMe: string="ABC";
  showLifeCycle:boolean=true;
  displayedColumns: string[] = ['id', 'name', 'marks'];
  expandedElement: intern[]=[] ;
  constructor(private empService:ExamodelService){}
  ngOnInit(): void{
    
    this.newdata();
  }
  delet(){
    this.showLifeCycle= !this.showLifeCycle;
  }
  change(){
    if (this.naMe=="ABC"){
      this.naMe="XYZ"
    }
    else{
    this.naMe="ABC"}
  }
  public minimarks:number=0;
  newdata(): void {
    this.empService.newdata()
        .subscribe( daTa3 => this.daTa3 = daTa3);
  }
  top3(){
      
        this.daTa3.forEach((ele:any,index:any)=>{
          if (ele.marks >= this.minimarks ) {this.newData.push(index+1);
          this.xyz .push( this.daTa3[index])
        
        console.log(this.xyz);}


                 });
              this.vari= this.xyz[0].marks;
              for(var i=0;i<this.xyz.length;i++){
              
              this.vari1=this.xyz[i].marks;
              if (this.vari < this.vari1){
                this.vari=this.vari1
                this.index1=i
              }

              console.log("largest element is", this.vari,"index is",this.index1)
            }     
      
        this.winner.push(this.xyz[this.index1]);
         console.log(this.winner)



  }
    
    
      

        
}
/*onAdd(a:number, b:string,c:number,addre:string,phone:number){
  this.daTa.push({id:a,name:b,age:c,address:addre,contact_number:phone});
}
  find(a:number, b:string,c:number,addre:string,phone:number){
    this.daTa.forEach((ele:any,index:any)=>{
      if(ele.name==b && ele.id==a && ele.age==c) this.daTa.splice(index,1);
    });
  }*/