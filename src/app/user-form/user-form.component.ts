import { Component } from '@angular/core';

@Component({
  selector: 'app-user-form',
  standalone: true,
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent {
  inputMessage = 'Ingresa tus nombres';
  disabledButton = false;

  clickSaveData(): void {
    console.log('Guardando datos...');
  }
}
