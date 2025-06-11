import { Component, input, output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CartItem } from '../../models/dessert';

@Component({
  selector: 'app-cart-item',
  imports: [CurrencyPipe],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent {
  cartItem = input<CartItem>();
  removeFromCart = output<string>();

  removeItem(itemName: string) {
    this.removeFromCart.emit(itemName);
  }
}
