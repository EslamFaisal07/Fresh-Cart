import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../core/services/products.service';
import { Subscription } from 'rxjs';
import { Iproduct } from '../../core/interfaces/iproduct';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../core/services/cart.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit , OnDestroy{

  detailsOption: OwlOptions = {
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





private readonly _ActivatedRoute = inject(ActivatedRoute)
private readonly _ProductsService = inject(ProductsService)
private readonly _ToastrService = inject(ToastrService )
private readonly _CartService = inject(CartService)



detailsSub!:Subscription
detailsProduct:Iproduct | null = null;

ngOnInit(): void {
this._ActivatedRoute.paramMap.subscribe({
  next: (p) => {
    let idProduct = p.get('id')
 this.detailsSub =    this._ProductsService.getSpecificProduct(idProduct).subscribe({
      next:(res)=>{
        // console.log(res.data.images);

        this.detailsProduct =res.data



      },
      error: (err) => {
        // console.log(err);

      }
    })

  }
})


}


addToCart(id:string):void{
  this._CartService.addProductToCart(id).subscribe({
    next:(res)=>{
      // console.log(res);
      this._ToastrService.success(res.message , 'FreshCart')

    },
    error:(err)=>{
      // console.log(err);

    }
  })
}


ngOnDestroy(): void {
this.detailsSub.unsubscribe()
}

}
