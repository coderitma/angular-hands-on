import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostInterface } from '../interfaces/post-interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseURL: string = "https://jsonplaceholder.typicode.com";

  constructor(private http: HttpClient) { }

  public all(): Observable<PostInterface[]> {
    return this.http.get<PostInterface[]>(`${this.baseURL}/posts`);
  }
}
