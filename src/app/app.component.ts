import { Component, inject, OnInit } from '@angular/core';
// import dessertData from '../../public/data.json';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { Dessert } from './models/dessert';
import { DessertService } from './services/dessert.service';
import { CurrencyPipe } from '@angular/common';
import { EmptyCartComponent } from './components/empty-cart/empty-cart.component';
import { CartItem } from './models/dessert';
import { CartService } from './services/cart.service';
import { CartItemComponent } from './components/cart-item/cart-item.component';

@Component({
  selector: 'app-root',
  imports: [
    AddToCartComponent,
    CurrencyPipe,
    EmptyCartComponent,
    CartItemComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Product list';
  desserts: Dessert[] | null = null;
  private dessertService = inject(DessertService);
  private cartService = inject(CartService);
  cartItems: CartItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.dessertService.getDesserts().subscribe({
      next: (data) => {
        this.desserts = data;
      },
      error: (err) => {
        console.error('Error fetching desserts:', err);
      },
    });
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems = items;
    });
  }

  addToCart(item: CartItem) {
    // console.log(this.cartItems);
    this.cartService.addToCart(item);
  }

  decreaseCartItem(item: CartItem) {
    this.cartService.decreaseCartItem(item);
  }

  removeFromCart(itemName: string) {
    this.cartService.removeFromCart(itemName);
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
