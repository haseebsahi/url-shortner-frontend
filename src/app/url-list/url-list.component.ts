import { Component, OnInit } from '@angular/core';
import { UrlShortenerService } from '../url-shortener.service';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-url-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './url-list.component.html',
  styleUrl: './url-list.component.css'
})
export class UrlListComponent implements OnInit {
  shortUrls: any[] = [];

  constructor(private urlShortenerService: UrlShortenerService) { }

  ngOnInit(): void {
    this.urlShortenerService.getShortUrls().subscribe(response => {
      this.shortUrls = response;
    });
  }
}
