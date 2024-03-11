import { bootstrapApplication } from '@angular/platform-browser';
import { AppStandaloneComponent } from './app/app-standalone.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppStandaloneComponent, appConfig).catch((err) => console.error(err));

//#region INICIAR LA APLICACION USANDO UN MODULO
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app/app.module';

// platformBrowserDynamic()
// 	.bootstrapModule(AppModule)
// 	.catch((err) => console.error(err));
//#endregion
