import { Component, inject } from '@angular/core';
import { TaskItemComponent } from './task-item.component';
import { Task } from '../models/task.model';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskItemComponent],
  templateUrl: './task-list.component.html'
})
export class TaskListComponent {
  private _tasksService = inject(TasksService);

  get tasks (): Task[] {
    return this._tasksService.getTasks();
  }
}
