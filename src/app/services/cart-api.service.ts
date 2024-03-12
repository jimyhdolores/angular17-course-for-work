import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponseCartApi } from './models/cart-api.interface';

@Injectable()
export class CartApiService {
	private readonly _httpCLient = inject(HttpClient);
	private readonly URL_SINGLE_CART = 'https://fakestoreapi.com/carts/user/2';

	constructor() {
		console.log('****CartApiService*****');
	}

	getSingleCart(): Observable<IResponseCartApi> {
		return this._httpCLient.get<IResponseCartApi>(this.URL_SINGLE_CART);
	}
}
