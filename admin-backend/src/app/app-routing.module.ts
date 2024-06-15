import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainContentComponent} from './components/main-content/main-content.component';
import {AllProductsComponent} from './components/all-products/all-products.component';
import {AllUsersComponent} from './components/all-users/all-users.component';
import {AllOrdersComponent} from './components/all-orders/all-orders.component';
import {AddNewProductComponent} from './components/add-new-product/add-new-product.component';

const routes: Routes = [
  {
    path: '',
    component: MainContentComponent
  },
  {
    path: 'all-products',
    component: AllProductsComponent
  },
  {
    path: 'all-users',
    component: AllUsersComponent
  },
  {
    path: 'all-orders',
    component: AllOrdersComponent
  },
  {
    path: 'add-new-product',
    component: AddNewProductComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
