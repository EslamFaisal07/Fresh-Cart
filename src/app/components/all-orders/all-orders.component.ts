import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { OrdersService } from '../../core/services/orders.service';

import { jwtDecode } from 'jwt-decode';
import { Iproduct } from '../../core/interfaces/iproduct';
import { IallOrders } from '../../core/interfaces/iall-orders';
import { Subscription } from 'rxjs';
// import { IallOrders } from '../../core/interfaces/iall-orders';



@Component({
  selector: 'app-all-orders',
  standalone: true,
  imports: [],
  templateUrl: './all-orders.component.html',
  styleUrl: './all-orders.component.scss'
})
export class AllOrdersComponent implements OnInit , OnDestroy{


  private readonly _OrdersService =inject(OrdersService)


allOrders:IallOrders[] = []

  tokenBefore : any = localStorage.getItem('userToken')
  tokenAfter : any = jwtDecode(this.tokenBefore)

  AllOrdersSubscribe!:Subscription


ngOnInit(): void {
  // console.log(this.tokenAfter.id)
  this.AllOrdersSubscribe =  this._OrdersService.getUserOrders(this.tokenAfter.id).subscribe({
      next:(res)=>{


        // console.log(res);

        // console.log(this.tokenAfter.id)
        this.allOrders = res

      },
      error:(err)=>{
        // console.log(err);

      }
    })
}


ngOnDestroy(): void {
  this.AllOrdersSubscribe?.unsubscribe()

}

}
