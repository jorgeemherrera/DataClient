import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { tokenName } from '@angular/compiler';
import { AuthService } from './auth.service';
import {map }  from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataAPIService {
  products: Observable<any>;
  product: Observable<any>;

  constructor(private http: HttpClient, private authService: AuthService) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: this.authService.getToken()
  })

  /**
   * Send all products
   */
  getAllProducts() {
    const url_api = `http://localhost:3000/products/`;
    return this.http.get(url_api);
  }

  getProductById(_id: string) {
    const url_api = `http://localhost:3000/products/${_id}`;
    return (this.product = this.http.get(url_api));
  }

  saveProduct(product) {
    // TODO: obtener token
    // TODO: not null
    let token = this.authService.getToken();
    const url_api = `http://localhost:3000/products/?token=${token}`;
    return this.http.post(url_api, product, {headers: this.headers})
    .pipe(map(data => data));
  }

  updateProduct(product) {
    // TODO: obtener token
    // TODO: not null
    let token = this.authService.getToken()
    const url_api = `http://localhost:3000/products/?token=${token}`;
    return this.http.put(url_api, product,{headers: this.headers})
    .pipe(map(data => data));
  }
  deleteProduct(_id: string) {
    // TODO: obtener token
    // TODO: not null
    let token = this.authService.getToken()
    const url_api = `http://localhost:3000/products/?token=${token}`;
    return this.http.delete(url_api, {headers: this.headers})
    .pipe(map(data => data));
  }
}
