import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalRoutingModule } from './professional-routing.module';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    DetailComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ProfessionalRoutingModule
  ]
})
export class ProfessionalModule { }
