import { Component, inject, OnInit } from '@angular/core';
// import dessertData from '../../public/data.json';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { Dessert } from './models/dessert';
import { DessertService } from './services/dessert.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [AddToCartComponent, CurrencyPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Product list';
  desserts: Dessert[] | null = null;
  private dessertService = inject(DessertService);

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
  }
}
