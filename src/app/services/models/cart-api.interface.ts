export interface IResponseCartApi {
	id: number;
	userId: number;
	date: string;
	products: Product[];
}

interface Product {
	productId: number;
	quantity: number;
}
