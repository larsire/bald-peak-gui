import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notes-details',
  templateUrl: './notes-details.component.html',
  styleUrls: ['./notes-details.component.sass']
})
export class NotesDetailsComponent implements OnInit {

  constructor(private newsService: NewsService, private router: Router, private activeRoute: ActivatedRoute) { 
  }
  id: string;
  newsDetails = {};

  ngOnInit() {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.newsService.getNewsById(this.id).subscribe((news: any) => {
      this.newsDetails = news;
    });
  }

  goBack() {
    this.router.navigate(['notes'])
  }
}
