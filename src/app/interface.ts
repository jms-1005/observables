export interface Product{
  id:number;
  title:string;
  price:number;
  qty: number;
}

export interface CartItem{
  id:number;
  qty: number;
  title:string;
  price: number;
}
