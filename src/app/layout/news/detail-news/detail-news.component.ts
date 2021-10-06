import { NewsService } from './../../../shared/services/news.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from '../../../shared/models/news';
import { routerTransition } from '../../../router.animations';
import { environment } from '../../../../environments/environment.prod';

@Component({
  selector: 'app-detail-news',
  templateUrl: './detail-news.component.html',
  styleUrls: ['./detail-news.component.css'],
  animations: [routerTransition()]
})
export class DetailNewsComponent implements OnInit {

  public id: number;
  public news: News;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {
    this.id = this.route.snapshot.params.id;
    this.newsService.getNewsById(this.id).toPromise().then((news) => {
      if (news.body.includes('<img')) {
        const count = this.countOccurences(news.body, '/media/')
        for (let index = 0; index < count; index++) {
          news.body = news.body.replace('/media', `${environment.djangoUrl}media`);
        }
      }
      this.news = news;

    }).catch((err) => console.error(err))
  }

  ngOnInit(): void {

  }
  countOccurences(string: string, word: string): number {
    return string.split(word).length - 1;
  }
}
