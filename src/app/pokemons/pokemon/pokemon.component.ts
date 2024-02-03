import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { IPokemon } from '../../models/pokemon.interface';

@Component({
	selector: 'app-pokemon',
	standalone: true,
	imports: [MatCardModule, MatButton],
	templateUrl: './pokemon.component.html',
	styleUrl: './pokemon.component.scss'
})
export class PokemonComponent {
	@Input({ required: true }) pokemon?: IPokemon;
	@Output() deletePokemon = new EventEmitter();
}
