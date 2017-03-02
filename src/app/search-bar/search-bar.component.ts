import {
  Component,
  Input,
  Output,
  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  template: `
    <div class="container">
        <form>
            <div class="form-group">
                <label for="filter">Filter</label>
                <input type="text"
                       name="filter"    
                       class="form-control"
                       [(ngModel)]="filterText"
                       (change)="handleFilterTextChange()"
                       id="filter" required>
            </div>
            <div class="form-check form-check-inline">
              <label class="form-check-label">
                <input class="form-check-input"
                       name="inStockOnly"
                       type="checkbox"
                       id="inStockOnly"
                       [(ngModel)]="inStockOnly"> Only show products in stock
              </label>
            </div>
        </form>
    </div>
  `,
  styles: []
})
export class SearchBarComponent {

  @Input() filterText: string;
  @Input() inStockOnly: boolean;
  @Output() onFilterTextInput = new EventEmitter();
  
  handleFilterTextChange() {
    this.onFilterTextInput.emit(this.filterText);  
  }

}
