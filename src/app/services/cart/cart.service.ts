import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/medels/Cart';
import { CartItem } from 'src/app/shared/medels/CartItem';
import { Food } from 'src/app/shared/medels/Food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();

  addToCart(food:Food):void{
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
    if(cartItem){
      this.changeQuantity(food.id,cartItem.quantity+1);
      return;
    }
    this.cart.items.push(new CartItem(food));
  }

  removeFormCart(foodID:number):void{
    this.cart.items=this.cart.items.filter(item => item.food.id != foodID);
  }

  changeQuantity(foodID:number,quantity:number){
    let cartItem = this.cart.items.find(item => item.food.id === foodID);
    if(!cartItem) return;
    cartItem.quantity =quantity;
  }

  getCart():Cart{
    return this.cart;
  }
}
