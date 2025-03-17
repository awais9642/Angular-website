import { Component } from '@angular/core';
import { ReactiveFormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-confirm-order',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './confirm-order.component.html',
  styleUrl: './confirm-order.component.css'
})
export class ConfirmOrderComponent {
  product = {
    image: 'assets/AloneTshirt.jpeg',
    name: 'Sample Product',
    price: 99.99,
    quantity: 1
  };

  orderForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.orderForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address:[''],
      contactNumber: ['', Validators.required],
      orderSummary: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.orderForm.valid) {
      console.log('Order Details:', this.orderForm.value);
    }
  }

  
}
