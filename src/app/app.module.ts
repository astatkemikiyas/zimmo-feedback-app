import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FeedbackModule } from './features/feedback/feedback.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FeedbackModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
