import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';
import { ListProfessionalComponent } from './list-professional.component';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    ListProfessionalComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    TranslateModule,
    MatPaginatorModule,
  ],
  exports: [ListProfessionalComponent]
})
export class ListProfessionalModule { }
