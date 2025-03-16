import { CommonModule } from '@angular/common';
import { Component,OnInit  } from '@angular/core';
import { CartServiceService } from '../../Services/cart-service.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component'; 
import { MatButtonModule } from '@angular/material/button';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,MatButtonModule, MatDialogModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{

  cartDialogRef: MatDialogRef<CartComponent> | null = null;
  products = [
    { name: '', price:0, image: 'assets/LaptopImage.jpeg', quantity: 1 },
    { name: 'Smartphone', price: 599, image: 'assets/PhoneImage.jpg', quantity: 1 },
    { name: 'Headphone', price: 199, image: 'assets/HeadphoneImage.jpeg', quantity: 1 },
    {name:'Wireless Mouse',price:30,image:'assets/mouse-image.jpeg',quantity:1},
    {name:'Double Bed',price:500,image:'assets/Double Bed.jpeg',quantity:1},
    {name:'Sofa Chair',price:200,image:'assets/Sofa Chair.jpeg',quantity:1},
    {name:'Table',price:100,image:'assets/Table.jpeg',quantity:1},
    {name:'Meeting Table',price:600,image:'assets/Meeting Table.jpeg',quantity:1},
    {name:'Galaxy Bag',price:200,image:'assets/glaxybags.jpeg',quantity:1},
    {name:'Shoulder Bag',price:250,image:'assets/shoulderbags.jpeg',quantity:1},
    {name:'Stylish Bag',price:300,image:'assets/stylishlightweight.jpeg',quantity:1},
    {name:'Ladies Bag',price:300,image:'assets/ladiesbags.jpeg',quantity:1},
    {name:'Relax T-Shirt',price:100,image:'assets/relaxfittshirt.jpeg',quantity:1},
    {name:'Plain Red Shirt',price:120,image:'assets/Plainredshirt.jpeg',quantity:1},
    {name:'Plain Black Shirt',price:130,image:'assets/plainblacktshirt.jpeg',quantity:1},
    {name:'Alone T-Shirt',price:170,image:'assets/AloneTshirt.jpeg',quantity:1}

  ];
  constructor(private dialog: MatDialog,private cartService: CartServiceService,private router: Router,private apiService: ApiService){}
  openCartPopup() {
    if (!this.cartDialogRef) {
      this.cartDialogRef = this.dialog.open(CartComponent, {
        width: '400px',  
        height: 'auto',
        disableClose: true,  
        panelClass: 'custom-dialog-container',
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
 ngOnInit() {
    this.apiService.getProductsList().subscribe({
      next:(data)=>{
        console.log('Products Comes correctly:');
        console.log(data);
        this.products=data;
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      },
      complete: () => {
        console.log('Task Completed'); // Optional
      }
    });
  }
}
 