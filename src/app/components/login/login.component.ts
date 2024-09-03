import { Component, inject, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgClass } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnDestroy{




  private readonly _AuthService = inject(AuthService)
  private readonly _FormBuilder = inject(FormBuilder)
  private readonly _Router = inject(Router)

  msgError:string='';
  isLoading:boolean=false;
  loginSubscribe!:Subscription;

  loginForm:FormGroup = this._FormBuilder.group({
    email:[null, [Validators.required , Validators.email]],
    password:[null , [Validators.required , Validators.pattern(/^\w{6,}$/)] ],

  })


loginSubmit():void
{
if (this.loginForm.valid) {
  this.isLoading=true;

 this.loginSubscribe = this._AuthService.setloginForm(this.loginForm.value).subscribe({
    next:(res)=>{
// console.log(res); //log
if(res.message == "success"){

// save token
localStorage.setItem("userToken", res.token)
this._AuthService.saveUserData()


  this._Router.navigate(['/home']); //navigate to login
}
this.isLoading=false;



    },
    error:(err:HttpErrorResponse)=>{
      this.msgError=err.error.message
console.log(err);
this.isLoading=false;

    }
  })

}
else{
  this.loginForm.setErrors({mismatch:true})
  this.loginForm.markAllAsTouched()
}


  }
  ngOnDestroy(): void {
      this.loginSubscribe?.unsubscribe();
  }
}
