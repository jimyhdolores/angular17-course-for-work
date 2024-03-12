import { ResolveFn } from '@angular/router';

export const demoResolver: ResolveFn<boolean> = (route, state) => {
	return true;
};
