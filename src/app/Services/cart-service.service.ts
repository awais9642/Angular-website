import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor() { }

  private cart: any[] = [];

  addToCart(product: any) {
    this.cart.push(product);
  }

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
    return console.log(product);
   // product.quantity++;
  }

  decreaseQuantity(product: any) {
    if (product.quantity > 1) {
      product.quantity--;
    }
  }
}
