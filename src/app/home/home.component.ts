import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  constructor(private newsService: NewsService) { }

  newsList: any[];

  ngOnInit() {
    this.newsService.getNews().subscribe((newsList: any[]) => {
      this.newsList = newsList;
    });
  }

  trackByFunction(index, item) {
    if (!index) {
      return null;
    }
    return item.id;
  }
}
