import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { Professional } from '../../../shared/models/professional';
import { ProfessionalService } from '../../../shared/services/professional.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  animations: [routerTransition()]
})
export class DetailComponent implements OnInit {

  public id: number;
  public professional: Professional;

  constructor(
    private route: ActivatedRoute,
    private profissionalService: ProfessionalService
  ) {
    this.id = this.route.snapshot.params.id;
    this.profissionalService.getProfessionalById(this.id).toPromise().then((pro) => {
      this.professional = pro;
      console.log(this.professional);
    }).catch((err) => console.error(err))
  }

  ngOnInit(): void {

  }

}
