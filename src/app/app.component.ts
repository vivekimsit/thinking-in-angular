import { Component, OnInit } from '@angular/core';

import { ProductService } from './product.service';
import { Product } from './product';

@Component({
  selector: 'app-component',
  template: `
  <app-search-bar></app-search-bar>
  <app-product-table
       [products]="products"
       [filterText]="filterText"
       [inStockOnly]="inStockOnly"></app-product-table>
  `,
  styles: [],
  providers: [ProductService]
})
export class AppComponent implements OnInit {
  title: string;
  products: Product[]; 
  filterText: string;
  inStockOnly: boolean;

  constructor(private productService: ProductService) {
    this.title = 'Product Catalogue';
    this.filterText = '';
    this.inStockOnly = false;
  }

  getProducts(): void {
    this.productService.getProducts()
        .then(products => this.products = products);
  }

  ngOnInit(): void {
    this.getProducts();
  }
}
