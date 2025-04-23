import {Component, Input} from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-display',
  standalone: false,
  templateUrl: './product-display.component.html',
  styleUrl: './product-display.component.css'
})
export class ProductDisplayComponent {
  @Input() product!: Product;
  @Input() dodajDoKoszyka!: (product: Product) => void;
}
