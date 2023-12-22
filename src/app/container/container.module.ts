import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotificationModule } from '../notification/notification.module';
import { ContainerComponent } from './container.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
	declarations: [ContainerComponent, HeaderComponent, MenuComponent],
	imports: [NotificationModule, FormsModule],
	exports: [ContainerComponent]
})
export class ContainerModule {}
