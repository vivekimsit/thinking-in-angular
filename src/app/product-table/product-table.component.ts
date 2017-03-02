import { Component, OnInit, Input, Output } from '@angular/core';

import { Product } from '../product';

@Component({
  selector: 'app-product-table',
  template: `
  <table>
	  <thead>
		  <tr>
			  <th>Name</th>
			  <th>Price</th>
		  </tr>
	  </thead>
	  <tbody>
		  <ng-container *ngFor="let product of products">
			  <tr *ngIf="shouldShowProducts(product)">
				  <td>{{product.name}}</td>
				  <td>{{product.price}}</td>
			  </tr>
		  </ng-container>
	  </tbody>
  </table>
  `,
  styles: []
})
export class ProductTableComponent {
  @Input() products: Product[];    
  @Input() filterText: string;
  @Input() inStockOnly: boolean;
  
  shouldShowProducts(product) {
      return !this.filterText || product.name.indexOf(this.filterText) !== -1;
  }
}
