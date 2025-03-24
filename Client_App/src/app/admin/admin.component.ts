import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  manageUsers() {
    console.log('Managing Users...');
  }

  viewReports() {
    console.log('Viewing Reports...');
  }
}

