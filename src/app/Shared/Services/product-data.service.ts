import { Injectable } from '@angular/core';
import { IProduct } from '../Types/product-type';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
products:IProduct[]=[
  {id:101,name:'Dettol',rate:10},
  {id:102,name:'Cinthol',rate:20},
  {id:103,name:'Hamam',rate:30},
];
  constructor() { }
  getList():IProduct[]{
    return this.products;
  }
}
