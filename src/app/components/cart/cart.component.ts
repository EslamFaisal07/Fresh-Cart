import { Component, computed, inject, OnInit, Signal, signal } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { Icart } from '../../core/interfaces/icart';
import { CurrencyPipe } from '@angular/common';

import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
cartItem:Icart   = {} as Icart
num : any
numItems!:number

  private readonly _CartService = inject(CartService)
  private readonly _ToastrService = inject(ToastrService)



ngOnInit(): void {
    this._CartService.getProductsCart().subscribe({
      next:(res)=>{
        // console.log(res.data.products.length);
        this.num = res.data.products.length
        this.numItems = res.data.products.length

        this.cartItem=res.data
      },
      error:(err)=>{
        // console.log(err);

      }
    })
}


delete(id:string):void{

  Swal.fire({
    title: "Are you sure?",
    text: "You Want to Delete This Product",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your Product has been deleted.",
        icon: "success"
      }).then(()=>{
        this._CartService.deleteSpecificCartItem(id).subscribe({
          next:(res)=>{
            // console.log(res);
            this.cartItem= res.data
            this._CartService.cartNumber.set(res.numOfCartItems)

            this._ToastrService.error("Product Is Removed")

            this.numItems = res.numOfCartItems


          },
          error:(err)=>{
            // console.log(err);
          }
        })
      });
    }
  });


}

updateCount(id:string , Count:number){
 if (Count > 0) {
  this._CartService.updateProductQuantity(id,Count).subscribe({
    next:(res)=>{
      // console.log(res);
      this.cartItem= res.data

    },
    error:(err)=>{
      // console.log(err);
    }
  })
 }
}
clearItems():void{
  Swal.fire({
    title: "Are you sure?",
    text: "You Want To Clear Your Cart",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes,  Clear it!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your Cart is Clear .",
        icon: "success"
      }).then(()=>{
        this._CartService.clearCart().subscribe({
          next:(res)=>{
            // console.log(res);
           if(res.message =="success"){
            this.cartItem={} as Icart
            this._CartService.cartNumber.set(0)
            this.numItems = 0
           }

          },
          error:(err)=>{
            // console.log(err);

          }

        })
      });
    }
  });

}

}


