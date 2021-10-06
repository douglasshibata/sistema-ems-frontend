import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { News } from '../models/news';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient: HttpClient) { }

  getNews(): Observable<News[]> {
    return this.httpClient.get<News[]>(`${API}news/`);
  }
  getNewsById(id: number): Observable<News> {
    return this.httpClient.get<News>(`${API}news/${id}/`);
  }
}
