import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { Subscription } from 'rxjs';
import { Iproduct } from '../../core/interfaces/iproduct';
import { RouterLink } from '@angular/router';
import { SearchPipe } from '../../core/pipes/search.pipe';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../core/services/cart.service';
import { FormsModule } from '@angular/forms';
import { WishListService } from '../../core/services/wish-list.service';
import { NgxPaginationModule, PaginatePipe } from 'ngx-pagination';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink ,SearchPipe ,FormsModule ,  NgxPaginationModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent  implements OnInit , OnDestroy{
  private readonly _ToastrService = inject(ToastrService)
  private readonly _CartService = inject(CartService)
  private readonly _WishListService = inject(WishListService)

  idArrarys :any =null
  pageSize: number = 0;
  currentPage: number = 1;
  total: number = 0;

  private readonly _ProductsService =inject(ProductsService)

productSubscribe!:Subscription

productList:Iproduct[]=[]


textSearch:string ="";





  ngOnInit(): void {
this.productSubscribe = this._ProductsService.getAllProduct().subscribe({
  next:(res)=>{


// console.log(res);
this.productList =res.data
this.idArrarys = res.data
this.pageSize = res.metadata.limit;
this.currentPage = res.metadata.currentPage;
this.total = res.results;




if (localStorage.getItem("heart") !==null) {
  this.idArrarys = localStorage.getItem('heart')
}

  },
  error:(err)=>{
    console.log(err);

  }
})
  }
  pageChanged(event: any): void {
    this._ProductsService.getAllProduct(event).subscribe({
      next: (response) => {
        // console.log(response.metadata);
        this.productList = response.data;
        this.pageSize = response.metadata.limit;
        this.currentPage = response.metadata.currentPage;
        this.total = response.results;

      },
      error: (err) => {console.log(err);
      }
    });
  }

  addToCart(id:string):void{
    this._CartService.addProductToCart(id).subscribe({
      next:(res)=>{
        // console.log(res);
        this._ToastrService.success(res.message , 'FreshCart')
        this._CartService.cartNumber.set(res.numOfCartItems)
        // console.log( this._CartService.cartNumber);


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
this.productSubscribe.unsubscribe()
  }



}
