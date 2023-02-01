import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Home1Component } from './home1/home1.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home1', component: Home1Component },
  { path: 'work', loadChildren: () => import('./../work/work.module').then(k => k.WorkModule) },
  { path: 'work1', loadChildren: () => import('./../work1/work1.module').then(l => l.Work1Module) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
