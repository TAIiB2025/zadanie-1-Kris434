import { Component } from '@angular/core';
import { Product } from './product';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Product Display';
  products: Product[] = [
    new Product("Iphone 16 Pro", 6399.99, new Date(), false),
    new Product("Iphone 15 Pro", 5399.99, new Date(), false),
    new Product("Iphone 14 Pro", 4399.99, new Date(), false),
    new Product("Iphone 13 Pro", 3399.99, new Date(), true),
    new Product("Iphone 12 Pro", 2399.99, new Date(), true),
  ]

  koszyk: Product[] = [];

  showProducts: boolean = true;

  toggleProducts() {
    this.showProducts = !this.showProducts;
  }

  dodajDoKoszyka = (produkt: Product) =>
  {
    this.koszyk.push(produkt);
    alert("Dodano do koszyka!");
  }
}
