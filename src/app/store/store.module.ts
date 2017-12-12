import { NgModule } from '@angular/core';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import {
  applyMiddleware,
  createStore,
  Store
} from 'redux';
import { createLogger } from 'redux-logger';

import { rootReducer } from './reducers';
import { AppState, INITIAL_STATE } from './model';
import { TaskActions } from './api/task/task.actions';

export const store: Store<AppState> = createStore<AppState>(
  rootReducer,
  INITIAL_STATE,
  applyMiddleware(createLogger())
);

@NgModule({
  imports: [ NgReduxModule ],
  providers: [TaskActions]
})
export class StoreModule {
  constructor(ngRedux: NgRedux<AppState>) {
    ngRedux.provideStore(store);
  }
}
