import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { PostInterface } from './interfaces/post-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts: PostInterface[];
  baseURL: string = "https://jsonplaceholder.typicode.com";

  constructor(private http: HttpClient) {
    this.posts = [];
  }

  ngOnInit(): void {
    this.getPost();
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  public getPost() {
    this.http.get<PostInterface[]>(`${this.baseURL}/posts`)
      .pipe(catchError(this.handleError))
      .subscribe((response: PostInterface[]) => {
        this.posts = response;
      })
  }
}
