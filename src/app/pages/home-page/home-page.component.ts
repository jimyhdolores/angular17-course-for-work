import { Component, OnInit, inject } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { CartService } from '../../services/cart.service';
import { IApiResponseProduct } from '../../services/models/product-api. interface.';
import { ProductsApiService } from '../../services/products-api.service';
import { ProductComponent } from './product/product.component';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
	selector: 'app-home-page',
	standalone: true,
	imports: [MatToolbar, MatIcon, MatButtonModule, MatBadgeModule, MatSidenavModule, ProductComponent, AsyncPipe],

	templateUrl: './home-page.component.html',
	styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
	private readonly _productApiService = inject(ProductsApiService);
	private readonly _cartService = inject(CartService);

	products: IApiResponseProduct[] = [];
	products$!: Observable<IApiResponseProduct[]>;
	count = 0;
	ngOnInit(): void {
		this.products$ = this._productApiService.getProducts();
		this._cartService.cartObservable$.subscribe({
			next: (number) => {
				this.count = number;
			}
		});
	}
}
