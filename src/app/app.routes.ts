import { provideRouter, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { CartComponent } from './components/cart/cart.component';
import { CartformComponent }  from './cartform/cartform.component';


export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' }, // Redirect to login by default
  { path: 'auth', component: LoginComponent }, // Login page
  { path: 'dashboard', component: DashboardComponent }, // Dashboard page
  { path:'user', component: UserComponent },
  { path: 'cart', component: CartComponent },
  {path: "cartform" ,component:CartformComponent}
];
export const appRouting = provideRouter(routes);