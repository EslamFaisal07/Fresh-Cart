import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
import { Itoken } from '../interfaces/itoken';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

userData:Itoken = {}as Itoken;
// userData:any = null;

private readonly _HttpClient = inject(HttpClient);
private readonly _Router = inject(Router);

setRegisterForm(data:object):Observable<any>
{
  return   this._HttpClient.post(`${environment.baseUrl}/api/v1/auth/signup` ,data)
}


setloginForm(data:object):Observable<any>
{
  return   this._HttpClient.post(`${environment.baseUrl}/api/v1/auth/signin` ,data)
}



saveUserData():void{
  if(localStorage.getItem("userToken") !== null){
    this.userData =   jwtDecode(localStorage.getItem("userToken")!)
  }
}


  logOut():void{
    localStorage.removeItem("userToken")
    this.userData={}as Itoken
this._Router.navigate(["/login"])
  }


setEmailVerify(data:object):Observable<any>{
  return this._HttpClient.post(`${environment.baseUrl}/api/v1/auth/forgotPasswords` , data)
}

setCodeVerify(data:object):Observable<any>{
  return this._HttpClient.post(`${environment.baseUrl}/api/v1/auth/verifyResetCode` , data)
}

setResetPassword(data:object):Observable<any>{
  return this._HttpClient.put(`${environment.baseUrl}/api/v1/auth/resetPassword` , data)
}



}
