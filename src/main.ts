import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { appConfig } from './app/app.config';
import { importProvidersFrom } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
<<<<<<< HEAD
=======
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
>>>>>>> 5144694c04115e5f69a9498b44f51c90437bd388

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
<<<<<<< HEAD


    provideHttpClient(),
    importProvidersFrom(ReactiveFormsModule),
    provideRouter(routes)
=======
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(ReactiveFormsModule),
    provideRouter(routes),
    importProvidersFrom(MatDialogModule),
>>>>>>> 5144694c04115e5f69a9498b44f51c90437bd388
  ],
}).catch((err) => console.error(err));
