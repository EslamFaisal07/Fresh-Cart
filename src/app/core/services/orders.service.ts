import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {


  private readonly _AuthService = inject(AuthService)
  constructor(private _HttpClient:HttpClient) { }
myHeaders:any = {token:localStorage.getItem("userToken")}

// userId  = this._AuthService.userData?.id


  checkOut(id:string |null , shapingDetails:object):Observable<any>{
    return this._HttpClient.post(`${environment.baseUrl}/api/v1/orders/checkout-session/${id}?url=${environment.urlServer}`,
      {
        "shippingAddress":shapingDetails
    }
    )
  }


  getUserOrders(id:string):Observable<any>{

    return this._HttpClient.get(`${environment.baseUrl}/api/v1/orders/user/${id}`)
  }


  cashPayment(id:string , shapingDetails:object):Observable<any>{
    return this._HttpClient.post(`${environment.baseUrl}/api/v1/orders/${id}`,
     
      {
        "shippingAddress" :shapingDetails
      }
    )
  }
}
