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
import { CommonModule } from '@angular/common';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-root',
  imports: [
    AddToCartComponent,
    CurrencyPipe,
    EmptyCartComponent,
    CartItemComponent,
    CommonModule,
    ConfirmModalComponent,
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
  cartTotal: number = 0;
  confirmOrder = false;
  numberItemsInCart = 0;

  constructor() {}

  isInCart(dessert: any): boolean {
    return (
      this.cartItems &&
      this.cartItems.some((item: any) => item.name === dessert.name)
    );
  }

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
      this.cartTotal = items.reduce((previousItem, currentItem) => {
        return previousItem + currentItem.price * currentItem.qty;
      }, 0);
      this.numberItemsInCart = items.reduce((previousItem, currentItem) => {
        return previousItem + currentItem.qty;
      }, 0);
    });
  }

  handleNewOrder() {
    this.confirmOrder = false;
    this.cartService.clearCart();
    window.location.reload();
  }

  handleConfirmModal() {
    this.confirmOrder = true;
  }

  addToCart(item: CartItem) {
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
