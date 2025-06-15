import { createReducer, on } from '@ngrx/store';
import * as CollegeListActions from './college-list.actions';
import { College } from './college-list.model';

export interface CollegeListState {
  colleges: College[];
  filteredColleges: College[]; 
  loading: boolean;
  error: any;
}

export const initialState: CollegeListState = {
  colleges: [],
  filteredColleges: [],
  loading: false,
  error: null,
};

export const collegeListReducer = createReducer(
  initialState,
  on(CollegeListActions.loadColleges, (state) => ({ ...state, loading: true, error: null })),
  on(CollegeListActions.loadCollegesSuccess, (state, { colleges }) => ({ ...state, colleges,filteredColleges: colleges, loading: false })),
  on(CollegeListActions.loadCollegesFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(CollegeListActions.filterColleges, (state, { query }) => ({
  ...state,
  filteredColleges: state.colleges.filter(college =>
    college.name.toLowerCase().includes(query.toLowerCase())
  )
}))
);
