import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Product, ProductsService } from '../services/products.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'ansr-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */

  public products$!: Observable<Product[]>;

  constructor(private breakpointObserver: BreakpointObserver, private productsService: ProductsService, private router: Router) {}

  ngOnInit() {
    this.products$ = this.productsService.getProducts();
  }

  nameClicked(uniq_id: string) {
    this.router.navigate(['products', uniq_id]);
  }
}
