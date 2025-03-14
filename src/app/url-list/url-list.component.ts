import { Component, OnInit } from '@angular/core';
import { UrlShortenerService } from '../url-shortener.service';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-url-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './url-list.component.html',
  styleUrl: './url-list.component.css',
})
export class UrlListComponent implements OnInit {
  shortUrls: any[] = [];

  constructor(private urlShortenerService: UrlShortenerService) {}

  ngOnInit(): void {
    this.loadShortUrls();
  }

  loadShortUrls(): void {
    this.urlShortenerService.getShortUrls().subscribe((response) => {
      this.shortUrls = response;
    });
  }

  onUrlShortened(): void {
    this.loadShortUrls(); // Reload the list when a URL is shortened
  }

  redirectToOriginalUrl(shortUrl: string): void {
    this.urlShortenerService.getOriginalUrl(shortUrl).subscribe((response) => {
      const originalUrl = response.url;
      window.open(originalUrl, '_blank');
      this.loadShortUrls(); // Refresh the list after redirection
    });
  }
}
