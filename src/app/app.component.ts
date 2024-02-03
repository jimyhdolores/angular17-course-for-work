import { Component } from '@angular/core';
import { PokemonsComponent } from './pokemons/pokemons.component';
@Component({
	selector: 'app-root',
	standalone: true,
	imports: [PokemonsComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	title = 'angular17-course-for-work';
}
