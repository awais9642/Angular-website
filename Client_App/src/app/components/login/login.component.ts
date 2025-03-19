import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ApiService } from '../../Services/api.service';

interface LoginResponse {
  success: boolean;
  token?: string;
  message?: string;
}

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loading: boolean = false;

  constructor(private router: Router, private apiService: ApiService, private api : ApiService) {}

  onLogin(): void {
    this.apiService.Login(this.email, this.password).subscribe(
      (response) => {
        if (response.success) {
          this.router.navigate(['/dashboard']);
        }
      },
      (error) => {
        alert(error.error.message);
      }
    );
  }
}
