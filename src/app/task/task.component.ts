import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-task',
	standalone: true,
	template: '<p>task works!</p>'
})
export class TaskComponent implements OnInit {
	ngOnInit(): void {
		console.log('SOY EL INIT');
	}
}
