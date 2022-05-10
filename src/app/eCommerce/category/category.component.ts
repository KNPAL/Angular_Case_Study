import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { PRODUCTS } from './products';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  isGridView: boolean;
  productList: Product[];
  PriceFilterList: number[];
  constructor() {
    this.isGridView = false;
    this.productList = PRODUCTS;
    this.PriceFilterList = [...new Set(PRODUCTS.map(x => x.price))];
  }

  ngOnInit() {
  }

  onViewChange(): void {
    this.isGridView = !this.isGridView;
  }

  onDropdownSelect(e) {
    this.productList = PRODUCTS.filter(x => x.price === +e.target.value);
  }

  Reset() {
    this.productList = PRODUCTS;
    this.PriceFilterList = [...new Set(PRODUCTS.map(x => x.price))];
  }



}
