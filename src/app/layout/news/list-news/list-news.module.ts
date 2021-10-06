import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListNewsComponent } from './list-news.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    ListNewsComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MatPaginatorModule
  ],
  exports:[ListNewsComponent]
})
export class ListNewsModule { }
