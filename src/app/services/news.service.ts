import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  serverURL = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getNewsById(id) {
    return this.http.get(this.serverURL + '/news/' + id);
  }

  getNews() {
    return this.http.get(this.serverURL + '/news');
  }
}
