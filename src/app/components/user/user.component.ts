import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartServiceService } from '../../Services/cart-service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  constructor(private cartService: CartServiceService,private router: Router){}
  products = [
    { name: 'Laptop', price: 999, image: 'assets/LaptopImage.jpeg', quantity: 1 },
    { name: 'Smartphone', price: 599, image: 'assets/PhoneImage.jpg', quantity: 1 },
    { name: 'Headphones', price: 199, image: 'assets/HeadphoneImage.jpeg', quantity: 1 },
    {name:'WirelessMouse',price:30,image:'assets/mouse-image.jpeg',quantity:1}
  ];

  increaseQuantity(product: any) {
   this.cartService.increaseQuantity(product);
  }

  decreaseQuantity(product: any) {
   this.cartService.decreaseQuantity(product);
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    this.router.navigate([`/cart`]);    
    //alert(`${product.name} added to cart!`);
  }
}
