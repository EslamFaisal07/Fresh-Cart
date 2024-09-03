import { Component, inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent implements OnDestroy {

  msgError:string='';

  isLoading:boolean=false;


  private readonly _FormBuilder=inject(FormBuilder)
  private readonly _AuthService=inject(AuthService)
  private readonly _Router=inject(Router)
emailSubscribe!:Subscription
codeSubscribe!:Subscription
resetSubscribe!:Subscription
  step:number=1;

  verifyEmail:FormGroup = this._FormBuilder.group({
    email:[null, [Validators.required , Validators.email]],
  })




  verifyCode:FormGroup = this._FormBuilder.group({
    resetCode:[null, [Validators.required , Validators.pattern(/^[0-9]{6}$/)]],
  })




  resetPassword:FormGroup = this._FormBuilder.group({
    email:[null, [Validators.required , Validators.email]],
    newPassword:[null , [Validators.required , Validators.pattern(/^\w{6,}$/)] ],

  })



  emailSubmit():void{
    this.isLoading=true;
  let emailValue =   this.verifyEmail.get("email")?.value
  this.resetPassword.get("email")?.patchValue(emailValue)

this.emailSubscribe = this._AuthService.setEmailVerify(this.verifyEmail.value).subscribe({
  next: (res) => {
    console.log(res);
    if (res.statusMsg == "success") {
this.step = 2 ;
this.isLoading=false;
    }

  },
  error: (err) => {
    console.log(err);
    this.msgError=err.error.message

    this.isLoading=false;

  }
})
  }
  codeSubmit():void{
    this.isLoading=true;
    this.emailSubscribe = this._AuthService.setCodeVerify(this.verifyCode.value).subscribe({
      next: (res) => {
        // console.log(res);
        if (res.status == "Success") {
    this.step = 3 ;
    this.isLoading=false;
        }

      },
      error: (err) => {
        // console.log(err);
        this.msgError=err.error.message
        this.isLoading=false;

      }
    })
      }
      ResetPasswordSubmit():void{
        this.isLoading=true;
        this.emailSubscribe = this._AuthService.setResetPassword(this.resetPassword.value).subscribe({
          next: (res) => {
            // console.log(res);
         localStorage.setItem("userToken", res.token)
this._AuthService.saveUserData()
this._Router.navigate(['/home'])
this.isLoading=false;


          },
          error: (err) => {
            // console.log(err);
            this.msgError=err.error.message
            this.isLoading=false;
          }
        })
          }

ngOnDestroy(): void {
    this.emailSubscribe.unsubscribe();
}

}
