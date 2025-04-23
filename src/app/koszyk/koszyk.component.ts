import {Component, Input} from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-koszyk',
  standalone: false,
  templateUrl: './koszyk.component.html',
  styleUrl: './koszyk.component.css'
})
export class KoszykComponent {
  @Input() koszyk: Product[] = [];

  get totalValue() : number {
    return this.koszyk.reduce((sum, product) => sum + product.cena, 0);
    alert("Dodano do koszyka!");
  }
}
