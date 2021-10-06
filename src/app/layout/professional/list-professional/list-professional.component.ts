import { ProfessionalAddress } from './../../../shared/models/professional-address';
import { ProfessionalService } from '../../../shared/services/professional.service';
import { Professional } from '../../../shared/models/professional';
import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-list-professional',
  templateUrl: './list-professional.component.html',
  styleUrls: ['./list-professional.component.css'],
  animations: [routerTransition()]
})
export class ListProfessionalComponent implements OnInit {

  public speciality: string;
  public address: string;

  public cities: string[] = [];
  public specialities: string[] = [];
  public selectedName: string;
  public professionalsName: string[] = [];;
  // MatPaginator Inputs
  public pageLength: number;
  pageEvent: PageEvent;
  pageSize = 6;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public professionals: Professional[] = [];
  public professionalsAddress: ProfessionalAddress[] = [];
  constructor(
    private professionalService: ProfessionalService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.getProfessional();
    this.getProfessionalAddress();
  }

  getProfessional(): void {
    const aux = [];
    const auxName = [];
    this.professionalService.getProfessional().toPromise().then((professionals: Professional[]) => {
      this.pageLength = professionals.length;
      this.paginator._intl.itemsPerPageLabel = 'Itens por página';
      this.paginator._intl.nextPageLabel = 'Página seguinte';
      this.paginator._intl.previousPageLabel = 'Página anterior';
      this.paginator._intl.lastPageLabel = 'Última página';
      if (professionals.length > 0) {
        this.professionals = professionals;
        professionals.forEach((pro) => {
          aux.push(pro.speciality);
          auxName.push(pro.name);
        });
        this.specialities = [...new Set(aux)];
        this.professionalsName = [...new Set(auxName)];
      }
    }).catch((err) => console.error(err));
  }
  getProfessionalAddress(): void {
    const aux = [];
    this.professionalService.getProfessionalAddress().toPromise().then((professionalsAddress: ProfessionalAddress[]) => {
      if (professionalsAddress.length > 0) {
        professionalsAddress.forEach((pa) => {
          aux.push(pa.city);
        });
        this.professionalsAddress = professionalsAddress;
        this.cities = [...new Set(aux)];
      }
    }).catch((err) => console.error(err));
  }
  buscar() {
    this.professionalService.filterProfessionalsBySpecialityORCity(this.address, this.speciality,this.selectedName).toPromise().then((res) => {
      this.professionals = res;
    })

  }
  goToDetailProfessional(id: number) {
    this.router.navigate(['professional', id]);
  }
}
