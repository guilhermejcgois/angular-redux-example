import { Action, Reducer } from 'redux';

import { TaskActions } from './task.actions';
import { createTask, TaskList } from './task.model';

export const taskReducer: Reducer<TaskList> = (state: TaskList = [], action: Action): TaskList => {
  switch (action.type) {
    case TaskActions.CREATE_TASK:
      return [
        ...state,
        createTask(action['payload'])
      ];
    case TaskActions.EDIT_TASK:
      let newTasks = [];
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === action['payload'].id) {
          newTasks = [...newTasks, action['payload']];
        } else {
          newTasks = [...newTasks, state[i]];
        }
      }
      return newTasks;
    case TaskActions.COMPLETED_TASK: // TODO Implement COMPLETED_TASK reducer
    case TaskActions.DROP_TASK: // TODO Implement DROP_TASK reducer
  }

  return state;
};
