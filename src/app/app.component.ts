import { Component } from '@angular/core';
import { TaskListModule } from './task-list/task-list.module';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [TaskListModule],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {}
