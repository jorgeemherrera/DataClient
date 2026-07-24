import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DataAPIService } from 'src/app/services/data-api.service';
import { ProductInterface } from '../../models/product-interface';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  standalone: false
})
export class ProductsComponent implements OnInit {

  constructor(private dataAPI: DataAPIService, private cdr: ChangeDetectorRef) { }

  products: ProductInterface[] = [];

  ngOnInit() {
    this.getListProducts();
  }

  getListProducts() {
    this.dataAPI.getAllProducts()
      .subscribe((response: { products: ProductInterface[] }) => {
        this.products = response.products;
        this.cdr.markForCheck();
      });
  }
}
