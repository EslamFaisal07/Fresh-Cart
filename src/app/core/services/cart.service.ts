import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartNumber:WritableSignal<number>= signal(0)

// numOfCartItems :WritableSignal<number>=signal(0)

  private readonly _HttpClient = inject(HttpClient)

  myHeaders:any = {token:localStorage.getItem('userToken')}

addProductToCart(id:string):Observable<any>{


let data = { "productId": id}


  return this._HttpClient.post(`${environment.baseUrl}/api/v1/cart` , data)
}



getProductsCart():Observable<any>{
  return this._HttpClient.get(`${environment.baseUrl}/api/v1/cart`, {
    headers:this.myHeaders
  })
}


deleteSpecificCartItem(id:string):Observable<any>{
  return this._HttpClient.delete(`${environment.baseUrl}/api/v1/cart/${id}`,)


}

updateProductQuantity(id:string , newCount:number):Observable<any>{
  return this._HttpClient.put(`${environment.baseUrl}/api/v1/cart/${id}`, {
"count": newCount
  })

  }


clearCart():Observable<any>{
  return this._HttpClient.delete(`${environment.baseUrl}/api/v1/cart`,)
}


}
