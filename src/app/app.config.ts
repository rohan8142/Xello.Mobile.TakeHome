import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { collegeListReducer } from './college-list/college-list.reducer';
import { CollegeListEffects } from './college-list/college-list.effects';
import { provideHttpClient } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({ collegeList: collegeListReducer }),
    provideEffects([CollegeListEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: false }),
    provideHttpClient(),
    
  ]
};
