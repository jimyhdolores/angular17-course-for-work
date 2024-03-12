import { AsyncPipe } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { IApiResponseProduct } from '../../services/models/product-api. interface.';
import { ProductsApiService } from '../../services/products-api.service';
import { ProductComponent } from './product/product.component';

@Component({
	selector: 'app-home-page',
	standalone: true,
	imports: [
		MatToolbar,
		MatIcon,
		MatButtonModule,
		MatBadgeModule,
		MatSidenavModule,
		ProductComponent,
		AsyncPipe,
		RouterLink
	],
	templateUrl: './home-page.component.html',
	styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
	@Input() user?: string;

	private readonly _productApiService = inject(ProductsApiService);
	private readonly _cartService = inject(CartService);
	private readonly _activatedRoute = inject(ActivatedRoute);
	private readonly _router = inject(Router);
	// private readonly _demoService = inject(DemoService);
	// private readonly _cartApiService = inject(CartApiService, { optional: true });

	products: IApiResponseProduct[] = [];
	products$!: Observable<IApiResponseProduct[]>;
	count = 0;

	constructor() {
		console.log('Valores obtenidos por State ==>', this._router.getCurrentNavigation()?.extras.state);
	}

	ngOnInit(): void {
		this._getApis();
		this._getValueRoutes();
		// console.log(this._cartApiService);
	}

	private _getValueRoutes() {
		console.log('Valores obtenidos por QueryParam ==>', this._activatedRoute.snapshot.queryParamMap.get('user'));
		console.log('@INPUT - QueryParam ==>', this.user);
	}

	private _getApis() {
		this.products$ = this._productApiService.getProducts();
		this._cartService.cartObservable$.subscribe({
			next: (number) => {
				this.count = number;
			}
		});
	}
}
