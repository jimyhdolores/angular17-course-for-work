import { NgModule } from '@angular/core';
import { HomePageComponent } from './pages/home-page/home-page.component';

import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import FullProductDetailsPageComponent from './pages/payment-page/full-product-details-page/full-product-details-page.component';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
import { SimpleProductDetailPageComponent } from './pages/payment-page/simple-product-detail-page/simple-product-detail-page.component';
import { ProductsResolverService } from './services/products.resolver';

const routes: Routes = [
	// { path: '', component: HomePageComponent },
	{ path: 'home', component: HomePageComponent },
	{
		path: 'login',
		pathMatch: 'prefix',
		component: LoginPageComponent
	},
	{
		path: 'payment/:user',
		data: { title: 'Pagos' },
		resolve: { products: ProductsResolverService },
		component: PaymentPageComponent,
		children: [
			{ path: 'simple-product-detail', component: SimpleProductDetailPageComponent },
			{
				path: 'full-product-details',
				component: FullProductDetailsPageComponent
			},
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'simple-product-detail'
			}
		]
	},
	//SE RECOMIENDA PONER A FINAL DE LAS RUTAS EL USO DE COMODINES
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'login', redirectTo: '/login', pathMatch: 'prefix' },
	{
		path: '**',
		component: NotFoundPageComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
	exports: [RouterModule]
})
export class RoutingModule {}
