import { NgModule } from '@angular/core';
import { HomePageComponent } from './pages/home-page/home-page.component';

import { RouterModule, Routes } from '@angular/router';
import { ProductsResolverService } from './services/products.resolver';

const routes: Routes = [
	// { path: '', component: HomePageComponent },
	{ path: 'home', title: 'Home', component: HomePageComponent },
	{
		path: 'login',
		title: 'Inicio de sesión', // El atributo title esta disponible a partir de la versión 14+
		loadChildren: () => import('./pages/login-page/login-page.module').then((m) => m.LoginModule)
	},
	{
		path: 'payment/:user',
		title: 'Pagos', // El atributo title esta disponible a partir de la versión 14+
		data: { title: 'Pagos' },
		resolve: { products: ProductsResolverService },
		loadChildren: () => import('./pages/payment-page/payment.routes').then((r) => r.PaymentRoutes)
	},
	//SE RECOMIENDA PONER A FINAL DE LAS RUTAS EL USO DE COMODINES
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'login', redirectTo: '/login', pathMatch: 'prefix' },
	{
		path: '**',
		loadComponent: () => import('./pages/not-found-page/not-found-page.component')
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
	exports: [RouterModule]
})
export class RoutingModule {}
