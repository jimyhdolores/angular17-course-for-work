import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppComponent } from './app.component';
import { RoutingModule } from './app.routing.module';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, RoutingModule],
	bootstrap: [AppComponent],
	providers: [provideAnimationsAsync()]
})
export class AppModule {}
