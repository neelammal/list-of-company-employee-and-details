import { Component, OnInit ,Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';
import { intern } from '../employee';
import { MatIconRegistry } from '@angular/material/icon'; 
import {DomSanitizer} from '@angular/platform-browser';
import { ExamodelService } from '../examodel.service';
const THUMBUP_ICON =
  `
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.` +
  `44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5` +
  `1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
  </svg>
`;




@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit,OnChanges , DoCheck ,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  displayedColumns: string[] = ['id', 'name', 'marks'];
  userName1 :any;//: string="neelam";
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private _designservice:ExamodelService) { 
    console.log("constructor is called")
    this._designservice.userName.subscribe(uname=>{
      this.userName1=uname
    })
    iconRegistry.addSvgIconLiteral('thumbs-up', sanitizer.bypassSecurityTrustHtml(THUMBUP_ICON));
  }
  updateUserName(uname1:any){
    //this.userName1=uname1.value
    this._designservice.userName.next(uname1.value)
  }
  name:string="";
  name1:string="";
@Input() newName: string="";
@Input() winnerP :intern[]=[];
 


ngOnChanges(changes: SimpleChanges): void {
  alert(' A new instructor is called')
  
}
  ngOnInit(): void {
    console.log('ngOninit is called')
    //this.name1=this.newName
    

  }
  ngDoCheck() {
    console.log('docheckis cLLED')
  }
  ngAfterContentInit(): void {
    console.log('after content is cLLED')
  }
  ngAfterContentChecked(): void {
    console.log('after content check is cLLED')
  }
  ngAfterViewChecked(): void {
    console.log('after view check is cLLED')
  }
  ngAfterViewInit(): void {
    console.log('after view init is cLLED') 
  }
  ngOnDestroy(): void {
    console.log('destroy is cLLED')
    alert("component is destroy")
  }

}
