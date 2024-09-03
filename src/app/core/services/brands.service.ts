import { HttpClient } from '@angular/common/http';
import { inject, Injectable, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandsService  {

 private readonly _HttpClient =inject(HttpClient)


 showBrands():Observable<any>{
  return this._HttpClient.get(`${environment.baseUrl}/api/v1/brands`)
 }

}
