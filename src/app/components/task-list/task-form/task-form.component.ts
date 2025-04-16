import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TasksService } from '../../../services/tasks.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.component.html',
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
