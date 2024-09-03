import { Component, computed, inject, OnInit, Signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrl: './nav-blank.component.scss'
})
export class NavBlankComponent implements OnInit {
  readonly _CartService= inject(CartService)

  countNumber:Signal<number> = computed(()=>this._CartService.cartNumber())

ngOnInit(): void {
  this._CartService.getProductsCart().subscribe({
    next:(res)=>{

       this._CartService.cartNumber.set(res.numOfCartItems)
      //  this._CartService.numOfCartItems.set(res.numOfCartItem)

    }
  })



}


   readonly _AuthService= inject(AuthService)




}
