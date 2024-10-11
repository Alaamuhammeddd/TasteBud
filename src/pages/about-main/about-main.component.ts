import { Component } from '@angular/core';
import { AboutHeroComponent } from '../about-hero/about-hero.component';
import { AboutContent1Component } from '../about-content1/about-content1.component';
import { AboutContent2Component } from '../about-content2/about-content2.component';
import { TestimonialComponent } from '../testimonial/testimonial.component';

@Component({
  selector: 'app-about-main',
  standalone: true,
  imports: [
    AboutHeroComponent,
    AboutContent1Component,
    AboutContent2Component,
    TestimonialComponent,
  ],
  templateUrl: './about-main.component.html',
  styleUrl: './about-main.component.css',
})
export class AboutMainComponent {}
