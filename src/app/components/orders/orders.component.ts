import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from '../../core/services/orders.service';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent implements OnInit {

  msgError:string='';

  isLoading:boolean=false;
  isLoadingCash:boolean=false;

cashPay :boolean =false

  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _ActivatedRoute = inject(ActivatedRoute);
  private readonly _OrdersService = inject(OrdersService);
  private readonly _Router = inject(Router);
  private readonly _CartService = inject(CartService);


  cartId: string | null = '';

  orders: FormGroup = this._FormBuilder.group({
    details: [null, [Validators.required]],
    phone: [null, [Validators.required] , Validators.pattern(/^01[0125][0-9]{8}$/)],
    city: [null , Validators.required],
  });

  ngOnInit(): void {

    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.cartId = params.get('id');
      },
    });
  }


  cashOrder():void{
    this.isLoadingCash=true;
    this._OrdersService.cashPayment(this.cartId! , this.orders.value).subscribe({
      next: (res) => {
        // console.log(res);
        if (res.status === 'success') {

this.cashPay =true

       
          this.isLoadingCash=false;
          this._Router.navigate(['/allorders']);
          this._CartService.cartNumber.set(0)

          }

      },
      error: (error) => {
        console.log(error);
        this.isLoadingCash=false;


      }
    })
  }



  orderSubmit(): void {
    this.isLoading=true;
    this._OrdersService.checkOut(this.cartId, this.orders.value).subscribe({
      next: (res) => {
        // console.log(res);
        if (res.status === 'success') {


        window.open(res.session.url ,'_self')
        this.isLoading=false;


        }
      },
      error: (error) => {
        console.log(error);
        this.isLoading=false;
 this.msgError=error.error.message
      },
    });
  }
}
