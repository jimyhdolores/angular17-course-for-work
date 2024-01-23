import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from '../task/task.component';
import { TaskListComponent } from './task-list.component';

@NgModule({
	declarations: [TaskListComponent],
	imports: [CommonModule, FormsModule, TaskComponent],
	exports: [TaskListComponent]
})
export class TaskListModule {}
