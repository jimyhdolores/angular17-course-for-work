import { NgClass, NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IPriority, IStatus, ITask, StatusType } from '../models/components.interface';
import { TaskComponent } from '../task/task.component';

@Component({
	selector: 'app-task-list-only-stadalone',
	standalone: true,
	imports: [FormsModule, TaskComponent, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgClass, NgStyle],
	templateUrl: './task-list-only-stadalone.component.html',
	styleUrl: './task-list-only-stadalone.component.scss'
})
export class TaskListOnlyStadaloneComponent {
	readonly LIST_STATES: StatusType[] = ['COMPLETED', 'PROGRESS', 'PENDING'];
	readonly LIST_OBJECT_STATES: IStatus[] = [
		{ key: 'COMPLETED', text: 'Completado' },
		{ key: 'PROGRESS', text: 'En progreso' },
		{ key: 'PENDING', text: 'Pendiente' }
	];

	readonly PRYORITY_LIST: IPriority[] = [
		{ key: 'HIGH', text: 'Alta' },
		{ key: 'MEDIUM', text: 'Media' },
		{ key: 'LOW', text: 'Baja' }
	];

	list_task: ITask[] = [
		{
			priority: 'HIGH',
			task: 'Aprender TypeScript',
			status: 'PENDING'
		},
		{
			priority: 'LOW',
			task: 'Mensajear a mi ex :v',
			status: 'PENDING'
		}
	];

	colorText = 'white';
	inputValue = 'aaa';

	trackByItems(index: number, item: ITask) {
		return index;
	}

	refresh(): void {
		this.list_task = [
			{
				priority: 'HIGH',
				task: 'Aprender TypeScript',
				status: 'PENDING'
			},
			{
				priority: 'LOW',
				task: 'Mensajear a mi ex :v',
				status: 'PENDING'
			}
		];
	}

	updateTask(): void {
		this.list_task[1] = {
			priority: 'LOW',
			task: this.inputValue,
			status: 'PENDING'
		};
		// this.list_task[1].status = 'COMPLETED';
	}

	changeStatus(task: ITask): void {
		this.colorText = task.status === 'COMPLETED' ? 'green' : 'white';
	}
}
