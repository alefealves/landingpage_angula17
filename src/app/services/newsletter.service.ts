import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface NewsletterResponse {
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  private endpontUrl = "";

  constructor(private http: HttpClient) { }

  sendData(name: string, email: string): Observable<NewsletterResponse> {
    const data = {name,email}

    return this.http.post<NewsletterResponse>(this.endpontUrl, data);
  }
}
