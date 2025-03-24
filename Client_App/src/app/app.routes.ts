import { provideRouter, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { CartComponent } from './components/cart/cart.component';
import { CartformComponent } from './components/cartform/cartform.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { AuthGuard } from './auth/auth.guard'; // Import AuthGuard
import { AdminComponent } from './admin/admin.component';

//The canActivate: [AuthGuard] ensures that only logged-in users can access certain routes.
//If not logged in, the user is redirected to /auth (login page)
export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' }, 
  { path: 'auth', component: LoginComponent }, // Login page (public)
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }, // Protected
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'cartform', component: CartformComponent, canActivate: [AuthGuard] },
  { path: 'confirmorder', component: ConfirmOrderComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent },  // New Admin Route
];

export const appRouting = provideRouter(routes);
