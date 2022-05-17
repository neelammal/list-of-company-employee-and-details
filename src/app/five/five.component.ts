import { Component, OnInit } from '@angular/core';
import { ExamodelService } from '../examodel.service';
export interface PeriodicElement {
  name: string;
  id: number;
  marks: number;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 111, name: 'neelam ', marks: 90}
];

/**
 * @title Basic use of `<table mat-table>`
 */


@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.css']
})
export class FiveComponent implements OnInit {
  userName1 : any//string="neelam";
  displayedColumns: string[] = ['id', 'name', 'marks'];
  dataSour = ELEMENT_DATA;
  constructor( private _designservice:ExamodelService) { 
    this._designservice.userName.subscribe(uname=>{this.userName1 = uname})
  }
  updateUserName(uname1:any){
    //this.userName1=uname1.value
    this._designservice.userName.next(uname1.value)
  }
  ngOnInit(): void {
  }

}
