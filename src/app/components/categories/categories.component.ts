import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CategoriesService } from '../../core/services/categories.service';
import { Subscription } from 'rxjs';
import { Icategories } from '../../core/interfaces/icategories';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent  implements OnInit , OnDestroy{

  private readonly _CategoriesService = inject(CategoriesService)


  categoriesSubscribe!:Subscription

  categoryList:Icategories[]=[]

ngOnInit(): void {
   this.categoriesSubscribe= this._CategoriesService.getAllCategories().subscribe({
  next: (res) => {
    // console.log(res.data);
    this.categoryList =res.data

  },
  error: (error) => {
    // console.log(error);
  }
})
}

ngOnDestroy(): void {
this.categoriesSubscribe.unsubscribe()
}


isClicked:boolean = false

imgSrc :string = ''
name :string = ''
slug :string = ''
open(imgSrc:string , name:string , slug:string):void{
  this.isClicked = true
  // console.log(id);
  this.imgSrc = imgSrc
  this.name = name
this.slug = slug

}


}
