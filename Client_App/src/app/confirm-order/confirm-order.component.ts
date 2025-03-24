import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../Services/cart-service.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../Services/api.service';


@Component({
  selector: 'app-confirm-order',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './confirm-order.component.html',
  styleUrl: './confirm-order.component.css'
})
export class ConfirmOrderComponent implements OnInit{
  
  cartItems: any[] = [];
  // cartinfo ;
  cartInfo: any;

  product = {
    image: '',
    name: '',
    price: '',
    quantity: ''
  };

  orderForm: FormGroup;

  constructor(private fb: FormBuilder, private cartService: CartServiceService,private apiservice:ApiService,private router:Router) {
    this.cartItems = this.cartService.getCartItems();
    console.log(this.cartItems);
    // this.cartinfo = this.apiservice.getcartinfo('awais679@gmail.com');
    // console.log(this.cartinfo);
    
    this.orderForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address:[''],
      contactNumber: ['', Validators.required],
      orderSummary: ['', Validators.required]
    });

  }
 
  // ngOnInit() {

  //  this.apiservice.getcartinfo('awais679@gmail.com').subscribe(
  //   (data)=>{
  //     this.cartInfo = data;
  //     console.log('Cart info:',data);

  //   },
  //   (error)=>{
  //     console.error('Error fetching cart info:', error);
  //   }
  //  );

  //  this.orderForm.patchValue({
  //   firstName:this.cartInfo.first_name   ,
  //   lastName: this.cartInfo.lastName || '',
  //   email: this.cartInfo.email || '',
  //   contactNumber: this.cartInfo.contactNumber || '',
  //   address: this.cartInfo.address || '',
  //   orderSummary: this.cartInfo.orderSummary || ''
  // });

  // }
  ngOnInit() {
    this.apiservice.getcartinfo('shakirawais66@gmail.com').subscribe(
      (data) => {
        this.cartInfo = data[0]; // Ensure you access the first object in the array
        console.log('Cart info:', this.cartInfo);
  
        // Patch the form with the correct values
        this.orderForm.patchValue({
          firstName: this.cartInfo.first_name || '',
          lastName: this.cartInfo.last_name || '',
          email: this.cartInfo.email || '',
          contactNumber: this.cartInfo.contact || '',
          address: this.cartInfo.address || '',
          orderSummary: this.cartInfo.Order_summary || ''
        });
      },
      (error) => {
        console.error('Error fetching cart info:', error);
      }
    );
  }
  confirmOrder(){

   // (this.orderForm.valid)
      this.apiservice.confirmOrder().subscribe(
        (response)=>{
          console.log('Email sent:',response);
        },
        (error)=>{
          console.error('Error sending email:', error);
        }
      );
    

  }
  onSubmit(): void {
    if (this.orderForm.valid) {
      console.log('Order Details:', this.orderForm.value);
    }
  }
 
}
