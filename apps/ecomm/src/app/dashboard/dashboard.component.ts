import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Product, ProductsService } from '../services/products.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatOptionSelectionChange } from '@angular/material/core';


@Component({
  selector: 'ansr-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  sortingOptions = [{name: 'Price Low to High', value: 0}, {name: 'Price High to Low', value: 1}];

  public products$!: Observable<Product[]>;

  constructor(private breakpointObserver: BreakpointObserver, private productsService: ProductsService, private router: Router) {}

  ngOnInit() {
    this.products$ = this.productsService.getProducts();
  }

  nameClicked(uniq_id: string) {
    this.router.navigate(['products', uniq_id]);
  }

  sortingChanged(event: MatOptionSelectionChange) {
    console.log('Sorting changed to ', event);
    if(!event.isUserInput) {
      return;
    }
    this.products$ = this.productsService.getProducts(event.source.value);
  }
}
