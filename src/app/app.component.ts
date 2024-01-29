import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DemoDirective } from './directives/demo.directive';
import { ShowInfoComponent } from './show-info/show-info.component';
import { UserFormComponent } from './user-form/user-form.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, UserFormComponent, DemoDirective, ShowInfoComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	title = 'angular17-course-for-work';
}
