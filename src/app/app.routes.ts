import { Routes } from '@angular/router';
// Components
import { HomeComponent } from './home/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
