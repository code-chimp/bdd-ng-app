import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TasksService } from '../../../services/tasks.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  private _tasksService = inject(TasksService);

  taskForm = new FormGroup({
    name: new FormControl<string>('', Validators.required),
  });

  handleSubmit() {
    if (this.taskForm.valid) {
      this._tasksService.addTask(this.taskForm.value.name as string);
      this.taskForm.reset();
    }
  }
}
