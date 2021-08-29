import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product, ProductsService } from '../services/products.service';

@Component({
  selector: 'ansr-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product$!: Observable<Product>;
  uniq_id = '';

  constructor(private productService: ProductsService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.uniq_id = this.activatedRoute.snapshot.params.id;
    this.product$ = this.productService.getProductById(this.uniq_id).pipe(map(res => res[0]));
  }

}
