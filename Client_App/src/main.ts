// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
// import { provideHttpClient } from '@angular/common/http';
// import { appConfig } from './app/app.config';
// import { importProvidersFrom } from '@angular/core';
// import { ReactiveFormsModule } from '@angular/forms';
// import { routes } from './app/app.routes';
// import { provideRouter } from '@angular/router';

// bootstrapApplication(AppComponent, {
//   ...appConfig,
//   providers: [


//     provideHttpClient(),
//     importProvidersFrom(ReactiveFormsModule),
//     provideRouter(routes)
//   ],
// }).catch((err) => console.error(err));


import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, {
  ...appConfig
}).catch((err) => console.error(err));
