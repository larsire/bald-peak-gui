import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.sass']
})
export class NotesListComponent implements OnInit {

  constructor(private newsService: NewsService, private router: Router) { }

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

  showDetails(news) {
    this.router.navigate(['notes', news.id, 'details'])
  }
}
