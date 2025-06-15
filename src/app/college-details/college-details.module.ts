import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { collegeDetailsRoutes } from './college-details.routes';
import { CollegeDetailsComponent } from './college-details.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    CollegeDetailsComponent, 
    RouterModule.forChild(collegeDetailsRoutes)
  ]
})
export class CollegeDetailsModule {}
