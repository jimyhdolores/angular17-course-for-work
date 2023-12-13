import { Component } from '@angular/core';
import { LikeComponent } from './like/like.component';
import { UserFormComponent } from './user-form/user-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserFormComponent, LikeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular17-course-for-work';
}
