import{a as D}from"./chunk-4FC62TAI.js";import"./chunk-UGGDSA3O.js";import{a as T,b as g,c as L,d as R,f as q,g as N,h as w,i as F,k as P}from"./chunk-GPVGBQT2.js";import{a as k}from"./chunk-I5MYN75V.js";import{f as E,h as O}from"./chunk-UP7XQW4A.js";import"./chunk-53U67BYA.js";import{$ as y,Fb as a,Gb as b,Na as l,Nb as x,Y as f,db as d,fb as v,jb as m,nb as r,ob as t,pb as u,wb as S,xb as h}from"./chunk-C44XZLMI.js";import"./chunk-CWTPBX7D.js";function I(e,o){e&1&&(r(0,"p",17),a(1,"Details is Required ."),t())}function A(e,o){if(e&1&&(r(0,"div",6),d(1,I,2,0,"p",17),t()),e&2){let s,i=h();l(),m(1,(s=i.orders.get("details"))!=null&&s.getError("required")?1:-1)}}function G(e,o){e&1&&(r(0,"p",17),a(1,"phone is Required ."),t())}function M(e,o){e&1&&(r(0,"p",17),a(1,"accept only egypt phone numbers ."),t())}function j(e,o){if(e&1&&(r(0,"div",6),d(1,G,2,0,"p",17)(2,M,2,0),t()),e&2){let s,i=h();l(),m(1,(s=i.orders.get("phone"))!=null&&s.getError("required")?1:(s=i.orders.get("phone"))!=null&&s.getError("pattern")?2:-1)}}function B(e,o){e&1&&(r(0,"p",17),a(1,"City is Required ."),t())}function V(e,o){if(e&1&&(r(0,"div",6),d(1,B,2,0,"p",17),t()),e&2){let s,i=h();l(),m(1,(s=i.orders.get("city"))!=null&&s.getError("required")?1:-1)}}function $(e,o){e&1&&(r(0,"span"),u(1,"i",18),t())}function z(e,o){e&1&&(r(0,"span"),u(1,"i",18),t())}function H(e,o){if(e&1&&(r(0,"p",15),a(1),t()),e&2){let s=h();l(),b(s.msgError)}}function J(e,o){e&1&&(r(0,"p",16),a(1," Cash Paid Success"),t())}var te=(()=>{let o=class o{constructor(){this.msgError="",this.isLoading=!1,this.isLoadingCash=!1,this.cashPay=!1,this._FormBuilder=f(F),this._ActivatedRoute=f(E),this._OrdersService=f(D),this._Router=f(O),this._CartService=f(k),this.cartId="",this.orders=this._FormBuilder.group({details:[null,[g.required]],phone:[null,[g.required],g.pattern(/^01[0125][0-9]{8}$/)],city:[null,g.required]})}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:i=>{this.cartId=i.get("id")}})}cashOrder(){this.isLoadingCash=!0,this._OrdersService.cashPayment(this.cartId,this.orders.value).subscribe({next:i=>{i.status==="success"&&(this.cashPay=!0,this.isLoadingCash=!1,this._Router.navigate(["/allorders"]),this._CartService.cartNumber.set(0))},error:i=>{console.log(i),this.isLoadingCash=!1}})}orderSubmit(){this.isLoading=!0,this._OrdersService.checkOut(this.cartId,this.orders.value).subscribe({next:i=>{i.status==="success"&&(window.open(i.session.url,"_self"),this.isLoading=!1)},error:i=>{console.log(i),this.isLoading=!1,this.msgError=i.error.message}})}};o.\u0275fac=function(C){return new(C||o)},o.\u0275cmp=y({type:o,selectors:[["app-orders"]],standalone:!0,features:[x],decls:29,vars:10,consts:[[1,"bg-main-light","rounded-4","shadow","p-2","w-75","mx-auto"],[1,"text-center"],[3,"ngSubmit","formGroup"],[1,"my-2"],["for","details"],["formControlName","details","id","details","type","text",1,"form-control"],[1,"alert","alert-danger","w-100"],["for","phone"],["formControlName","phone","id","phone","type","tel",1,"form-control"],["for","city"],["formControlName","city","id","city","type","tel",1,"form-control"],[1,"d-flex","align-items-center","justify-content-center","g-4","mt-4"],["type","button",1,"btn-main","mx-3",3,"click","disabled"],["type","submit",1,"btn-main",3,"click","disabled"],["width","50px","src","./assets/images/visa.jpg","alt","",1,"rounded-2"],[1,"alert","alert-danger","my-3"],[1,"alert","alert-success","mt-3","text-white","text-center"],[1,"m-0"],[1,"fas","fa-spin","fa-spinner"]],template:function(C,n){if(C&1&&(r(0,"section",0)(1,"h1",1),a(2," Shipping Address"),t(),r(3,"form",2),S("ngSubmit",function(){return n.orderSubmit()}),r(4,"div",3)(5,"label",4),a(6,"Details"),t(),u(7,"input",5),d(8,A,2,1,"div",6),t(),r(9,"div",3)(10,"label",7),a(11,"Phone"),t(),u(12,"input",8),d(13,j,3,1,"div",6),t(),r(14,"div",3)(15,"label",9),a(16,"City"),t(),u(17,"input",10),d(18,V,2,1,"div",6),t(),r(19,"div",11)(20,"button",12),S("click",function(){return n.cashOrder()}),a(21,"Pay Cash "),d(22,$,2,0,"span"),t(),r(23,"button",13),S("click",function(){return n.orderSubmit()}),a(24,"Online Payment "),u(25,"img",14),d(26,z,2,0,"span"),t()(),d(27,H,2,1,"p",15),t(),d(28,J,2,0,"p",16),t()),C&2){let c,p,_;l(3),v("formGroup",n.orders),l(5),m(8,(c=n.orders.get("details"))!=null&&c.errors&&((c=n.orders.get("details"))!=null&&c.touched||(c=n.orders.get("details"))!=null&&c.dirty)?8:-1),l(5),m(13,(p=n.orders.get("phone"))!=null&&p.errors&&((p=n.orders.get("phone"))!=null&&p.touched||(p=n.orders.get("phone"))!=null&&p.dirty)?13:-1),l(5),m(18,(_=n.orders.get("city"))!=null&&_.errors&&((_=n.orders.get("city"))!=null&&_.touched||(_=n.orders.get("city"))!=null&&_.dirty)?18:-1),l(2),v("disabled",n.orders.invalid),l(2),m(22,n.isLoadingCash?22:-1),l(),v("disabled",n.orders.invalid),l(3),m(26,n.isLoading?26:-1),l(),m(27,n.msgError?27:-1),l(),m(28,n.cashPay?28:-1)}},dependencies:[P,q,T,L,R,N,w]});let e=o;return e})();export{te as OrdersComponent};
