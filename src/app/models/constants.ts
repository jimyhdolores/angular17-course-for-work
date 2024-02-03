import { IPokemon } from './pokemon.interface';

export const POKEMONS: IPokemon[] = [
	{
		nombre: 'Bulbasaur',
		description:
			'Tras nacer, crece alimentándose durante un tiempo de los nutrientes que contiene el bulbo de su lomo.',
		imagen: 'assets/bulbasaur.png'
	},
	{
		nombre: 'Charmander',
		description: 'La llama de su cola indica su fuerza vital. Si está débil, la llama arderá más tenue.',
		imagen: 'assets/charmander.png'
	},
	{
		nombre: 'Squirtle',
		description: 'Tras nacer, se le hincha el lomo y se le forma un caparazón. Escupe poderosa espuma por la boca.',
		imagen: 'assets/squirtle.png'
	},
	{
		nombre: 'Pikachu',
		description:
			'Cuando se enfada, este Pokémon descarga la energía que almacena en el interior de las bolsas de las mejillas.',
		imagen: 'assets/pikachu.png'
	},
	{
		nombre: 'Jigglypuff',
		description:
			'Cuando le tiemblan sus redondos y adorables ojos, entona una melodía agradable y misteriosa con la que duerme a sus enemigos.',
		imagen: 'assets/jigglypuff.png'
	}
];
