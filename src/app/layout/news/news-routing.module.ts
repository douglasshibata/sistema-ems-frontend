import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailNewsComponent } from './detail-news/detail-news.component';

const routes: Routes = [
  {
    path: ':id',
    component: DetailNewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
