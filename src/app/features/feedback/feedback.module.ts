import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsListComponent } from './components/blogs/blogs-list/blogs-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BlogItemCardComponent } from './components/blogs/blog-item-card/blog-item-card.component';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';
import { FeedbackPageComponent } from './pages/feedback-page/feedback-page.component';

@NgModule({
  declarations: [
    FeedbackPageComponent,
    FeedbackFormComponent,
    BlogsListComponent,
    BlogItemCardComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  exports: [FeedbackPageComponent],

})
export class FeedbackModule {}
