import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../../model';
import { Task, UnsafeTask } from './task.model';

@Injectable()
export class TaskActions {
  static COMPLETED_TASK = 'COMPLETED_TASK';
  static CREATE_TASK = 'CREATE_TASK';
  static DROP_TASK = 'DROP_TASK';
  static EDIT_TASK = 'EDIT_TASK';

  constructor(private ngRedux: NgRedux<AppState>) { }

  createTask(task: UnsafeTask): void {
    this.ngRedux.dispatch({
      type: TaskActions.CREATE_TASK,
      payload: task
    });
  }

  dropTask(taskId: string): void {
    this.ngRedux.dispatch({
      type: TaskActions.DROP_TASK,
      payload: taskId
    });
  }

  editTask(task: Task): void {
    this.ngRedux.dispatch({
      type: TaskActions.EDIT_TASK,
      payload: task
    });
  }

  completeTask(taskId: string, completed = true): void {
    this.ngRedux.dispatch({
      type: TaskActions.COMPLETED_TASK,
      payload: taskId
    });
  }

}
