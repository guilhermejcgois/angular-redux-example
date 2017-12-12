import { combineReducers } from 'redux';
import { taskReducer } from './api/task/task.reducer';
import { AppState } from './model';

export const rootReducer = combineReducers<AppState>({
  tasks: taskReducer
});
