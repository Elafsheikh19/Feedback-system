import { Injectable } from '@angular/core';

export interface Feedback {
  name: string;
  email: string;
  phone: string;
  gender: string;
  category: string;
  rating: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class FeedbackService {
  private storageKey = 'feedbacks';

  getAll(): Feedback[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  add(feedback: Feedback): void {
    const feedbacks = this.getAll();
    feedbacks.push(feedback);
    localStorage.setItem(this.storageKey, JSON.stringify(feedbacks));
  }

  delete(index: number): void {
    const feedbacks = this.getAll();
    feedbacks.splice(index, 1);
    localStorage.setItem(this.storageKey, JSON.stringify(feedbacks));
  }
}
