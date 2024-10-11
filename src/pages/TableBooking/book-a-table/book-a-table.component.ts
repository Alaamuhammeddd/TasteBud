import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-a-table',
  standalone: true,
  imports: [],
  templateUrl: './book-a-table.component.html',
  styleUrl: './book-a-table.component.css',
})
export class BookATableComponent {
  bookingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      contact: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      date: ['', Validators.required],
      time: ['', Validators.required],
      guests: [1, [Validators.required, Validators.min(1), Validators.max(20)]],
    });
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      console.log('Form Submitted!', this.bookingForm.value);
      // Add logic to handle booking submission
    }
  }
}
