import { Component } from '@angular/core';

@Component({
	selector: 'app-user-form',
	standalone: true,
	templateUrl: './user-form.component.html',
	styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
	inputMessage = 'Ingresa tus nombres';
	disabledButton = false;

	input(event: Event): void {
		const inputEvent = event.currentTarget as HTMLInputElement;
		console.log('evento input...', inputEvent.value);
	}

	clickSaveData(): void {
		console.log('Guardando datos...');
	}
}
