import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../Services/api.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule

// import { provideRouter, Routes } from '@angular/router';
 
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent  implements OnInit{

  email = '';
  password = '';

  constructor(private router: Router,private apiService: ApiService){}
  //login method start here 
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
  ngOnInit() {

    // this.apiService.getUsers().subscribe({
    //   next: (data) => {
    //     console.log('API Response:'); // ✅ Debugging
    //     console.log(data); // ✅ Debugging
    //     // this.users = data;
    //   },
    //   error: (error) => {
    //     console.error('Error fetching users:', error);
    //   },
    //   complete: () => {
    //     console.log('Request completed'); // Optional
    //   }
    // });
      // this.apiService.getList().subscribe({
      //   next:(data)=>{
      //     console.log('UserList Comes:');
      //     console.log(data);
      //   },
      //   error: (error) => {
      //     console.error('Error fetching users:', error);
      //   },
      //   complete: () => {
      //     console.log('Request'); // Optional
      //   }
      // });

      // this.apiService.getProducts().subscribe({
      //   next:(data)=>{
      //     console.log('Products Comes:');
      //     console.log(data);
      //   },
      //   error: (error) => {
      //     console.error('Error fetching users:', error);
      //   },
      //   complete: () => {
      //     console.log('Congraulations'); // Optional
      //   }
      // });

      // this.apiService.getProductsList().subscribe({
      //   next:(data)=>{
      //     console.log('Products Comes correctly:');
      //     console.log(data);
      //   },
      //   error: (error) => {
      //     console.error('Error fetching users:', error);
      //   },
      //   complete: () => {
      //     console.log('Task Completed'); // Optional
      //   }
      // });
  }

  // ngOnInit() {}

  // fetchMessage() {
  //   this.apiService.getTestMessage().subscribe(
  //     (data) => {
  //       console.log('API Response:', data);
  //       this.message = data.message; // Set the response to display
  //     },
  //     (error) => {
  //       console.error('Error fetching data:', error);
  //     }
  //   );
  // }
}
