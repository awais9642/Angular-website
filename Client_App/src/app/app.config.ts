// import { ApplicationConfig, importProvidersFrom } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { MatDialogModule } from '@angular/material/dialog';
// import { ReactiveFormsModule } from '@angular/forms';
// import { provideClientHydration } from '@angular/platform-browser';
// import { routes } from './app.routes';


// export const appConfig: ApplicationConfig = {
//   providers: [
//     importProvidersFrom(MatDialogModule),
//     importProvidersFrom(ReactiveFormsModule),
//     provideRouter(routes),
//     provideClientHydration()
//   ]
// };

import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; // ✅ Added
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(MatDialogModule, ReactiveFormsModule), // ✅ Merged imports
    provideHttpClient(), // ✅ Moved here
    provideRouter(routes),
    provideClientHydration()
  ]
};

