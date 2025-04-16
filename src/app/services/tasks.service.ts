import { Task } from '../models/task.model';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private _tasks = signal<Task[]>([]);

  getTasks (): Task[] {
    return this._tasks();
  }

  addTask (name: string): void {
    const newTask: Task = {
      id: crypto.randomUUID(),
      name,
      completed: false
    };
    this._tasks.set([...this._tasks(), newTask]);
  }

  toggleTaskCompleted (id: string): void {
    this._tasks.set(this._tasks().map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  }

  deleteTask (id: string): void {
    this._tasks.set(this._tasks().filter(task => task.id !== id));
  }
}
