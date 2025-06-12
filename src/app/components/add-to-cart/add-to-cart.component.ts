import { Component } from '@angular/core';
import { output } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.scss',
})
export class AddToCartComponent {
  isAddedToCart = false;
  quantity = 0;
  addProduct = output<void>();
  decreaseProduct = output<void>();

  addToCart() {
    this.isAddedToCart = true;
    this.addProduct.emit();
    this.quantity++;
  }

  decreaseProductItem() {
    if (this.quantity === 1) {
      this.isAddedToCart = false;
    }
    this.decreaseProduct.emit();
    this.quantity--;
  }

  increaseProductItem() {
    this.addProduct.emit();
    ++this.quantity;
  }
}
