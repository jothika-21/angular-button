import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Work1Component } from './work1.component';

const routes: Routes = [
  {path:'work1',component:Work1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Work1RoutingModule { }
