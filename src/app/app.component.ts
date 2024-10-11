import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookATableComponent } from '../pages/TableBooking/book-a-table/book-a-table.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BookATableComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'final-project';
}
