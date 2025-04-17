import { Component, inject, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { TasksService } from '../../../services/tasks.service';
import { Task } from '../../../models/task.model';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  public task = input.required<Task>();
  private _tasksService = inject(TasksService);

  toggleCompleted(): void {
    this._tasksService.toggleTaskCompleted(this.task().id);
  }

  deleteTask(): void {
    this._tasksService.deleteTask(this.task().id);
  }
}
