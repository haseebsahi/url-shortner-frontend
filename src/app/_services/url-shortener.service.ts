import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UrlShortenerService {
  private baseURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  shortenUrl(originalUrl: string): Observable<any> {
    return this.http.post(`${this.baseURL}/shorten`, { originalUrl });
  }

  getShortUrls(): Observable<any> {
    return this.http.get(`${this.baseURL}/list`);
  }

  getOriginalUrl(shortUrl: string): Observable<any> {
    return this.http.get(`${this.baseURL}/original/${shortUrl}`);
  }
}
