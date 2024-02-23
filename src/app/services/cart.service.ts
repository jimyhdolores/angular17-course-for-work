import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IDetailProduct, IProduct } from './models/cart.interface';

@Injectable({ providedIn: 'root' })
export class CartService {
	private _productsDetail: IDetailProduct[] = [];
	private _count = 0;

	cartObservable$ = new Subject<number>();

	addToCard(product: IProduct) {
		const idProduct = product.id;
		const index = this._productsDetail.findIndex(({ product }) => product.id === idProduct);

		if (index === -1) {
			this._productsDetail.push({ product, count: 1, total: product.price });
			this._updateCount();
		} else {
			this._updateProduct(index);
		}
	}

	private _updateProduct(index: number) {
		const detailProduct = this._productsDetail[index];
		detailProduct.count = detailProduct.count++;
		detailProduct.total = detailProduct.count * detailProduct.product.price;

		this._updateCount();
	}

	private _updateCount() {
		this._count = this._count + 1;
		this.cartObservable$.next(this._count);
	}
}
