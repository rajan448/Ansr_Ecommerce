import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Product {
  uniq_id: string;
  product_name: string;
  retail_price: number;
  discounted_price: number;
  image: Array<string>;
  description: string;
  product_rating: string;
  overall_rating: string
  brand: string
}


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  public getProducts(searchText?: string, sort?: number): Observable<Product[]> {
    return this.http.get<Product[]>(`/api/products?sort=${sort}&search=${searchText}`);
  }

  public getProductById(uniq_id: string): Observable<Product> {
    return this.http.get<Product>(`/api/products/${uniq_id}`);
  }

}
