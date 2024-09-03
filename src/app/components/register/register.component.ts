import { Component, inject, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule , NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnDestroy{


  private readonly _AuthService = inject(AuthService)
  private readonly _FormBuilder = inject(FormBuilder)
  private readonly _Router = inject(Router)

  msgError:string='';
  isLoading:boolean=false;
  registerSubscribe!:Subscription

  registerForm:FormGroup = this._FormBuilder.group({
    name:[null, [Validators.required , Validators.minLength(3) , Validators.maxLength(20)  ]],
    email:[null, [Validators.required , Validators.email]],
    password:[null , [Validators.required , Validators.pattern(/^\w{6,}$/)] ],
    rePassword:[null],
    phone:[null, [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]]
  }, {validators:this.confirmPassword})




confirmPassword(  g:AbstractControl  )
{

  if( g.get("password")?.value === g.get("rePassword")?.value    )
  {
return null
  }
  else{
    return{mismatch:true}
  }

}



registerSubmit():void
{
if (this.registerForm.valid) {
  this.isLoading=true;

 this.registerSubscribe =  this._AuthService.setRegisterForm(this.registerForm.value).subscribe({
    next:(res)=>{
// console.log(res); //log
if(res.message == "success"){
  this._Router.navigate(['/login']); //navigate to login
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
  this.registerForm.setErrors({mismatch:true})
  this.registerForm.markAllAsTouched()
}


  }
  ngOnDestroy(): void {
      this.registerSubscribe?.unsubscribe()
  }
}
