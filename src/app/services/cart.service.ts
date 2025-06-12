import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../models/dessert';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();
  constructor() {}

  getCartItems(): Observable<CartItem[]> {
    return this.cartItems$;
  }

  addToCart(item: CartItem) {
    const items = this.cartItemsSubject.value;
    // Add logic to update quantity if item exists
    const existing = items.find((i) => i.name === item.name);
    if (existing) {
      existing.qty += item.qty;
    } else {
      items.push({ ...item });
    }
    this.cartItemsSubject.next([...items]);
  }

  decreaseCartItem(item: CartItem) {
    const items = this.cartItemsSubject.value;
    // Add logic to update quantity if item exists
    const existing = items.find((i) => i.name === item.name);
    if (existing && existing.qty > 1) {
      existing.qty -= item.qty;
      this.cartItemsSubject.next([...items]);
    } else {
      this.removeFromCart(item.name);
    }
  }

  removeFromCart(itemName: string) {
    const items = this.cartItemsSubject.value.filter(
      (i) => i.name !== itemName
    );
    this.cartItemsSubject.next(items);
  }

  clearCart() {
    this.cartItemsSubject.next([]);
  }
}
