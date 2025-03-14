import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShortenUrlComponent } from "./shorten-url/shorten-url.component";
import { UrlListComponent } from "./url-list/url-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShortenUrlComponent, UrlListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'url-shortner-frontend';
}
