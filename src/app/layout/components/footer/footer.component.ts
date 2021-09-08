import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  year: number;
  version = '1.0.0';
  constructor() { }

  ngOnInit(): void {
    const dateNow = new Date();
    this.year = dateNow.getFullYear();
  }

}
