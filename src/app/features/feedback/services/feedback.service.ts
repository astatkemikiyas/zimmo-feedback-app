import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';
import { Feedback } from 'src/app/features/feedback/types/feedback';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  // Uncomment the line below to intentionally simulate an error response by using an incorrect URL.
  // private apiUrl = 'https://jsonpladceholder.typicode.com';
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(
    private http: HttpClient,
    private errorHandler: ErrorHandlerService
  ) {}

  public submitFeedback(feedback: Feedback): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/posts`, feedback).pipe(
      catchError((error) => this.errorHandler.handleError(error))
    );
  }
}
