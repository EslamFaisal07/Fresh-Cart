import './polyfills.server.mjs';
import{a as r}from"./chunk-CBYSDMSX.mjs";import{y as a}from"./chunk-6M3AHHX6.mjs";import{S as s,Y as o}from"./chunk-UAZOSIRX.mjs";var m=(()=>{let t=class t{constructor(){this._HttpClient=o(a),this.myHeaders={token:localStorage.getItem("userToken")}}addToWishList(e){return this._HttpClient.post(`${r.baseUrl}/api/v1/wishlist`,{productId:e},{headers:this.myHeaders})}getProductWishList(){return this._HttpClient.get(`${r.baseUrl}/api/v1/wishlist`,{headers:this.myHeaders})}removeProductFromWishList(e){return this._HttpClient.delete(`${r.baseUrl}/api/v1/wishlist/${e}`,{headers:this.myHeaders})}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=s({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();export{m as a};
