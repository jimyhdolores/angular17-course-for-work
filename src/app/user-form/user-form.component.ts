import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OnlyTextDirective } from '../directives/only-text.directive';

@Component({
	selector: 'app-user-form',
	standalone: true,
	imports: [FormsModule, OnlyTextDirective],
	templateUrl: './user-form.component.html',
	styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
	texto = '';
	show(): void {
		console.log(this.texto);
	}
}
