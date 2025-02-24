import { Component } from '@angular/core';
import { CartServiceService } from '../../Services/cart-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  product:any;
    cartItems: any[] = [
    { name: 'Laptop', price: 999, image: 'assets/LaptopImage.jpeg', quantity: 1 },
    { name: 'Smartphone', price: 599, image: 'assets/PhoneImage.jpg', quantity: 1 },
    { name: 'Headphones', price: 199, image: 'assets/HeadphoneImage.jpeg', quantity: 1 },
    {name:'WirelessMouse',price:30,image:'assets/mouse-image.jpeg',quantity:1}
   ];

  constructor(private cartService: CartServiceService) {
    this.cartItems = this.cartService.getCartItems();
  }

  removeItem(index: number) {
    this.cartService.removeItem(index);
  }

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = [];
  }
 
  increaseQuantity(product: any){
    this.cartService.increaseQuantity(product);
    // this.cartItems=[];
  }
  decreaseQuantity(product: any){
    this.cartService.decreaseQuantity(product);
    // this.cartItems=[];
  }

}
