// import { Injectable, inject } from '@angular/core';
// import { ActivatedRouteSnapshot, Resolve, ResolveFn } from '@angular/router';
// import { Observable } from 'rxjs';
// import { IApiResponseProduct } from './models/product-api. interface.';
// import { ProductsApiService } from './products-api.service';

// @Injectable({
// 	providedIn: 'root'
// })
// export class ProductsResolverService implements Resolve<IApiResponseProduct[]> {
// 	private readonly _productsApiService = inject(ProductsApiService);

// 	resolve(route: ActivatedRouteSnapshot): Observable<IApiResponseProduct[]> {
// 		console.log('Productos desde el resolver...', route);
// 		// return this._productsApiService.getProducts().pipe(delay(3000));
// 		return this._productsApiService.getProducts();
// 	}
// }

import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { IApiResponseProduct } from './models/product-api. interface.';
import { ProductsApiService } from './products-api.service';

export const ProductsResolverService: ResolveFn<IApiResponseProduct[]> = (route, state) => {
	const _productsApiService = inject(ProductsApiService);

	return _productsApiService.getProducts();
};
