import { Component, Input } from '@angular/core';

import { Task } from '../../store';

@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {
  @Input() task: Task;

  editing = false;

  constructor() { }

}
