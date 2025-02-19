import { provideRouter, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    { path: 'auth', component: LoginComponent }, // Login page
  { path: 'dashboard', component: DashboardComponent }, // Dashboard page
  { path: '', redirectTo: 'auth', pathMatch: 'full' }, // Redirect to login by default
];
export const appRouting = provideRouter(routes);