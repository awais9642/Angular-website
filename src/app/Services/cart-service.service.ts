import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private cart: any[] = [
    { name: 'Laptop', price: 999, image: 'assets/LaptopImage.jpeg', quantity: 1 },
    { name: 'Smartphone', price: 599, image: 'assets/PhoneImage.jpg', quantity: 1 },
    { name: 'Headphones', price: 199, image: 'assets/HeadphoneImage.jpeg', quantity: 1 },
    { name: 'WirelessMouse', price: 30, image: 'assets/mouse-image.jpeg', quantity: 1 }
  ];

  constructor() { }

  addToCart(product: any) {
    let existingProduct = this.cart.find(item => item.name === product.name);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      product.quantity = 1;
      this.cart.push(product);
    }
  }

  // addToCart(product: any) {
  //   this.cart.push(product);
  // }

  getCartItems() {
    return this.cart;
  }

  removeItem(index: number) {
    this.cart.splice(index, 1);
  }

  clearCart() {
    this.cart = [];
  }

  increaseQuantity(product: any) {
    let item = this.cart.find(p => p.name === product.name);
    if (item) {
      item.quantity++;
    }
  }
  // increaseQuantity(product: any) {
    
  //  if(product.quantity<1){
  //   product.quantity++;
  //  }
  //  return product.quantity;
    
  // }

  decreaseQuantity(product: any) {
    let item = this.cart.find(p => p.name === product.name);
    if (item) {
      item.quantity--;
      if (item.quantity === 0) {
        this.cart = this.cart.filter(p => p.name !== product.name); // Remove item if quantity is 0
      }
    }
  }
  // decreaseQuantity(product: any) {
  //   if (product.quantity > 1) {
  //      product.quantity--;
  //   }
  //   return product.quantity;
  // }
}
