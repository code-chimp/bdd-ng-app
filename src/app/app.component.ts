import { Component } from '@angular/core';
import { TaskFormComponent } from './components/task-form.component';
import { TaskListComponent } from './components/task-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskFormComponent, TaskListComponent],
  templateUrl: './app.component.html',
})
export class AppComponent { }
