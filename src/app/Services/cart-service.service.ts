import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private cart: any[] = [];

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
