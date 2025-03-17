import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-cartform',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './cartform.component.html',
  styleUrls: ['./cartform.component.css'],
})
export class CartformComponent {
  cartForm: FormGroup;
  userData = { firstName: '', lastName: '', address: '',contact:'',orderSummary:' ' };


  constructor(private fb: FormBuilder,private router: Router,private apiservice:ApiService) {
    this.cartForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      address:[''],
      contact: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      orderSummary: ['', [Validators.required]],
    });
  }
  // onCartForm(){
  //   this.router.navigate([`/confirmorder`]);
  // }
   submitForm() {
    console.log(this.userData); // Check what data is being sent

    this.apiservice.checkout({
      firstName: this.userData.firstName,
      lastName: this.userData.lastName,
      contact: this.userData.contact,
      address: this.userData.address,
      orderSummary: this.userData.orderSummary,
      email: 'awais679@gmail.com' // Add email here
    }).subscribe(response => {
      console.log('Response:', response);
    }, error => {
      console.error('Error:', error);
    });
  }
  onSubmit() {
    if (this.cartForm.valid) {
      console.log("--------")
    }
  }

}