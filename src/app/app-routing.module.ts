import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AngmatComponent } from './angmat/angmat.component';
import { SecondComponent } from './second/second.component';
import { AppComponent } from './app.component';
import { ThirdComponent } from './third/third.component';


const routes: Routes = [
  { path: 'detail of employee', component: SecondComponent },
  { path: 'calculator', component: AngmatComponent },
  { path: 'perfromance', component: ThirdComponent }   ,
  { path: '**', component: SecondComponent },
  { path: '', redirectTo: '/SecondComponent', pathMatch: 'full' },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
