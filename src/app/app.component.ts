import { Component } from '@angular/core';
import { ProductBemModule } from './product-bem/product-bem.module';
import { ProductModule } from './product/product.module';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [ProductModule, ProductBemModule],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	title = 'angular17-course-for-work';
}
