import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UrlShortenerService {
  private apiUrl = 'http://localhost:3000/shortener';

  constructor(private http: HttpClient) {}

  shortenUrl(originalUrl: string): Observable<any> {
    return this.http.post(this.apiUrl, { originalUrl });
  }

  getShortUrls(): Observable<any> {
    console.log('apiUrl: ', this.apiUrl);
    return this.http.get(this.apiUrl);
  }

  getOriginalUrl(shortUrl: string): Observable<any> {
    const url = `${this.apiUrl}/${shortUrl}`;
    console.log('url: ', url);
    return this.http.get(url);
  }
}
