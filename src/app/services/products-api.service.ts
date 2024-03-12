import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponseProduct } from './models/product-api. interface.';

@Injectable({ providedIn: 'root' })
export class ProductsApiService {
	private readonly URL_PRODUCTS = 'https://fakestoreapi.com/products';
	private readonly _httpCLient = inject(HttpClient);

	constructor() {
		console.log('ProductsService');
	}

	getProducts(): Observable<IApiResponseProduct[]> {
		return this._httpCLient.get<IApiResponseProduct[]>(this.URL_PRODUCTS);
	}
}
