import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppComponent } from './app.component';
import { RoutingModule } from './app.routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import FullProductDetailsPageComponent from './pages/payment-page/full-product-details-page/full-product-details-page.component';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
import { SimpleProductDetailPageComponent } from './pages/payment-page/simple-product-detail-page/simple-product-detail-page.component';

@NgModule({
	declarations: [AppComponent, LoginPageComponent, NotFoundPageComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		MatCardModule,
		MatInput,
		MatFormFieldModule,
		MatIcon,
		MatButton,
		RoutingModule,
		MatCardModule,
		PaymentPageComponent,
		SimpleProductDetailPageComponent,
		FullProductDetailsPageComponent
	],
	bootstrap: [AppComponent],
	providers: [provideAnimationsAsync()]
})
export class AppModule {}
