import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  template: `
  <app-search-bar></app-search-bar>
  <app-product-table></app-product-table>
  `,
  styles: []
})
export class AppComponent {
  title = 'app works!';
  filterText = '';
  inStockOnly = false;
}
