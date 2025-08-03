import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackService, Feedback } from '../feedback.service';

@Component({
  selector: 'feedback-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.html',
})
export class List implements OnInit {
  feedbacks: Feedback[] = [];

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit() {
    this.feedbacks = this.feedbackService.getAll();
  }

  deleteFeedback(index: number) {
    this.feedbackService.delete(index);
    this.feedbacks = this.feedbackService.getAll(); 
  }
}
