import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { College } from './college-list.model';
import * as CollegeListActions from './college-list.actions';
import * as CollegeListSelectors from './college-list.selectors';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ChangeDetectionStrategy } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-college-list',
  standalone: true,
  imports: [CommonModule, FormsModule,ScrollingModule],
  templateUrl: './college-list.component.html',
  styleUrl: './college-list.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollegeListComponent {
  colleges$: Observable<College[]> = this.store.select(CollegeListSelectors.selectColleges);
  loading$: Observable<boolean> = this.store.select(CollegeListSelectors.selectCollegesLoading);
  error$: Observable<any> = this.store.select(CollegeListSelectors.selectCollegesError);

  filter = ''

  // Performance anti-pattern: Unnecessary subscription in addition to async pipe
  // private _collegesSub = this.colleges$.subscribe();
  // we removed the subscription because it is not needed when using the async pipe. we removed this because it can lead to memory leaks and unnecessary change detection cycles
  constructor(private store: Store, private router: Router) {}



  ngOnInit() {
    // Performance anti-pattern: Dispatching action on every change detection cycle
    // setInterval(() => {
    //   this.store.dispatch(CollegeListActions.loadColleges());
    // }, 1000);
    this.store.dispatch(CollegeListActions.loadColleges());


  }


  // Performance anti-pattern: Unused, but triggers change detection
  trackById(index: number, item: College) {
    // return item.id + Math.random(); // Should just be item.id
    return item.id // Using item.id is sufficient for tracking by id; 
  }



  onRowClick(college: College) {
    this.router.navigate(['/college', college.id]);
  }
}
