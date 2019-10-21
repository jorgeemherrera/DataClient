import { Component, OnInit } from '@angular/core';
import { DataAPIService } from 'src/app/services/data-api.service';
import { ProductInterface } from '../../models/product-interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private dataAPI: DataAPIService) { }

  private products: ProductInterface;

  ngOnInit() {
    this.getListProducts();
  }

  // getListProducts() {
  //   this.dataAPI.getAllProducts()
  //     .subscribe((products) => {
  //       console.log(products)
  //     })
  // }

  getListProducts() {
    this.dataAPI.getAllProducts()
      .subscribe((products: ProductInterface) => (
        this.products = products['products']
      )
      );
  }

}
