import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { TaskActions, Task, UnsafeTask } from '../../store';

@Component({
  selector: 'task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnChanges {
  @Input() cancelable = false;
  @Input() task: Task = null;
  @Output() close = new EventEmitter<void>();

  unsafeTask: UnsafeTask = {
    title: ''
  };

  constructor(private taskActions: TaskActions) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['task']) {
      this.unsafeTask.title = this.task.title;
      this.unsafeTask.description = this.task.description;
    }
  }

  public clear() {
    this.unsafeTask = {
      title: ''
    };
  }

  public save() {
    if (this.task) {
      this.taskActions.editTask({
        ...this.task,
        ...this.unsafeTask
      });
    } else {
      this.taskActions.createTask(this.unsafeTask);
    }

    if (this.close.observers.length) {
      this.close.emit();
    } else {
      this.clear();
    }
  }

}
