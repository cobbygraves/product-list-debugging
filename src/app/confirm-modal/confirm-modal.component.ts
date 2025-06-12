import { Component, inject, output } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartItem } from '../models/dessert';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-confirm-modal',
  imports: [CurrencyPipe],
  templateUrl: './confirm-modal.component.html',
  styleUrl: './confirm-modal.component.scss',
})
export class ConfirmModalComponent {
  startOrder = output();
  cartService = inject(CartService);
  cartItems: CartItem[] = [];
  cartTotal: number = 0;

  constructor() {
    this.cartService.cartItems$.subscribe({
      next: (value) => {
        this.cartItems = value;

        this.cartTotal = value.reduce((previousItem, currentItem) => {
          return previousItem + currentItem.price * currentItem.qty;
        }, 0);
      },
    });
  }

  handleStartOrder() {
    this.startOrder.emit();
  }
}
