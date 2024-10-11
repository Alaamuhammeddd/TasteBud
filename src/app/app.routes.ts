// import { Routes } from '@angular/router';

// export const routes: Routes = [];
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home page/home/home.component';
import { AboutMainComponent } from '../pages/about-main/about-main.component';
import { BookATableComponent } from '../pages/TableBooking/book-a-table/book-a-table.component';

// Define routes
export const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent }, // Default route (Home)
  { path: 'about', component: AboutMainComponent }, // About route
  // { path: '**', redirectTo: '' }, // Wildcard route redirects to Home
  { path: 'booking', component: BookATableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
