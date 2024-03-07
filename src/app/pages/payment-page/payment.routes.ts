import { Routes } from '@angular/router';
import { PaymentPageComponent } from './payment-page.component';
import { SimpleProductDetailPageComponent } from './simple-product-detail-page/simple-product-detail-page.component';

export const PaymentRoutes: Routes = [
	{
		path: '',
		component: PaymentPageComponent,
		children: [
			{ path: 'simple-product-detail', component: SimpleProductDetailPageComponent },
			{
				path: 'full-product-details',
				loadComponent: () => import('./full-product-details-page/full-product-details-page.component')
			},
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'simple-product-detail'
			}
		]
	}
];
