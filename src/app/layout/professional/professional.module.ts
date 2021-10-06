import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalRoutingModule } from './professional-routing.module';
import { DetailComponent } from './detail/detail.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ListProfessionalModule } from './list-professional/list-professional.module';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [
    DetailComponent,
  ],
  imports: [
    CommonModule,
    ProfessionalRoutingModule,
    NgSelectModule,
    FormsModule,
    TranslateModule,
    ListProfessionalModule,
    NgxMaskModule.forRoot(),
  ],
})
export class ProfessionalModule { }
