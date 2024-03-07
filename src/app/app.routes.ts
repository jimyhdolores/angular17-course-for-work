import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

export default [
	{ path: '', component: HomePageComponent },
	{ path: 'login', loadChildren: () => import('./pages/login-page/login-page.module').then((m) => m.LoginModule) },
	{ path: 'payment', loadChildren: () => import('./pages/payment-page/payment.routes').then((r) => r.PaymentRoutes) }
] as Routes;
