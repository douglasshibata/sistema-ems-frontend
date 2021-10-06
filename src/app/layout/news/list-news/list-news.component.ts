import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { News } from '../../../shared/models/news';
import { NewsService } from '../../../shared/services/news.service';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.css']
})
export class ListNewsComponent implements OnInit,AfterViewInit  {

  // MatPaginator Inputs
  public pageLength: number;
  pageEvent: PageEvent;
  pageSize = 6;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public news: News[] = [];
  public cardColor: string[] = ['blue', 'green', 'yellow', 'brown', 'purple', 'orange']
  constructor(
    private newsService: NewsService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getNews();
  }

  ngAfterViewInit() {
    this.randomColor();
    this.cdr.detectChanges();
  }

  getNews(): void {
    this.newsService.getNews().toPromise().then((news) => {
      this.pageLength = news.length;
      this.paginator._intl.itemsPerPageLabel = 'Itens por página';
      this.paginator._intl.nextPageLabel = 'Página seguinte';
      this.paginator._intl.previousPageLabel = 'Página anterior';
      this.paginator._intl.lastPageLabel = 'Última página';
      this.news = news;
    }).catch((err) => console.error(err));
  }

  goToDetailNews(id: number) {
    this.router.navigate(['news', id]);
  }

  randomColor() {
    const number = Math.floor(Math.random() * (this.cardColor.length - 1));    
    return this.cardColor[number]
  }

}
