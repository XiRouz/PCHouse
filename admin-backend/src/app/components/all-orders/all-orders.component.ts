import { Component, OnDestroy, OnInit} from '@angular/core';
import {OrderService} from '../../order.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-all-orders',
  // standalone: true,
  // imports: [],
  templateUrl: './all-orders.component.html',
  styleUrl: './all-orders.component.css'
})
export class AllOrdersComponent {
  orders: any[] = [];
  subs: Subscription[] = [];
  errorMessage: string;
  hasError = false;
  success = false;

  constructor(private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.hasError = false;
    this.subs.push(this.orderService.getAllOrders().subscribe((os: any) => {
      this.orders = os.orders;
      console.log("orders:")
      console.log(this.orders);      
    }));
  }

  ngOnDestroy(): void {
    this.subs.map(s => s.unsubscribe());
  }
}
