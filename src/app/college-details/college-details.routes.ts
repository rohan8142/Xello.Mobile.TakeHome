import { Routes } from '@angular/router';
import { CollegeDetailsComponent } from './college-details.component';

export const collegeDetailsRoutes: Routes = [
  {
    path: ':id',
    component: CollegeDetailsComponent
  }
];