import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public id: number;
  constructor(
    private route: ActivatedRoute,
  ) {
    this.id = this.route.snapshot.params.id;
    this.route.params.subscribe(params => {
      // this.refreshContent(params.id);
      this.id = params.id;

    });
  }

  ngOnInit(): void {
  }

}
