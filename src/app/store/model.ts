import { TaskList } from './api/task/task.model';

export interface AppState {
  tasks: TaskList;
}

export const INITIAL_STATE: AppState = {
  tasks: []
};
