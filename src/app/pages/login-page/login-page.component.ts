import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
	private readonly _router = inject(Router);

	clickSingUp(): void {
		// this._router.navigateByUrl('/home');
		// this._router.navigateByUrl('/home', { state: { isAdmin: true } });
		this._router.navigate(['/home'], { queryParams: { user: 'jimy' }, state: { isAdmin: true } });
	}
}
