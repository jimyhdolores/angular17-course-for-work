import { Component, OnInit, inject } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-payment-page',
	standalone: true,
	imports: [RouterOutlet, RouterLink, MatButton, MatIconButton, MatIcon],
	templateUrl: './payment-page.component.html',
	styleUrl: './payment-page.component.scss'
})
export class PaymentPageComponent implements OnInit {
	private readonly _activatedRoute = inject(ActivatedRoute);
	private readonly _router = inject(Router);

	ngOnInit(): void {
		console.log('Datos enviados por Params ==> ', this._activatedRoute.snapshot.params);
		console.log('Datos enviados por Data property ==> ', this._activatedRoute.snapshot.data);
	}

	clickViewFullDetail(): void {
		this._router.navigate(['./', 'full-product-details'], {
			relativeTo: this._activatedRoute,
			queryParamsHandling: 'preserve'
		});
	}
}
