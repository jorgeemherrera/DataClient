import { Component, OnInit } from '@angular/core';
import { DataAPIService } from 'src/app/services/data-api.service';
import { ProductInterface } from '../../models/product-interface';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private dataAPI: DataAPIService) { }

  private products: ProductInterface;

  ngOnInit() {
    this.getListProducts();
  }

  getListProducts() {
    this.dataAPI.getAllProducts()
      .subscribe((products: ProductInterface) => (
        this.products = products['products']
      )
      );
  }
}
