import { Component } from '@angular/core';
import { ContainerModule } from './container/container.module';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [ContainerModule],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	title = 'angular17-course-for-work';
}
