import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-not-found-page',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './not-found-page.component.html',
	styleUrl: './not-found-page.component.scss'
})
export default class NotFoundPageComponent {}
