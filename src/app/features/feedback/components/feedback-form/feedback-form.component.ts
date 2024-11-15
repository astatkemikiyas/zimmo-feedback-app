import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Feedback } from 'src/app/features/feedback/types/feedback';
import { FeedbackService } from '../../services/feedback.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss'],
})
export class FeedbackFormComponent {
  feedbackForm?: FormGroup;
  ratings: { src: string; rating: number }[] = [
    { src: 'assets/icons/neutral.png', rating: 1 },
    { src: 'assets/icons/smiley.png', rating: 2 },
    { src: 'assets/icons/slightly-happy.png', rating: 3 },
    { src: 'assets/icons/happy.png', rating: 4 },
    { src: 'assets/icons/very-happy.png', rating: 5 },
  ];
  ratingSubscription?: Subscription;
  submitted: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';
  loading: boolean = false;

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {
    if (this.ratingSubscription) {
      this.ratingSubscription.unsubscribe();
    }
  }

  private initForm(): void {
    this.feedbackForm = new FormGroup({
      rating: new FormControl(null, Validators.required),
      feedback: new FormControl('', Validators.required),
    });
  }

  public isFeedbackInvalid(): boolean {
    const feedbackControl = this.feedbackForm?.get('feedback');
    return !!(feedbackControl && feedbackControl.invalid && (feedbackControl.touched || this.submitted));
  }
  
  public isRatingSelected(rating: number): boolean {
    const selectedRating = this.feedbackForm?.controls['rating']?.value;
    return selectedRating === rating;
  }
  
  public submitForm(): void {
    if (!this.submitted) this.submitted = true;
    if (this.errorMessage) this.dismissError();

    if (this.feedbackForm?.valid) {
      const feedbackData: Feedback = {
        rating: this.feedbackForm.get('rating')?.value,
        feedback: this.feedbackForm.get('feedback')?.value,
      };

      this.feedbackService.submitFeedback(feedbackData).subscribe({
        next: () => {
          this.successMessage = 'Feedback met succes verzonden!';
          this.feedbackForm?.get('rating')?.disable();
        },
        error: (error) => {
          this.errorMessage = 'Er is iets misgegaan. Probeer het later opnieuw.';
          console.error('Error: ', error);
        },
        complete: () => {
          this.loading = false;
        },
      });
    } else {
      this.successMessage = '';
    }
  }

  public dismissError(): void {
    this.errorMessage = '';
  }

}
