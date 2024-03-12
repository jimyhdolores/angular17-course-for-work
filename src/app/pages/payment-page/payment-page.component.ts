import { Component, Input, OnInit, inject } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { CartApiService } from '../../services/cart-api.service';
import { DemoService } from '../../services/demo.service';

@Component({
	selector: 'app-payment-page',
	standalone: true,
	imports: [RouterOutlet, RouterLink, MatButton, MatIconButton, MatIcon],
	templateUrl: './payment-page.component.html',
	styleUrl: './payment-page.component.scss',
	providers: [DemoService, CartApiService]
})
export class PaymentPageComponent implements OnInit {
	@Input() user?: string;
	@Input() title!: string;
	@Input() products!: string;

	private readonly _activatedRoute = inject(ActivatedRoute);
	private readonly _router = inject(Router);
	private readonly _demoService = inject(DemoService);
	private readonly _cartApiService = inject(CartApiService);

	ngOnInit(): void {
		console.log('Datos enviados por Params ==> ', this._activatedRoute.snapshot.params);
		console.log('Datos enviados por Data property ==> ', this._activatedRoute.snapshot.data);

		console.log('@INPUT - Params ==> ', this.user);
		console.log('@INPUT - Data property ==> ', this.title);
		console.log('@INPUT - Data property ==> ', this.products);
	}

	clickViewFullDetail(): void {
		this._router.navigate(['./', 'full-product-details'], {
			relativeTo: this._activatedRoute,
			queryParamsHandling: 'preserve'
		});
	}
}
