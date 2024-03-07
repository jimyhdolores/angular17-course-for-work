import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, delay } from 'rxjs';
import { IApiResponseProduct } from './models/product-api. interface.';
import { ProductsApiService } from './products-api.service';

@Injectable({
	providedIn: 'root'
})
export class ProductsResolverService implements Resolve<IApiResponseProduct[]> {
	private readonly _productsApiService = inject(ProductsApiService);

	resolve(route: ActivatedRouteSnapshot): Observable<IApiResponseProduct[]> {
		console.log('Productos desde el resolver...', route);
		return this._productsApiService.getProducts().pipe(delay(3000));
	}
}
