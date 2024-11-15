import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http: HttpClient) { }

  public getRandomImage() {
    const url = 'https://picsum.photos/240/130';
    return this.http.get(url, { responseType: 'blob' });
  }
}
