import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Router} from '@angular/router';
import {CategoriesServerResponse, CategoryModelServer, ProductModelServer, ServerResponse} from '../../models/product.model';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: ProductModelServer[] = [];
  // categories: CategoryModelServer[] = [];


  constructor(private productService: ProductService,
              private cartService: CartService,
              private router: Router) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((prods: ServerResponse) => {
      this.products = prods.products;
    });

  }

  selectProduct(id: number) {
    this.router.navigate(['/product', id]).then();
  }

  AddToCart(id: number) {
    this.cartService.AddProductToCart(id);
  }

  // 23 june 12.00 = 1719144000
}
