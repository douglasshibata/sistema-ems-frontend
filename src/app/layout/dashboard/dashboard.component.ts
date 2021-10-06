import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
    window.scroll(0, 0)
  }

  scrollContent(): void {
    window.scroll(0, 550)
  }
}
