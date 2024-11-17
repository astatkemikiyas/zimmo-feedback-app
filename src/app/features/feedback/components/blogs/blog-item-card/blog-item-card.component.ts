import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../services/blog.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-blog-item-card',
  templateUrl: './blog-item-card.component.html',
  styleUrls: ['./blog-item-card.component.scss'],
})
export class BlogItemCardComponent implements OnInit {
  imageUrl: string | null = null;
  fallbackImageUrl = 'assets/images/blog-fallback-image.png';
  isLoading = true;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.fetchImage();
  }

  private fetchImage(): void {
    this.blogService.getRandomImage()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe({
        next: (response: Blob) => {
          this.imageUrl = URL.createObjectURL(response);
        },
        error: () => {
          this.imageUrl = this.fallbackImageUrl;
        }
      });
}

  public onError() {
    this.imageUrl = this.fallbackImageUrl;
  }
}
