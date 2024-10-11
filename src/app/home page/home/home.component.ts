import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { AboutComponent } from '../about/about.component';
import { ServicesComponent } from '../services/services.component';
import { ContentComponent } from '../content/content.component';
import { TestimonialComponent } from '../../../pages/testimonial/testimonial.component';
import { BlogComponent } from '../blog/blog.component';
import { HeroComponent } from '../hero/hero.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    HeroComponent,
    MenuComponent,
    AboutComponent,
    ServicesComponent,
    ContentComponent,
    TestimonialComponent,
    BlogComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
