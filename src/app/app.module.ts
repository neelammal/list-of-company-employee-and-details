import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AngmatComponent } from './angmat/angmat.component';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import{MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select'; 
import { FormControl } from '@angular/forms';
import { SecondComponent } from './second/second.component';
import {MatButtonModule} from '@angular/material/button';
import { ExamodelService } from './examodel.service';
import { AppRoutingModule } from './app-routing.module';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import {MatTableModule} from '@angular/material/table';
import { FiveComponent } from './five/five.component';

@NgModule({
  declarations: [
    AppComponent,
    AngmatComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    FiveComponent
  ],
  imports: [ MatButtonModule,MatIconModule,MatTableModule,
BrowserModule,FormsModule, AppRoutingModule
  ],
  providers: [ExamodelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
