import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatListItem, MatNavList } from '@angular/material/list';
import { POKEMONS } from '../models/constants';
import { IPokemon } from '../models/pokemon.interface';
import { PokemonComponent } from './pokemon/pokemon.component';

@Component({
	selector: 'app-pokemons',
	standalone: true,
	imports: [MatNavList, MatListItem, MatButton, PokemonComponent],
	templateUrl: './pokemons.component.html',
	styleUrl: './pokemons.component.scss'
})
export class PokemonsComponent {
	pokemons = [...POKEMONS];
	pokemonSelected?: IPokemon;

	clickItem(pokemon: IPokemon): void {
		this.pokemonSelected = pokemon;
	}

	deletePokemon(): void {
		const index = this.pokemons.indexOf(this.pokemonSelected!);

		if (index >= 0) {
			this.pokemons.splice(index, 1);
			this.pokemonSelected = undefined;
		}
	}

	clickRestore(): void {
		this.pokemons = POKEMONS;
	}
}
