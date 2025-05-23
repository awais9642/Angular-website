import { Component} from '@angular/core';
import { CartServiceService } from '../../Services/cart-service.service';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: any[] = [];
  // Inject dependencies using `inject()`
  // private cartService = inject(CartServiceService);
 // private dialogRef = inject(MatDialogRef<CartComponent>);
  // private data = inject(MAT_DIALOG_DATA);

  constructor(private router: Router,private dialogRef: MatDialogRef<CartComponent>,private cartService: CartServiceService) {
    this.cartItems = this.cartService.getCartItems();
    console.log(this.cartItems);
  }

  removeItem(index: number) {
    this.cartService.removeItem(index);
    this.cartItems = this.cartService.getCartItems();
  }

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = [];
    this.closeDialog()

  }
  checkout(){
   this.closeDialog();
    this.router.navigate(['/cartform']);
  }

  increaseQuantity(item: any) {
    this.cartService.increaseQuantity(item);
    this.cartItems = this.cartService.getCartItems();
  }

  decreaseQuantity(item: any) {
    this.cartService.decreaseQuantity(item);
    this.cartItems = this.cartService.getCartItems();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
