import { CartItem } from './../../core/interfaces/iall-orders';
import { Component, ElementRef, inject, OnDestroy, OnInit, ViewChild, viewChild } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { Iproduct } from '../../core/interfaces/iproduct';
import { Subscription } from 'rxjs';
import { CategoriesService } from '../../core/services/categories.service';
import { Icategories } from '../../core/interfaces/icategories';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { SearchPipe } from '../../core/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { log } from 'console';
import { WishListService } from '../../core/services/wish-list.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule , RouterLink , SearchPipe,  FormsModule , NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit , OnDestroy {

  customOptionsMain: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
 items:1,
    nav: true
  }

  customOptionsCat: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      } ,
      1100: {
        items: 6
      }
    },
    nav: false
  }


  textSearch:string ="";



productList :Iproduct[]=[]
categoriesList :Icategories[]=[]

private readonly _ProductsService = inject(ProductsService)
private readonly _CartService = inject(CartService)
private readonly _CategoriesService = inject(CategoriesService)
private readonly _ToastrService = inject(ToastrService)
private readonly _WishListService = inject(WishListService)

AllProductSubscribe!:Subscription
categoriesSubscribe!:Subscription

idArrarys :any =null




ngOnInit(): void {
   this.categoriesSubscribe =  this._CategoriesService.getAllCategories().subscribe({
  next:(res)=>{
    console.log(res.data);
   this.categoriesList = res.data



  },
  error:(err)=>{
    console.log(err);

  }
})


   this.AllProductSubscribe = this._ProductsService.getAllProduct().subscribe({
      next: (res) => {
        this.productList = res.data
        // console.log(res.data);


        this.idArrarys = res.data

        if (localStorage.getItem("heart") !==null) {
          this.idArrarys = localStorage.getItem('heart')
        }



      },
      error:(err)=>{
        // console.log(err);

      }
    })
}

addToCart(id:string):void{
  this._CartService.addProductToCart(id).subscribe({
    next:(res)=>{
      // console.log(res);
      this._ToastrService.success(res.message , 'FreshCart')
      this._CartService.cartNumber.set(res.numOfCartItems)
      console.log(res.numOfCartItems);
// this._CartService.numOfCartItems = res.numOfCartItems


    },
    error:(err)=>{
      console.log(err);

    }
  })
}





wishAdd(id:string):void{
  this._WishListService.addToWishList(id).subscribe({
    next:(res)=>{
      // console.log(res);

      this._ToastrService.success(res.message)

this.idArrarys = res.data

localStorage.setItem("heart",this.idArrarys.toString())



    },
    error:(err)=>{
      console.log(err);

    }
  })
}










removeFromWishList(id:string):void{
  this._WishListService.removeProductFromWishList(id).subscribe({
    next:(res)=>{
      // console.log(res);
      this.idArrarys = res.data

localStorage.setItem("heart",this.idArrarys.toString())
this._ToastrService.warning(res.message)
    },
    error:(err)=>{
      console.log(err);
    }
  })

}


ngOnDestroy(): void {
this.AllProductSubscribe?.unsubscribe()
this.categoriesSubscribe?.unsubscribe()
}
}
