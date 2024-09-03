import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WishListService {


// idArrarys :any =null

  private readonly  _HttpClient=inject(HttpClient)

  myHeaders:any = {token:localStorage.getItem('userToken')}

addToWishList(id:string):Observable<any>{


  return this._HttpClient.post(`${environment.baseUrl}/api/v1/wishlist`,
    {'productId': id },
    {
      headers: this.myHeaders
    }

  )
}

getProductWishList():Observable<any>{

  return this._HttpClient.get(`${environment.baseUrl}/api/v1/wishlist`,
    {headers:this.myHeaders})
}


removeProductFromWishList(id:string |undefined ):Observable<any>{
  return this._HttpClient.delete(`${environment.baseUrl}/api/v1/wishlist/${id}`,{headers:this.myHeaders})

}


}
