import { Component } from '@angular/core';

import { ProductService } from './product.service';
import { Product } from './product';

@Component({
  selector: 'app-component',
  template: `
  <app-search-bar></app-search-bar>
  <app-product-table></app-product-table>
  `,
  styles: [],
  providers: [ProductService]
})
export class AppComponent {
  title: string;
  products: Product[]; 
  filterText: string;
  inStockOnly: boolean;

  constructor(private productService: ProductService) {
    this.title = 'Product Catalogue';
    this.filterText = '';
    this.inStockOnly = false;
  }
}
