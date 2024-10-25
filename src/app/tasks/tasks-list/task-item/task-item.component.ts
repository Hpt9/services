import { Component, computed, inject, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Task, TaskStatus } from '../../task.model';

import { TasksService } from '../../tasks.service';
@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss',
})
export class TaskItemComponent {
  private tasksService = inject(TasksService)
  task = input.required<Task>();
  // taskStatus = computed(() => {
  //   switch (this.task().status) {
  //     case 'OPEN':
  //       return 'Open';
  //     case 'IN_PROGRESS':
  //       return 'Working on it';
  //     case 'DONE':
  //       return 'Completed';
  //     default:
  //       return 'Open';
  //   }
  // });
  getShort(){
    switch (this.task().status) {
          case 'OPEN':
            return 'Open';
          case 'IN_PROGRESS':
            return 'Working on it';
          case 'DONE':
            return 'Completed';
          default:
            return 'Open';
        }
  }
  onChangeTaskStatus(status: string) {
    let newStatus: TaskStatus = 'OPEN';

    switch (status) {
      case 'OPEN':
        newStatus = 'OPEN';
        break;
      case 'IN_PROGRESS':
        newStatus = 'IN_PROGRESS';
        break;
      case 'DONE':
        newStatus = 'DONE';
        break;
      default:
        break;
    }
    
    
    this.tasksService.changeSatusOfTask(this.task().id,newStatus)
  }
}
