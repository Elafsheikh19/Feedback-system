import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FeedbackService, Feedback } from '../feedback.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'feedback-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.html',
  styleUrls:['./form.css']
})
export class Form {
  feedback: Feedback = {
    name: '',
    email: '',
    phone: '',
    gender: '',
    category:'',
    rating: '',
    message: ''
  };

  constructor(private feedbackService: FeedbackService, private router: Router) {}

 onSubmit(form: NgForm) {
  if (!form.valid) {
    alert('!please fill all the fields')
    return; 
  }

  this.feedbackService.add(this.feedback);
  this.router.navigate(['/list']);
  form.resetForm(); 
}


  resetForm() {
    this.feedback = {
      name: '',
      email: '',
      phone: '',
      gender: '',
      category:'',
      rating: '',
      message: ''
    };
  }
}
