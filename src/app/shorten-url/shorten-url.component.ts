import { Component, EventEmitter, Output } from '@angular/core';
import { UrlShortenerService } from '../url-shortener.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shorten-url',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './shorten-url.component.html',
  styleUrl: './shorten-url.component.css',
})
export class ShortenUrlComponent {
  originalUrl: string = '';
  shortUrl: string = '';

  @Output() urlShortened: EventEmitter<void> = new EventEmitter<void>();

  constructor(private urlShortenerService: UrlShortenerService) {}

  shortenUrl() {
    this.urlShortenerService
      .shortenUrl(this.originalUrl)
      .subscribe((response) => {
        this.shortUrl = response.shortUrl;
        this.urlShortened.emit(); // Emit event after URL is shortened
      });
  }
}
