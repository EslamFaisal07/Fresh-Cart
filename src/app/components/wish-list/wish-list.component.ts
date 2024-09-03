import { Component, inject, OnInit } from '@angular/core';
import { WishListService } from '../../core/services/wish-list.service';
import { IwishList } from '../../core/interfaces/iwish-list';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Iproduct } from '../../core/interfaces/iproduct';
import { CartService } from '../../core/services/cart.service';
import { Icart } from '../../core/interfaces/icart';
import { log } from 'node:console';

@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss'
})
export class WishListComponent implements OnInit {
  private readonly _WishListService = inject(WishListService)
  private readonly _CartService = inject(CartService)
  private readonly _ToastrService = inject(ToastrService)

wishList:Iproduct[]  = []


ngOnInit(): void {
    this._WishListService.getProductWishList().subscribe({
      next: (res) => {

        // console.log(res.data.length);
        this.wishList = res.data


      },
      error: (error) => {console.error(error)},
    })
}

removeProduct(id:string |undefined):void{
  this._WishListService.removeProductFromWishList(id).subscribe({
    next: (res) => {
      // console.log(res);

    localStorage.setItem("heart",res.data)

this._ToastrService.error('Product removed from wish list')



this._WishListService.getProductWishList().subscribe({
  next:(response)=>{
    // console.log(response);
    this.wishList = response.data

  },
  error:(error)=>{console.log(error);
  }
})

    },
    error: (error) => {console.error(error)}
  })
}



addToCart(id:string):void{
  this._CartService.addProductToCart(id).subscribe({
    next:(res)=>{
      // console.log(res);
      this._ToastrService.success(res.message , 'FreshCart')
      this._CartService.cartNumber.set(res.numOfCartItems)



    },
    error:(err)=>{
      console.log(err);

    }
  })
}


}
