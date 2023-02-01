import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) { }
  nav(value: any) {
    if ("home1" === value) {
      this.router.navigateByUrl("/home1")
    } else if ("work" === value) {
      this.router.navigateByUrl("/work/work")
    }
    else if ("work1" === value) {
      this.router.navigateByUrl("/work1/work1")
    }
  }
}
