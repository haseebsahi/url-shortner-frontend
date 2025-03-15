import { Component, OnInit } from '@angular/core';
import { UrlShortenerService } from '../_services/url-shortener.service';
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
  serverDomain: string = 'http://localhost:3000/'; // 'bit.ly/';
  shortUrls: any[] = [];

  constructor(private urlShortenerService: UrlShortenerService) {}

  ngOnInit(): void {
    this.loadShortUrls();
  }

  loadShortUrls(): void {
    this.urlShortenerService.getShortUrls().subscribe((response) => {
      this.shortUrls = response.reverse();
    });
  }

  onUrlShortened(): void {
    this.loadShortUrls(); // Reload the list when a URL is shortened
  }

  redirectToOriginalUrl(shortUrl: string): void {
    const finalUrl = this.serverDomain + shortUrl;
    window.open(finalUrl, '_blank');
    this.loadShortUrls(); // Refresh the list after redirection
  }
}
