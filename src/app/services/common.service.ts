import { Injectable } from '@angular/core';
import { CartItem, Product } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  products:Product[] = [
    {
      id: 1,
      title: "65 inch  QLED TV",
      price: 799.99,
      qty: 0
    },
    {
      id:2,
      title: "88 inch HDR TV",
      price: 499.99,
      qty:0
    },
    {
      id:3,
      title: "32 inch LED TV",
      price: 199.99,
      qty:0
    },
    {
      id:4,
      title: "50 inch LED TV",
      price: 299.99,
      qty: 0
    }
  ];

  cart:CartItem[] = [];

  constructor() { }
}
