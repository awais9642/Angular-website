import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LoginComponent } from './components/login/login.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LoginComponent,SidebarComponent, NavbarComponent, DashboardComponent, RouterModule,ConfirmOrderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'admin-dashboard';
  isSidebarToggled = false;

  constructor(public router: Router) {} // Public so it's accessible in HTML
  
  toggleSidebar() {
    this.isSidebarToggled = !this.isSidebarToggled;

    // Pass the toggle state to the sidebar using an Angular event or shared service.
    document.querySelector('.sidebar')?.classList.toggle('toggled', this.isSidebarToggled);
  }
}
