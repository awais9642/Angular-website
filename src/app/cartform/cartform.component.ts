import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cartform',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cartform.component.html',
  styleUrls: ['./cartform.component.css'],
})
export class CartformComponent {
  cartForm: FormGroup;

  orderSummary = {
    productName: '2 Piece - Printed Suit - PE25-408',
    size: 'XS',
    price: 5290,
    shipping: 99,
    total: 5389,
  };

  constructor(private fb: FormBuilder) {
    this.cartForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]],
    });
  }

  onSubmit() {
    if (this.cartForm.valid) {
      console.log
    }
  }
}