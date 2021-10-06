import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { ListNewsModule } from './list-news/list-news.module';
import { DetailNewsComponent } from './detail-news/detail-news.component';


@NgModule({
  declarations: [
    DetailNewsComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    ListNewsModule
  ]
})
export class NewsModule { }
