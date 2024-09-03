import { Component, inject, OnInit } from '@angular/core';
import { BrandsService } from '../../core/services/brands.service';
import { Ibrands } from '../../core/interfaces/ibrands';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent implements OnInit{

private readonly _BrandsService = inject(BrandsService)

brandsList:Ibrands[] =[]


ngOnInit(): void {
this._BrandsService.showBrands().subscribe({
  next: (res) =>{
    // console.log(res.data)
    this.brandsList = res.data


  } ,
  // error: (error) => console.error(error),
})
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