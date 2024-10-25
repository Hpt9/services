import { Component, inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TasksService } from '../tasks.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss',
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  tasks: Task[] = []
  //selectedFilter = signal<string>('all');
  private tasksService = inject(TasksService)
  constructor(){
    this.tasks=this.tasksService.getSpecifiedTasks('ALL')
  }
  onChangeTasksFilter(filter: string) {
   // this.selectedFilter.set(filter);
  //  this.tasks=this.tasksService.getSpecifiedTasks(filter)
  console.log(filter)
  }
}
