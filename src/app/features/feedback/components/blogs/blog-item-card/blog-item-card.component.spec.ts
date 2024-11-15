import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogItemCardComponent } from './blog-item-card.component';

describe('BlogItemCardComponent', () => {
  let component: BlogItemCardComponent;
  let fixture: ComponentFixture<BlogItemCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogItemCardComponent]
    });
    fixture = TestBed.createComponent(BlogItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
