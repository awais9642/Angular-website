import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartServiceService } from '../../Services/cart-service.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component'; 
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,MatButtonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  cartDialogRef: MatDialogRef<CartComponent> | null = null;
  products = [
    { name: 'Laptop', price: 999, image: 'assets/LaptopImage.jpeg', quantity: 1 },
    { name: 'Smartphone', price: 599, image: 'assets/PhoneImage.jpg', quantity: 1 },
    { name: 'Headphones', price: 199, image: 'assets/HeadphoneImage.jpeg', quantity: 1 },
    {name:'WirelessMouse',price:30,image:'assets/mouse-image.jpeg',quantity:1},
    {name:'Double Bed',price:500,image:'assets/Double Bed.jpeg',quantity:1},
    {name:'Sofa Chair',price:200,image:'assets/Sofa Chair.jpeg',quantity:1},
    {name:'Table',price:100,image:'assets/Table.jpeg',quantity:1},
    {name:'Meeting Table',price:600,image:'assets/Meeting Table.jpeg',quantity:1},
    {name:'Galaxy Bags',price:200,image:'assets/glaxybags.jpeg',quantity:1},
    {name:'Shoulder Bags',price:250,image:'assets/shoulderbags.jpeg',quantity:1},
    {name:'Stylish Lightweight Bags',price:300,image:'assets/stylishlightweight.jpeg',quantity:1},
    {name:'Ladies Bags',price:300,image:'assets/ladiesbags.jpeg',quantity:1},
    {name:'Relax T Shirt',price:100,image:'assets/relaxfittshirt.jpeg',quantity:1},
    {name:'Plain Red Shirt',price:120,image:'assets/Plainredshirt.jpeg',quantity:1},
    {name:'Plain Black Shirt',price:130,image:'assets/plainblacktshirt.jpeg',quantity:1},
    {name:'Alone T Shirt',price:170,image:'assets/AloneTshirt.jpeg',quantity:1}

  ];
  constructor(public dialog: MatDialog,private cartService: CartServiceService,private router: Router){}
  openCartPopup() {
    if (!this.cartDialogRef) {
      this.cartDialogRef = this.dialog.open(CartComponent, {
        height:'350px',
        width: '100%',
        data: { cartItems: this.products }
      });

      // Reset reference when the dialog is closed
      this.cartDialogRef.afterClosed().subscribe(() => {
        this.cartDialogRef = null;
      });
    }
  }

    closeDialog() {
    this.dialog.closeAll();
  }
  increaseQuantity(product: any){
    
      this.cartService.increaseQuantity(product);
        
        return product.quantity;
      
  }

  decreaseQuantity(product: any) {
   this.cartService.decreaseQuantity(product);
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    // this.router.navigate([`/cart`]);   
    this.openCartPopup();  
    
 }
}
 