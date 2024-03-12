import { Component, inject } from '@angular/core';
import { DemoService } from '../../../services/demo.service';

@Component({
	selector: 'app-full-product-details-page',
	standalone: true,
	imports: [],
	templateUrl: './full-product-details-page.component.html',
	styleUrl: './full-product-details-page.component.scss'
	// providers: [DemoService]
})
export default class FullProductDetailsPageComponent {
	private readonly _demoService = inject(DemoService);
}
