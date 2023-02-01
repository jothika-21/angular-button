import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkComponent } from './work.component';

const routes: Routes = [
  {path:'work',component:WorkComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkRoutingModule { }
