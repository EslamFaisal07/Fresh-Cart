import{b as O}from"./chunk-UGGDSA3O.js";import{a as G,b as f,c as V,d as B,f as M,g as k,h as $,i as j,k as I}from"./chunk-GPVGBQT2.js";import{h as D}from"./chunk-UP7XQW4A.js";import{h as A}from"./chunk-53U67BYA.js";import{$ as N,Fb as s,Gb as L,Na as a,Nb as x,Qb as y,Y as T,db as _,fb as h,jb as c,nb as i,ob as r,pb as F,wb as q,xb as S}from"./chunk-C44XZLMI.js";import"./chunk-CWTPBX7D.js";var R=(t,n)=>({"is-valid":t,"is-invalid":n});function z(t,n){t&1&&(i(0,"p",18),s(1,"Name is Required ."),r())}function H(t,n){t&1&&(i(0,"p",18),s(1,"Name Should be more than or equal 3 chars ."),r())}function J(t,n){t&1&&(i(0,"p",18),s(1,"Name Should be less than or equal 20 chars ."),r())}function K(t,n){if(t&1&&(i(0,"div",6),_(1,z,2,0,"p",18)(2,H,2,0)(3,J,2,0),r()),t&2){let l,o=S();a(),c(1,(l=o.registerForm.get("name"))!=null&&l.getError("required")?1:(l=o.registerForm.get("name"))!=null&&l.getError("minlength")?2:(l=o.registerForm.get("name"))!=null&&l.getError("maxlength")?3:-1)}}function Q(t,n){t&1&&(i(0,"p",18),s(1,"Email is Required ."),r())}function U(t,n){t&1&&(i(0,"p",18),s(1,"Enter Valid Email ."),r())}function W(t,n){if(t&1&&(i(0,"div",6),_(1,Q,2,0,"p",18)(2,U,2,0),r()),t&2){let l,o=S();a(),c(1,(l=o.registerForm.get("email"))!=null&&l.getError("required")?1:(l=o.registerForm.get("email"))!=null&&l.getError("email")?2:-1)}}function X(t,n){t&1&&(i(0,"p",18),s(1,"password is Required ."),r())}function Y(t,n){t&1&&(i(0,"p",18),s(1,"password must start with upperCase then from 6 to more any chars ."),r())}function Z(t,n){if(t&1&&(i(0,"div",6),_(1,X,2,0,"p",18)(2,Y,2,0),r()),t&2){let l,o=S();a(),c(1,(l=o.registerForm.get("password"))!=null&&l.getError("required")?1:(l=o.registerForm.get("password"))!=null&&l.getError("pattern")?2:-1)}}function ee(t,n){t&1&&(i(0,"p",13),s(1,"Password confirmation is incorrect"),r())}function te(t,n){t&1&&(i(0,"p",18),s(1,"Phone is Required ."),r())}function re(t,n){t&1&&(i(0,"p",18),s(1,"accept only egypt phone numbers ."),r())}function ie(t,n){if(t&1&&(i(0,"div",6),_(1,te,2,0,"p",18)(2,re,2,0),r()),t&2){let l,o=S();a(),c(1,(l=o.registerForm.get("phone"))!=null&&l.getError("required")?1:(l=o.registerForm.get("phone"))!=null&&l.getError("pattern")?2:-1)}}function ne(t,n){t&1&&(i(0,"span"),F(1,"i",19),r())}function le(t,n){if(t&1&&(i(0,"p",17),s(1),r()),t&2){let l=S();a(),L(l.msgError)}}var _e=(()=>{let n=class n{constructor(){this._AuthService=T(O),this._FormBuilder=T(j),this._Router=T(D),this.msgError="",this.isLoading=!1,this.registerForm=this._FormBuilder.group({name:[null,[f.required,f.minLength(3),f.maxLength(20)]],email:[null,[f.required,f.email]],password:[null,[f.required,f.pattern(/^\w{6,}$/)]],rePassword:[null],phone:[null,[f.required,f.pattern(/^01[0125][0-9]{8}$/)]]},{validators:this.confirmPassword})}confirmPassword(o){return o.get("password")?.value===o.get("rePassword")?.value?null:{mismatch:!0}}registerSubmit(){this.registerForm.valid?(this.isLoading=!0,this.registerSubscribe=this._AuthService.setRegisterForm(this.registerForm.value).subscribe({next:o=>{o.message=="success"&&this._Router.navigate(["/login"]),this.isLoading=!1},error:o=>{this.msgError=o.error.message,console.log(o),this.isLoading=!1}})):(this.registerForm.setErrors({mismatch:!0}),this.registerForm.markAllAsTouched())}ngOnDestroy(){this.registerSubscribe?.unsubscribe()}};n.\u0275fac=function(b){return new(b||n)},n.\u0275cmp=N({type:n,selectors:[["app-register"]],standalone:!0,features:[x],decls:33,vars:29,consts:[[1,"bg-main-light","shadow","p-4","my-2","rounded-4"],[1,"h2","text-main"],[3,"ngSubmit","formGroup"],[1,"my-2"],["for","name"],["id","name","type","text","formControlName","name",1,"form-control",3,"ngClass"],[1,"alert","alert-danger","w-100"],["for","email"],["id","email","type","email","formControlName","email",1,"form-control",3,"ngClass"],["for","password"],["id","password","type","password","formControlName","password",1,"form-control",3,"ngClass"],["for","rePassword"],["id","rePassword","type","password","formControlName","rePassword",1,"form-control",3,"ngClass"],[1,"alert","alert-danger","m-0","w-100"],["for","phone"],["id","phone","type","tel","formControlName","phone",1,"form-control",3,"ngClass"],["type","submit",1,"btn-main","ms-auto","d-block","mt-2",3,"disabled"],[1,"alert","alert-danger","my-3"],[1,"m-0"],[1,"fas","fa-spin","fa-spinner"]],template:function(b,e){if(b&1&&(i(0,"section",0)(1,"h1",1),s(2,"Register Now :"),r(),i(3,"form",2),q("ngSubmit",function(){return e.registerSubmit()}),i(4,"div",3)(5,"label",4),s(6,"Name :"),r(),F(7,"input",5),_(8,K,4,1,"div",6),r(),i(9,"div",3)(10,"label",7),s(11,"Email :"),r(),F(12,"input",8),_(13,W,3,1,"div",6),r(),i(14,"div",3)(15,"label",9),s(16,"Password :"),r(),F(17,"input",10),_(18,Z,3,1,"div",6),r(),i(19,"div",3)(20,"label",11),s(21,"RePassword :"),r(),F(22,"input",12),_(23,ee,2,0,"p",13),r(),i(24,"div",3)(25,"label",14),s(26,"Phone :"),r(),F(27,"input",15),_(28,ie,3,1,"div",6),r(),i(29,"button",16),s(30,` Register
`),_(31,ne,2,0,"span"),r(),_(32,le,2,1,"p",17),r()()),b&2){let m,C,u,v,d,E,g,P,p,w;a(3),h("formGroup",e.registerForm),a(4),h("ngClass",y(14,R,!((m=e.registerForm.get("name"))!=null&&m.errors)&&(((m=e.registerForm.get("name"))==null?null:m.touched)||((m=e.registerForm.get("name"))==null?null:m.dirty)),((m=e.registerForm.get("name"))==null?null:m.errors)&&(((m=e.registerForm.get("name"))==null?null:m.touched)||((m=e.registerForm.get("name"))==null?null:m.dirty)))),a(),c(8,(C=e.registerForm.get("name"))!=null&&C.errors&&((C=e.registerForm.get("name"))!=null&&C.touched||(C=e.registerForm.get("name"))!=null&&C.dirty)?8:-1),a(4),h("ngClass",y(17,R,!((u=e.registerForm.get("email"))!=null&&u.errors)&&(((u=e.registerForm.get("email"))==null?null:u.touched)||((u=e.registerForm.get("email"))==null?null:u.dirty)),((u=e.registerForm.get("email"))==null?null:u.errors)&&(((u=e.registerForm.get("email"))==null?null:u.touched)||((u=e.registerForm.get("email"))==null?null:u.dirty)))),a(),c(13,(v=e.registerForm.get("email"))!=null&&v.errors&&((v=e.registerForm.get("email"))!=null&&v.touched||(v=e.registerForm.get("email"))!=null&&v.dirty)?13:-1),a(4),h("ngClass",y(20,R,!((d=e.registerForm.get("password"))!=null&&d.errors)&&(((d=e.registerForm.get("password"))==null?null:d.touched)||((d=e.registerForm.get("password"))==null?null:d.dirty)),((d=e.registerForm.get("password"))==null?null:d.errors)&&(((d=e.registerForm.get("password"))==null?null:d.touched)||((d=e.registerForm.get("password"))==null?null:d.dirty)))),a(),c(18,(E=e.registerForm.get("password"))!=null&&E.errors&&((E=e.registerForm.get("password"))!=null&&E.touched||(E=e.registerForm.get("password"))!=null&&E.dirty)?18:-1),a(4),h("ngClass",y(23,R,!((g=e.registerForm.get("rePassword"))!=null&&g.errors)&&(((g=e.registerForm.get("rePassword"))==null?null:g.touched)||((g=e.registerForm.get("rePassword"))==null?null:g.dirty)),((g=e.registerForm.get("rePassword"))==null?null:g.errors)&&(((g=e.registerForm.get("rePassword"))==null?null:g.touched)||((g=e.registerForm.get("rePassword"))==null?null:g.dirty)))),a(),c(23,e.registerForm.getError("mismatch")&&((P=e.registerForm.get("rePassword"))!=null&&P.touched||(P=e.registerForm.get("rePassword"))!=null&&P.dirty)?23:-1),a(4),h("ngClass",y(26,R,!((p=e.registerForm.get("phone"))!=null&&p.errors)&&(((p=e.registerForm.get("phone"))==null?null:p.touched)||((p=e.registerForm.get("phone"))==null?null:p.dirty)),((p=e.registerForm.get("phone"))==null?null:p.errors)&&(((p=e.registerForm.get("phone"))==null?null:p.touched)||((p=e.registerForm.get("phone"))==null?null:p.dirty)))),a(),c(28,(w=e.registerForm.get("phone"))!=null&&w.errors&&((w=e.registerForm.get("phone"))!=null&&w.touched||(w=e.registerForm.get("phone"))!=null&&w.dirty)?28:-1),a(),h("disabled",e.registerForm.invalid||e.isLoading),a(2),c(31,e.isLoading?31:-1),a(),c(32,e.msgError?32:-1)}},dependencies:[I,M,G,V,B,k,$,A]});let t=n;return t})();export{_e as RegisterComponent};
