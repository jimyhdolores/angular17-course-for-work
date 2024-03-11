import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

export default [
	{ path: 'home', component: HomePageComponent },
	{ path: 'login', loadChildren: () => import('./pages/login-page/login-page.module').then((m) => m.LoginModule) },
	{ path: 'payment', loadChildren: () => import('./pages/payment-page/payment.routes').then((r) => r.PaymentRoutes) },

	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'login', redirectTo: '/login', pathMatch: 'prefix' },
	{
		path: '**',
		loadComponent: () => import('./pages/not-found-page/not-found-page.component')
	}
] as Routes;
