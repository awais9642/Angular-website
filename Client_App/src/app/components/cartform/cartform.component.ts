import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartform',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './cartform.component.html',
  styleUrls: ['./cartform.component.css'],
})
export class CartformComponent {
  cartForm: FormGroup;


  constructor(private fb: FormBuilder,private router: Router) {
    this.cartForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      address:[''],
      contact: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      orderSummary: ['', [Validators.required]],
    });
  }
  onCartForm(){
    this.router.navigate([`/confirmorder`]);
   }

  onSubmit() {
    if (this.cartForm.valid) {
      console.log("--------")
    }
  }

}