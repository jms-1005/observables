import { Component, OnInit } from '@angular/core';
import { Product } from '../interface';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products:Product[] = [];
  constructor(private cs: CommonService) { }

  incQty(id:number){
    let index = this.products.findIndex(x => x.id === id);
    this.products[index].qty = this.products[index].qty + 1;
  }

  decQty(id:number){
    let index = this.products.findIndex(x => x.id === id);
    if(this.products[index].qty !== 0){
      this.products[index].qty = this.products[index].qty - 1;
    }
  }

  addToCart(id:number, title:string, price:number, qty:number){
    let cartindex = this.cs.cart.findIndex(x => x.id === id);
    let productindex = this.products.findIndex(x => x.id === id);
    console.log("Cart Index: ", cartindex);


    if(cartindex === -1){
      let cartitem = {
      id:id,
      qty: qty,
      title:title,
      price: price
    }
    this.cs.cart.push(cartitem);

    }
    else{
      this.cs.cart[cartindex].qty = qty;
    }

    if(qty === 0){
      this.cs.cart.splice(cartindex, 1);
    }

    this.cs.cartSubject.next(this.cs.cart);
    console.log(this.cs.cart);

  }

  removeFromCart(id:number){
    this.cs.removeFromCart(id);
  }

  ngOnInit(): void {
    this.products = this.cs.products;
  }

}
